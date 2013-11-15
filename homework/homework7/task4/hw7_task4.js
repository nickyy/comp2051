var defaultFont = 12;


// Function to increase font size by 2 each time button is clicked
function pimpText(){
    var text = document.getElementById("text");
    //text.style.fontSize = "2em"; //1em = 12pt, 2em = 24pt
    defaultFont += 2;
    text.style.fontSize = defaultFont + "pt";
}


// Function to add certain styles to text
function blingText(){
    var text = document.getElementById("text");
    var checkbox = document.getElementById("bling");
    if (checkbox.checked){
        text.style.fontWeight = "bold";
        text.style.color = "green";
        text.style.textDecoration = "underline";
        text.style.textDecoration += " blink";
        document.body.style.backgroundImage = "url(images/bling_background.jpg)";
        alert("Text blinged!");
    }
    else {
        text.style.fontWeight = "normal";
        text.style.textDecoration = "none";
        text.style.color = "black";
        document.body.style.backgroundImage = "none";
        alert("Text UNblinged!");
    }
}


// Function to add 'izzle' to the end of the last word in a sentence
function snoopifyText(){
    var text = document.getElementById("text");
    text.value = text.value.toUpperCase();
    // Assuming that a sentence is a string of text that ends with a period, as indicated
    text.value = text.value.split(".").join("-izzle");
}


// Function to convert words to pig latin
function pigLatinText(){
    var text = document.getElementById("text");
    var textArr = text.value.split(" ");
    text.value = "";
    for (var i=0; i<textArr.length; i++){
        var firstChar = textArr[i][0];
        if (firstChar.match(/[aAeEiIoOuUyY]/g)){
            textArr[i] = textArr[i] + "ay";
        }
        else {
            var lastChar = textArr[i][0];
            textArr[i] = textArr[i].substring(1) + lastChar + "ay";
        }
        text.value = (text.value + " " + textArr[i]).trim();
    }
}


// Function to "Malkovich" words greater than or equal to 5 characters
function malkovichText(){
    var text = document.getElementById("text");
    var textArr = text.value.split(" ");
    text.value = "";
    for (var i=0; i<textArr.length; i++){
        if (textArr[i].length >= 5){
            textArr[i] = "Malkovich";
        }
        text.value = (text.value + " " + textArr[i]).trim();
    }

}