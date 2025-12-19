const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value
            .replace(/÷/g, "/")
            .replace(/×/g, "*");

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

function setTheme(theme) {
    document.body.classList.remove("theme-blue","theme-green","theme-red");
    document.body.classList.add("theme-" + theme);
}

function toggleDark() {
    document.body.classList.toggle("dark");
}


