const txtinput = document.querySelector("#myText");
const transBtn = document.querySelector("#btnTranslate");
const outputDiv = document.querySelector("#output");




function clickHandler() {
    console.log(txtinput.value);
    outputDiv.innerText = "TRanslated Text";
}

transBtn.addEventListener("click", clickHandler);
//console.log(txtinput);