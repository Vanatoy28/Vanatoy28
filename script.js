const inputField = document.getElementById("calculate");
const clear = document.getElementById("clearButton");

clear.addEventListener('click',()=>{
    inputField.value = "";
})

function digit(value){
    document.getElementById("calculate").value += value;
}

function decimal(value){
    document.getElementById("calculate").value += value;
}

function operator(value){
    document.getElementById("calculate").value += value;
}

function answer(){
    let num1 = document.getElementById('calculate').value;
    let num2 = eval(num1);
    document.getElementById('calculate').value = num2;
    return num2;
}