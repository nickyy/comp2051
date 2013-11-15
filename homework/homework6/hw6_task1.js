window.onload = function(){

    var onceUponATime = "Once Upon A Time ... ";
    var theEnd = "THE END";

    // Define the components of a sentence
    var article = ["the", "a", "one", "some", "any"];
    var noun = ["boy", "girl", "dog", "town", "car"];
    var verb = ["drove", "jumped", "ran", "walked", "skipped"];
    var preposition = ["to", "from", "over", "under", "on"];

    // Define the structure of one sentence
    var structure = [article, noun, verb, preposition, article, noun];

    const NUM_SENTENCES = 2;
    var sentence = new Array();

    // Function to generate a random integer from 0 to 4
    function randNum(){
        return Math.floor(Math.random()*5);
    }

    // Create the two sentences and store into 2D sentence array
    for (var s=0; s<NUM_SENTENCES; s++){
        sentence[s] = [];
        for (var i=0; i<structure.length; i++){
            sentence[s][i] = structure[i][randNum()];
        }
    }

    var output = document.getElementById("output");

    // Print the 'Once Upon A Time' line
    output.innerHTML += "<p id='start'>" + onceUponATime + "</p>";

    for (var i=0; i<sentence.length; i++){
        for (var j=0; j<sentence[i].length; j++){

            // Capitalise the first letter of each sentence after the FIRST sentence
            if (i != 0){
                //sentence[i][0] = "<span style='text-transform:capitalize;'>" + sentence[i][0] + "</span>";
                var firstLetter = sentence[i][0].substr(0,1);
                firstLetter = firstLetter.toUpperCase();
                sentence[i][0] = firstLetter + sentence[i][0].substr(1);
            }

            // Add a period after the last word only of the sentence
            if (j == sentence[i].length - 1){
                output.innerHTML += sentence[i][j] + ".<br> ";
            }
            // Add a space after each word only if it's not the last word
            else {
                output.innerHTML += sentence[i][j] + " ";
            }
        }
    }
    // Print out 'THE END' line
    output.innerHTML += "<p id='end'>" + theEnd + "</p>";
};