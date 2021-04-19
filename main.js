var timer;
var istrue = false;
var delay = 3000; // how much long u have to hold click in MS
function func() {
    istrue = true;
    timer = setTimeout(function () {
        makeChange();
    }, delay);
}

function makeChange() {
    if (timer)
        clearTimeout(timer);

    if (istrue) {
        /// rest of your code
        window.open("index.html", "_blank");

    }
}

function revert() {
    istrue = false;
}

var nav = [
    "<h3><a href='index.html'>Home</a></h3>",
    "<h3><a href='about.html'>About</a></h3>",
    "<h3><a href='SLinks.html'>Links</a></h3>",
    "<h3><a href='activity.html'>Activity</a></h3>",
    "<h3><a href='cal.html'>Calender</a></h3>",
    "<h3><a href='FAQ.html'>FAQ</a></h3>",
    "<h3><a href='contact.html'>Contact</a></h3>",
    "<h3><a href='web.html'>Website</a></h3>"
];
console.log(nav);
var reomas = nav.join(" ");
console.log(reomas);

function lis() {
    document.getElementById("List").innerHTML = reomas;
    var x = document.getElementById("List");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
