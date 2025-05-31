// var x =3;

// if (x>3) {
    
//     console.log("x is greater than 3");
// } else {
//         console.log("x is less than 3");

// }
// const searchInput = document.getElementById('searchInput');
// const searchButton = document.getElementById('searchButton');
// const resultText = document.getElementById('resultText');

// searchButton.addEventListener('click', () => {
//   const searchTerm = searchInput.value.trim();

//   const searchResult = handleSearch(searchTerm);

//   resultText.insertAdjacentText('beforeend', `\n${searchResult}`);
// });

// function handleSearch(searchTerm) {
//   return `Search result for "${searchTerm}"`;
// }





var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

button.onclick = function() {
    text.innerHTML = input.value;
};

var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var button1 = document.querySelector('#btn2_id');
var ans = document.querySelector('#answer');

button1.addEventListener("click", function(){
    ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
})



button.onclick = function() {
    const inputValue = parseInt(input.value, 10);

    if (isNaN(inputValue)) {
        text.innerHTML = "Input value is not a number";
    } else if (inputValue > 10) {
        text.innerHTML = "Input value is bigger than 10";
    } else if (inputValue < 10) {
        text.innerHTML = "Input value is less than 10";
    } else {
        text.innerHTML = "Input value is equals to 10";
    }
}
