window.onload = function(){
    // Define the components of a sentence
    var article         = ["the", "a", "one", "that", "this", "some"];
    var noun1           = ["mime", "chime", "lime", "grime", "slime", "dime"];
    var verb            = ["dove", "jumped", "ran", "walked", "skipped", "parachuted"];
    var preposition     = ["to", "from", "over", "under", "on", "around"];
    var adjective       = ["rickety", "hungry", "mighty", "smoked", "hypnotized", "monstrous"];
    var noun2           = ["brick", "tick", "hick", "slick", "fish stick", "chick"];

    // Define the structure of one sentence
    var structure = [article, noun1, verb, preposition, article, adjective, noun2];

    const NUM_SENTENCES = 5;
    var sentence = new Array(NUM_SENTENCES);

    // Function to generate a random integer from 0 to (arr.length - 1)
    function randNum(arr){
        return Math.floor(Math.random()*(arr.length));
    }

    // Create the sentences and store into 2D sentence array
    for (var line=0; line<NUM_SENTENCES; line++){
        sentence[line] = [];
        for (var word=0; word<structure.length; word++){

            // For lines 1, 2, and 5, make sure the last words are unique and rhyming
            if ((line == 0) || (line == 1) || (line == 4)){

                // If it's the last word, splice the array so the same value isn't used twice
                if (word == (structure.length-1)){
                    sentence[line][word] = noun2.splice(randNum(noun2),1);
                }
                else {
                    sentence[line][word] = structure[word][randNum(structure[word])];
                }
            }
            // For lines 3 and 4, make sure the last words are unique and rhyming
            else {
                // If it's the last word, splice the array so the same value isn't used twice
                if (word == (structure.length-1)){
                    sentence[line][word] = noun1.splice(randNum(noun1),1);
                }
                // If it's line 3 or 4, and it's the second word, then pick from noun2 array
                else if (word == 1){
                    //alert(noun2);
                    sentence[line][word] = noun2[randNum(noun2)];
                }
                else {
                    sentence[line][word] = structure[word][randNum(structure[word])];
                }
            }
//            sentence[line][word] = structure[word][randNum()];
        }
    }

    // Declare output variable
    var output = document.getElementById("output");

    // Print out the entire limerick
    // Loop through each line i
    for (var i=0; i<sentence.length; i++){

        if ((i == 2) || (i == 3)){
            output.innerHTML += "<span style='padding-left:70px;'>";
        }

        // Loop through each word j
        for (var j=0; j<sentence[i].length; j++){

            // Capitalise the first letter of each sentence
            var firstLetter = sentence[i][0].substr(0,1);
            firstLetter = firstLetter.toUpperCase();
            sentence[i][0] = firstLetter + sentence[i][0].substr(1);

            // Add a line return after the last word only of the sentence
            if (j == sentence[i].length - 1){
                output.innerHTML += sentence[i][j] + "<br>";
            }
            // Add a space after each word only if it's not the last word
            else {
                output.innerHTML += sentence[i][j] + " ";
            }
        }
        if ((i == 2) || (i == 3)){
            output.innerHTML += "</span>";
        }
    }
};