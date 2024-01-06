const buttons = ['AC', '%', 'DEL', '+', '7', '8', '9', '−', '4', '5', '6', '×', '1', '2', '3', '÷', '00', '0', '.', '='];
const display = document.querySelector("input");
display.value = '';
const warningMsg = document.querySelector(".warningMsg");

const btnArea = document.querySelector(".btnArea");
buttons.forEach(btn => {
    const button = document.createElement("button");
    btnArea.append(button);
    button.innerHTML = btn;
});

const btns = document.querySelectorAll(".btnArea button");

btns.forEach(btn => btn.addEventListener("click", () => {

    if (btn.innerText == '=') {
        try {
            display.value = eval(display.value);
        }
        catch (e) {
            warningMsg.style.visibility = 'visible';
        }
    }
    else if (btn.innerText == 'AC') {
        warningMsg.style.visibility = 'hidden';
        display.value = '';
    }
    else if (btn.innerHTML == '×') {
        display.value += '*';
    }
    else if (btn.innerHTML == '÷') {
        display.value += '/';
    }
    else if (btn.innerHTML == '−') {
        display.value += '-';
    }
    else if (btn.innerHTML == 'DEL') {
        display.value = display.value.slice(0, -1);
    }
    else if (btn.innerHTML == '%') {
        const currentValue = parseFloat(eval(display.value));
        const result = currentValue / 100;
        display.value = result;
    }
    else {
        display.value += btn.innerText;
    }
    if (display.value === 'undefined') {
        warningMsg.style.visibility = 'visible';
    }

})); 