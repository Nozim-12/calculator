var multiplyButton = document.querySelector('.multiply-button');
var divideButton = document.getElementById("divide-button");
var addButton = document.getElementById('add-button');
var equalButton = document.getElementById('equal-button');
var subtractButton = document.getElementById('subtract-button');
var number1 = document.getElementById('number-1');
var number2 = document.getElementById('number-2');
var operator = document.querySelector('.operator');
var answerContainer = document.querySelector('.answer-container');

var answer = "";

multiplyButton.addEventListener('click', function(event) {
    var number1 = document.getElementById('number-1');
    var number2 = document.getElementById('number-2');    
    answer = parseInt(number1.value) * parseInt(number2.value);
    updatedOperator("*")
});


divideButton.addEventListener('click', function(event){
console.log('click');
    var number1 = document.getElementById('number-1');
    var number2 = document.getElementById('number-2');
    answer = parseInt(number1.value) / parseInt(number2.value);
    updatedOperator("/")
});

addButton.addEventListener('click', function(event){
console.log('click');
    var number1 = document.getElementById('number-1');
    var number2 = document.getElementById('number-2'); 
    answer = parseInt(number1.value) + parseInt(number2.value);
    updatedOperator("+")
});

subtractButton.addEventListener('click', function(event){
console.log('click');
    var number1 = document.getElementById('number-1');
    var number2 = document.getElementById('number-2'); 
    answer = parseInt(number1.value) - parseInt(number2.value);
    updatedOperator("-")
    
});

equalButton.addEventListener('click', function (event) {
    updateAnswer(answer)
});


function updatedOperator(symbol) {
    operator.textContent = symbol;
}
function updateAnswer(answer){
    answerContainer.textContent = answer;
}