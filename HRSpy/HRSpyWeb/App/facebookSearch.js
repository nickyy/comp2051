/*
 *
 * Facebook Graph API
 *
 */

function searchFacebook(firstName, lastName) {
    var searchQuery;
    var NUMRESULTS = 5;

    // Process the search request based on login status
    FB.getLoginStatus(function (response) {
        // If user not logged in, then prompt to log in
        if (response.status !== "connected") {
            app.showNotification('Please log in to Facebook to search the Facebook network.');
        }

            // User is logged in
        else if (response.status === "connected") {

            searchQuery = firstName + "%20" + lastName;
        }

        // Build the HTTP request string (url) to be sent to the Graph API
        var url = "https://graph.facebook.com/search?fields=id,name,link" +
            "&q=" + searchQuery +
            "&type=user" +
            "&limit=" + NUMRESULTS;

        // Make the Graph API call
        FB.api(url, function (results) {
            // Clear results
            var outputHtml = "";

            // Show the Google logo in the results header
            outputHtml += "<img src='../facebook.jpg' alt='Facebook' class='logo'/><ul>";

            // Loop through each returned data set
            for (var i = 0; i < results.data.length; i++) {

                // Declare variables for returned JSON parameters
                var username = results.data[i].name;
                var link = results.data[i].link;
                var id = results.data[i].id;

                outputHtml += '<li class="clearfix">';
                outputHtml += '<ul class="left">';

                // Print member's name, id number, and link
                outputHtml += '<li><input type="checkbox" class="checkbox" value="fb' + i + '">' +
                    '<p style="font-weight:bold">' + username + '</p>' +
                    '<p>ID: ' + id + '</p>' +
                    '<p><a href=' + link + ' target="_blank" id="fb' + i + '">' + link + '</a></p>' +
                    '</li>';
                outputHtml += '</ul>'; // close class="left"
                outputHtml += '</li>'; // close class="clearfix"
            }

            // Display the results
            document.getElementById("results").innerHTML += outputHtml;
        });
    });
}