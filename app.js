//  url :	

var inputText =  document.querySelector(".input-txt");

var btnTranslate = document.querySelector(".btn-translate");

var outputText =  document.querySelector(".output-txt");

var serverurl = "https://api.funtranslations.com/translate/shakespeare.json"; 

function getTranslationUrl(text) {
    return serverurl + "?" + "text=" + text;
}

// error Handle 
function errorhandler(error) {
    console.log("error occured",error);
    alert("Something wrong with the server! Try after sometime");
}

//taking input 

function clickhandler(){
    var inputTxt = inputText.value;

    //calling the server for processing

    fetch(getTranslationUrl(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText =  translatedText;
    })
    .catch(errorhandler)

};

btnTranslate.addEventListener("click",clickhandler);