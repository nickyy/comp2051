
// Declare alphabet array for letter counter function
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Function to count the occurrence of each letter of the alphabet
function letterCount(text){
    // Alphabet counter initialised to 0
    var count = {
        a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0
    };

    // Clear count values in count table
    for (var k in alphabet){
        document.getElementById("count" + alphabet[k].toUpperCase()).innerHTML = "";
    }

    // Convert all letters to lowercase
    text = text.toLowerCase();

    // Loop through alphabet array
    for (var i=0; i<text.length; i++){

        // Loop through user input text
        for (var j=0; j<alphabet.length; j++){

            // If alphabet matches the text, then increment alphabet counter
            if (text[i] === alphabet[j]){
                count[alphabet[j].toString()]++;

                // Print the counts in the count table
                document.getElementById("count" + alphabet[j].toUpperCase()).innerHTML = count[alphabet[j].toString()];
            }
        }
    }
}

// Function to count the lengths of words
function wordLengths(text){
    // Declare counter array
    var count = [];

    // Get the 'tbody' object where rows will be inserted
    var tbody = document.getElementById("wordLengthCountTableBody");

    // Clear table of previous results
    while (tbody.hasChildNodes()){
        tbody.removeChild(tbody.lastChild);
    }

    // Replace any extraneous punctuation (as listed in regex) with empty string
    //text = text.replace(/[\.,-\/#"\?!$%\^&\*;:{}=\-_`~()]/g,"");
    text = text.replace(/['\.,-\/#"\?!$%\^&\*;:{}=\-_`~()]/ig,"");

    // Parse string by spaces (using method 'split') into array of words
    text = text.split(" ");

    // Remove empty spaces from resulting array of words
    text = text.filter(function(n){return n});

    // Loop through the array of words
    for (var i=0; i<text.length; i++){

        // If element isn't initialised yet, then initialise it to 0
        if (isNaN(count[text[i].length])){
            count[text[i].length] = 0;
        }

        // Increment counter for word of length text[i].length. The indices of array count represent the word lengths, and the element at a particular index is the count
        count[text[i].length]++;
    }

    // Print out the count table (assuming there are no words of length 0)
    for (var j=1; j<count.length; j++){

        // If the count exists, then display it in the table
        if (!isNaN(count[j])){
            // Insert a new row at the last position, index -1
            var row = tbody.insertRow(-1);

            // Insert the word length cell
            var lengthCell = row.insertCell(0);

            // Insert the counter cell
            var countCell = row.insertCell(1);

            // Populate new cells
            lengthCell.innerHTML = j;
            countCell.innerHTML = count[j];
        }
    }
} // end function wordLengths


// Function to cound the number of occurrences of words
function wordCount(text){
    // Declare count (associative) array, where the key is the word, and the value is the count
    var count = {};

    // Get the 'tbody' object where rows will be inserted
    var tbody = document.getElementById("wordCountTableBody");
    var tbodyAlpha = document.getElementById("wordCountTableAlphaBody");

    // Clear count table of previous results
    while (tbody.hasChildNodes()){
        tbody.removeChild(tbody.lastChild);
    }

    // Clear alphabetical count table of previous results
    while (tbodyAlpha.hasChildNodes()){
        tbodyAlpha.removeChild(tbodyAlpha.lastChild);
    }

    // Convert all words to lowercase
    text = text.toLowerCase();

    // Replace any extraneous punctuation (as listed in regex) with empty string
    text = text.replace(/['\.,-\/#"\?!$%\^&\*;:{}=\-_`~()]/ig,"");

    // Parse string by spaces (using method 'split') into array of words
    text = text.split(" ");

    // Remove empty spaces from resulting array of words
    text = text.filter(function(n){return n});

    // Loop through all the words of the text
    for (var i=0; i<text.length; i++){
        // If the occurrence of the word is undefined in count array, then it must be first occurrence
        if (typeof(count[text[i]]) == "undefined"){
            count[text[i]] = 1;
        }
        // Otherwise it is not unique and therefore increment the counter.
        else {
            count[text[i]]++;
        }
    }

    // Convert the count object into a 2D array, countAlpha
    var countAlpha = [];
    var i=0;
    for (var index in count){
        countAlpha[i] = [];
        countAlpha[i][0] = index;
        countAlpha[i][1] = count[index]
        i++;
    }

    // Sort the countAlpha array alphabetically
    countAlpha = countAlpha.sort();

    // Print out the count table
    for (var word in count){
        // Insert a new row at the last position, index -1
        var row = tbody.insertRow(-1);

        // Insert the word length cell
        var wordCell = row.insertCell(0);

        // Insert the counter cell
        var countCell = row.insertCell(1);

        // Populate new cells
        wordCell.innerHTML = word;
        countCell.innerHTML = count[word];
    }

    // Print out alphabetically sorted count table
    for (var i=0; i<countAlpha.length; i++){
        // Insert a new row at the last position, index -1
        var rowAlpha = tbodyAlpha.insertRow(-1);

        // Insert the word length cell
        var wordCellAlpha = rowAlpha.insertCell(0);

        // Insert the counter cell
        var countCellAlpha = rowAlpha.insertCell(1);

        // Populate the cells
        wordCellAlpha.innerHTML = countAlpha[i][0];
        countCellAlpha.innerHTML = countAlpha[i][1];
    }
}

