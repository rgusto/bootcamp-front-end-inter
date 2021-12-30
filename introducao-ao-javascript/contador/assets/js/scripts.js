var currentNumberWrapper = document.getElementById("currentNumber");
var maxValue = 10;
var minValue = 0;
var currentNumber = minValue;
currentNumberWrapper.innerHTML = currentNumber;
controlButtons();

function increment() {
    if (currentNumber < maxValue) {
        currentNumber++;
    }
    currentNumberWrapper.innerHTML = currentNumber;
    controlButtons();
}

function decrement() {
    if (currentNumber > minValue) {
        currentNumber--;
    }
    currentNumberWrapper.innerHTML = currentNumber;
    controlButtons();
}

function controlButtons() {

    document.getElementsByName("adicionar")[0].disabled = currentNumber === maxValue;    
    document.getElementsByName("subtrair")[0].disabled = currentNumber === minValue;

}