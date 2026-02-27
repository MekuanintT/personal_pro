const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if(value === "C"){
            display.value = "";
        }
        else if(value === "="){
            try{
                display.value = eval(display.value);
            }
            catch{
                display.value = "Error";
            }
        }
        else if(value === "×"){
            display.value += "*";
        }
        else if(value === "÷"){
            display.value += "/";
        }
        else if(value === "−"){
            display.value += "-";
        }
        else{
            display.value += value;
        }

    });

});


document.addEventListener("keydown", (event) => {

    if(event.key >= 0 && event.key <= 9){
        display.value += event.key;
    }

    if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        display.value += event.key;
    }

    if(event.key === "Enter"){
        display.value = eval(display.value);
    }

    if(event.key === "Backspace"){
        display.value = display.value.slice(0,-1);
    }

    if(event.key === "Escape"){
        display.value = "";
    }

    if(event.key === "."){
        display.value += ".";
    }

});