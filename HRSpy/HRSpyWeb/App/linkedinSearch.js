/*
 *
 * LinkedIn search API
 *
 */

// LinkedIn Search
function searchLinkedIn(fname, lname, city, keywords) {
    if (!IN.User.isAuthorized()) {
        app.showNotification('Please log in to LinkedIn to search the LinkedIn network.');
    }

    IN.API.PeopleSearch()
        // Required results data
        .fields("firstName", "lastName", "positions", "location:(name)", "picture-url", "headline", "summary", "public-profile-url")

        .params({
            "first-name": fname,
            "last-name": lname,
            "keywords": keywords,
            "count": "15",
            "sort": "relevance"
        })
        .result(function (result) { displayLinkedInResults(result, city) })
        .error(displayPeopleSearchErrors);
}

// Runs when the LinkedIn PeopleSearch() API call returns successfully
function displayLinkedInResults(peopleSearch, locationName) {
    // Variable for that contains a collection of matching members
    var members = peopleSearch.people.values;

    // Variable for location in a lower case with removed spaces at the beginning and the end of the entered value
    var locationName = locationName.trim().toLowerCase();

    // Variable for results html (with the beginning logo part)
    var html = '<img src="../linkedin.png" alt="LinkedIn" class="logo"/><ul>';

    // Counter for found members (if it is 0 'Nothing found' message will be printed)
    var membersFound = 0;

    // Loop through the member list and build the html
    for (var i = 0; i < members.length; i++) {
        var member = members[i];

        // LinkedIn requires a city/country code to make a location search but even with this I couldn't make it, this is a manual filter for that
        if (locationName.length > 0) {
            // If location is undefined go to the next member
            if (member.location === undefined)
                continue;

            // If location is defined make it lower case
            var location = member.location.name.toLowerCase();

            // If location doesn't contain the requested city/counry go to the next member
            if (location.search(locationName) === -1)
                continue;
        }

        // Put the found data to the list by adding it to the html variable
        html += '<li class="clearfix">';

        // If there is no profile image show placeholder from the http://placehold.it source
        if (member.pictureUrl === undefined)
            member.pictureUrl = 'http://placehold.it/50x50';

        // Member's image
        html += '<img src="' + member.pictureUrl + '" class="left"/>';

        html += '<ul class="left">';

        // Print member's first and last name
        html += '<li><input type="checkbox" class="checkbox" value="ln0' + i + '"><p><strong id="ln0'+i+'">' + member.firstName + ' ' + member.lastName + '</strong></p></li>';

        // Print member's location if it is defined
        if (member.location !== undefined)
            html += '<li><input type="checkbox" class="checkbox" value="ln1' + i + '"><p id="ln1' + i + '">' + member.location.name + '</p></li>';

        // Print member's headline if it is defined
        if (member.headline !== undefined)
            html += '<li><input type="checkbox" class="checkbox" value="ln2' + i + '"><p id="ln2' + i + '">' + member.headline + '</p></li>';

        // Print member's summary if it is defined
        if (member.summary !== undefined)
            html += '<li><input type="checkbox" class="checkbox" value="ln3' + i + '"><p id="ln3' + i + '">' + member.summary + '</p></li>';

        // Print member's LinkedIn profile link
        html += '<li><input type="checkbox" class="checkbox" value="ln4' + i + '"> <a href="' + member.publicProfileUrl + '" id="ln4' + i + '">' + member.publicProfileUrl + '</a></li>';

        html += '</ul>';

        html += '</li>';

        // Increase the founded members by 1
        membersFound++;
    }

    // If nothing found print the 'Nothing found' message
    if (membersFound == 0) {
        html += "<li>Nothing found</li>";
    }

    html += '</ul>';

    // Put the results to the appendResults function
    document.getElementById("results").innerHTML += html;
}

// This function is called if there any errors in the LinkedIn API
function displayPeopleSearchErrors(error) { app.showNotification(error.message); }