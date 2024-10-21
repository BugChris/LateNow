let darkModeEnabled = false;
 
const darkModeButton = document.getElementById("darkModeButton");
 
darkModeButton.addEventListener("click", () => {
    darkModeEnabled = !darkModeEnabled;
 
    if(darkModeEnabled) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
 
const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
}
 
const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
}
 
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
 
 
 
 
 
 
// Funktion zum Lesen eines Cookies
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
 
// Darkmode umschalten und Zustand speichern
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
   
    // Checkbox-Schalter synchronisieren
    document.getElementById('darkModeCheckbox').checked = isDarkMode;
 
    // Cookie setzen, um den Zustand zu speichern
    setCookie('darkMode', isDarkMode ? 'enabled' : 'disabled', 7); // Speichere für 7 Tage
}
 
// Zustand des Darkmode beim Laden der Seite wiederherstellen
window.onload = function() {
    const darkModeCookie = getCookie('darkMode');
    if (darkModeCookie === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeCheckbox').checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('darkModeCheckbox').checked = false;
    }
}