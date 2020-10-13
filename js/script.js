function displayMenu() {
    document.getElementById("menu-bar").style.width = "300px";
    document.getElementById("menu").style.display = "none";
}
function closeMenu() {
    document.getElementById("menu-bar").style.width = "0px";
    document.getElementById("menu").style.display = "flex";
}

function homeListener() {
    if (document.getElementById("home").getAttribute("href") == "#") {
        closeMenu();
    }
}
function whoWeAreListener() {
    if (document.getElementById("who-we-are").getAttribute("href") == "#") {
        closeMenu();
    }
}

function meetExecListener() {
    if (document.getElementById("meet-exec").getAttribute("href") == "#") {
        closeMenu();
    }
}

function covidUpdatesListener() {
    if (document.getElementById("covid-updates").getAttribute("href") == "#") {
        closeMenu();
    }
}

function meetingsListener() {
    if (document.getElementById("meetings").getAttribute("href") == "#") {
        closeMenu();
    }
}

function merchAndDuesListener() {
    if (document.getElementById("merch-and-dues").getAttribute("href") == "#") {
        closeMenu();
    }
}

function contactListener() {
    if (document.getElementById("contact").getAttribute("href") == "#") {
        closeMenu();
    }
}

function questionsListener() {
    if (document.getElementById("questions").getAttribute("href") == "#") {
        closeMenu();
    }
}


document.getElementById("menu").addEventListener("click", displayMenu);
document.getElementById("close-menu-button").addEventListener("click", closeMenu);
document.getElementById("home").addEventListener("click", homeListener);
document.getElementById("who-we-are").addEventListener("click", whoWeAreListener);
document.getElementById("meet-exec").addEventListener("click", meetExecListener);
document.getElementById("covid-updates").addEventListener("click", covidUpdatesListener);
document.getElementById("meetings").addEventListener("click", meetingsListener);
document.getElementById("merch-and-dues").addEventListener("click", merchAndDuesListener);
document.getElementById("contact").addEventListener("click", contactListener);
document.getElementById("questions").addEventListener("click", questionsListener);