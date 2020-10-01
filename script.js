function displayMenu() {
    document.getElementById("menu-bar").style.width = "300px";
}
function closeMenu() {
    document.getElementById("menu-bar").style.width = "0px";
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

function practicesListener() {
    if (document.getElementById("practices").getAttribute("href") == "#") {
        closeMenu();
    }
}

function merchAndDuesListener() {
    if (document.getElementById("merch-and-dues").getAttribute("href") == "#") {
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
document.getElementById("practices").addEventListener("click", practicesListener);
document.getElementById("merch-and-dues").addEventListener("click", merchAndDuesListener);
document.getElementById("questions").addEventListener("click", questionsListener);