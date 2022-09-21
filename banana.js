var translateInput = document.querySelector("#t-input");
var button= document.querySelector("#t-button");
button.addEventListener("click", buttonClickHandler)
var translateOutput = document.querySelector("#t-output");

var url = "https://api.funtranslations.com/translate/minion.json";

function constructURL(inputText) {
    return url + "?" + "text=" +inputText;
}

function buttonClickHandler(event){
var input = translateInput.value;
var finalURL = constructURL(input)
console.log(finalURL)

fetch(finalURL)
.then (response => response.json())
.then (json=>{translateOutput.innertext = json.contens.translated;})
.catch(() => alert("Error. Try again after some time"))
}
