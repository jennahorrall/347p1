// menu bar and button
var menuBar = document.getElementById("menu-bar");
var menuButton = document.getElementById("menu");
var closeButtom = document.getElementById("close-menu-button");

// pages
var home = document.getElementById("home");
var whoWeAre = document.getElementById("who-we-are");
var meetExec = document.getElementById("meet-exec");
var covidUpdates = document.getElementById("covid-updates");
var meetings = document.getElementById("meetings");
var merchAndDues = document.getElementById("merch-and-dues");
var contact = document.getElementById("contact");
var questions = document.getElementById("questions");

// workaround for media query
// set menu to full size if less than 500px
function displayMenu() {
    if (window.outerWidth <= 500) {
        menuBar.style.width = "100%";
        menuButton.style.display = "none";
    } else {
        menuBar.style.width = "300px";
        menuButton.style.display = "none";
    }
}

function closeMenu() {
    menuBar.style.width = "0px";
    menuButton.style.display = "flex";
}

function homeListener() {
    if (home.getAttribute("href") == "#") {
        closeMenu();
    }
}

function whoWeAreListener() {
    if (whoWeAre.getAttribute("href") == "#") {
        closeMenu();
    }
}

function meetExecListener() {
    if (meetExec.getAttribute("href") == "#") {
        closeMenu();
    }
}

function covidUpdatesListener() {
    if (covidUpdates.getAttribute("href") == "#") {
        closeMenu();
    }
}

function meetingsListener() {
    if (meetings.getAttribute("href") == "#") {
        closeMenu();
    }
}

function merchAndDuesListener() {
    if (merchAndDues.getAttribute("href") == "#") {
        closeMenu();
    }
}

function contactListener() {
    if (contact.getAttribute("href") == "#") {
        closeMenu();
    }
}

function questionsListener() {
    if (questions.getAttribute("href") == "#") {
        closeMenu();
    }
}

//add listeners
menuButton.addEventListener("click", displayMenu);
closeButtom.addEventListener("click", closeMenu);
home.addEventListener("click", homeListener);
whoWeAre.addEventListener("click", whoWeAreListener);
meetExec.addEventListener("click", meetExecListener);
covidUpdates.addEventListener("click", covidUpdatesListener);
meetings.addEventListener("click", meetingsListener);
merchAndDues.addEventListener("click", merchAndDuesListener);
contact.addEventListener("click", contactListener);
questions.addEventListener("click", questionsListener);