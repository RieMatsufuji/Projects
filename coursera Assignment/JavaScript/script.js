// function sayHello() {
//     alert("Clicked!");
// }

document.addEventListener("DOMContentLoaded",
    function (event) {

        function sayHi(event) {
            this.textContent = "said it!"
            var name =
                document.getElementById("name").value;
            var message = "<h2>Hi " + name + "!<h2>";

            document.getElementById("content").innerHTML = message;

            if (name === "student") {
                var title = document.querySelector("#title").textContent;
                title += " & Loving it!";
                document.querySelector("h1").textContent = title;
            }
        }

        document.querySelector("button").addEventListener("click", sayHi);

    }
);


// function pushButton(num) {
//     alert(num + "button was clicked");
// }