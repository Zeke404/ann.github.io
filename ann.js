// script.js

function revealMessage(id) {
    var message = document.getElementById(id);
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}