
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
        count[i] = [];
        count[i][0] = 0;
        count[i][1] = 0;
        count[i][2] = '';

       for (var j=0; j<count.length; j++){
           if (count[j][0] == text[i].length){
               count[j][1]++;
               count[j][2] += ", " + text[i];
           }
       }

        count[i][0] = text[i].length;
        count[i][1] += 1;
        count[i][2] = text[i];
//        alert("word = " + count[i][2]);
    }

    // Print out the count table
    for (var j=0; j<count.length; j++){
            // If the count exists, then display it in the table

//        alert("j = " + j);
                // Insert a new row at the last position, index -1
                var row = tbody.insertRow(-1);

                // Insert the word length cell
                var lengthCell = row.insertCell(0);

                // Insert the counter cell
                var countCell = row.insertCell(1);

                // Insert the word
                var wordCell = row.insertCell(2);

                // Populate new cells
                lengthCell.innerHTML = count[j][0];
                countCell.innerHTML = count[j][1];
                wordCell.innerHTML = count[j][2];

    }
} // end function wordLengths
