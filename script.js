let button = document.getElementById('button');
function calculateSquare (){
    let number = document.getElementById('input1').value;
    let square = document.getElementById('input2');
    square.value = number ** 2;
}
button.addEventListener('click', calculateSquare);