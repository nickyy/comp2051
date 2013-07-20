/*
 *
 * Facebook Graph API
 *
 */

function searchFacebook(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var searchQuery;
    var NUMRESULTS = 5;

    // Process the search request based on login status
    FB.getLoginStatus(function(response){
        // If user not logged in, then prompt to log in
        if (response.status !== "connected"){
            alert("Please log in to Facebook to search the Facebook network.");
        }

        // User is logged in
        else if (response.status === "connected"){
            // Validate user input. First name and last name cannot be blank
            if ((firstName.length == 0) || (lastName.length == 0)){
                appendResults("<img src='facebook.jpg' alt='Facebook' class='logo'/><p>Firstname and Lastname must not be blank</p>");
                return;
            }
            else {
                searchQuery = firstName + "%20" + lastName;
            }

            // Build the HTTP request string (url) to be sent to the Graph API
            var url = "https://graph.facebook.com/search?fields=id,name,link" +
                "&q=" + searchQuery +
                "&type=user" +
                "&limit=" + NUMRESULTS;

            // Make the Graph API call
            FB.api(url, function(results){
                // Clear results
                var outputHtml = "";

                // Show the Google logo in the results header
                outputHtml += "<img src='facebook.jpg' alt='Facebook' class='logo'/><ul>";

                // Loop through each returned data set
                for (var i=0; i<results.data.length; i++){

                    // Declare variables for returned JSON parameters
                    var username = results.data[i].name;
                    var link = results.data[i].link;
                    var id = results.data[i].id;

                    outputHtml += '<li class="clearfix">';
                    outputHtml += '<ul class="left">';

                    // Print member's name, id number, and link
                    outputHtml += '<li><input type="checkbox" class="checkbox" value="">' +
                        '<p style="font-weight:bold">'+ username + '</p>' +
                        '<p>ID: ' + id + '</p>' +
                        '<p><a href=' + link + ' target="_blank">' + link + '</a></p>' +
                        '</li>';
                    outputHtml += '</ul>'; // close class="left"
                    outputHtml += '</li>'; // close class="clearfix"
                }

                // Display the results
                appendResults(outputHtml);
            });
        }
    });
}