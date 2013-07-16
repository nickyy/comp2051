// Declare variables
// APIKey and cx come from Google custom search app
var APIkey = "AIzaSyDyiMofz1ICejp1ZyFpySsWGza9ZgtOc3A";
var cx = "001099189718690345077:2j68kiguug8";
var numResults = 5;

// Fill the id="result" element
function appendResults(html){
    document.getElementById("results").innerHTML += html;
}

// Function to get JSON response from query string
function searchGoogle(){
    // Get the first and last names. For Google search, both should be required for a valid search.
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Validate user input
    if ((firstName.length == 0) || (lastName.length == 0)){
        appendResults("<img src='google.png' alt='Google' class='logo'/><ul>Firstname and/or Lastname must not be blank");
    }
    // First name and last name are both present, so fetch the JSON results
    else {
        var query = firstName + "%20" + lastName;
        var url = "https://www.googleapis.com/customsearch/v1?key=" + APIkey +
            "&num=" + numResults +
            "&cx=" + cx +
            "&q=" + query +
            "&callback=?";
        $.getJSON(url, searchComplete);
    }
}

// Callback function to process search results
function searchComplete(results){
    // Clear results
    var outputHtml = "";

    // Show the Google logo in the results header
    outputHtml += "<img src='google.png' alt='Google' class='logo'/><ul>";

    // If no search results are found, then display a message
    if ((results.items == null) || (results.items.length === 0)){
        $("#results").html("No matches found for " + query + ".");
        return;
    }

    outputHtml += "<p style='font-style:italic'>Returning top " + numResults + " results.</p>";

    // Loop through returned results and form the potentially massive output string
    for (var i=0; i<results.items.length; i++){
        var item = results.items[i];
        var link = item.link;
        var title = item.htmlTitle;
        var snippet = item.htmlSnippet;

        // Append the retrieved data to outputHtml variable
        outputHtml += '<li class="clearfix">';
        outputHtml += '<ul class="left">';

        // Print member's first and last name
        outputHtml += '<li><input type="checkbox" class="checkbox" value=""><p style="font-weight:bold"><a href="'+ link + '">' + title + '</a></p><p>' + snippet + '</p></li>';
        outputHtml += '</ul>'; // close class="left"
        outputHtml += '</li>'; // close class="clearfix"
    }

    $("#results").html(outputHtml);
}