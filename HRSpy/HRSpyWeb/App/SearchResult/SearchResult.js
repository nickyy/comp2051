/// <reference path="../App.js" />
/// <reference path="../Visualization.js" />

(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();
            searchAndDisplayDataOrRedirect();
        });
    };

    function searchAndDisplayDataOrRedirect() {
        var searchValues = window.localStorage.getItem("searchValues");
        if (searchValues) {
            // Clear the results
            clearList();
            var returnHTML = "";
            searchValues = JSON.parse(searchValues);

            for (var i = 0; i < searchValues.network.length; i++) {
                switch (searchValues.network[i]) {
                    case "google":
                        searchGoogle(searchValues.fname, searchValues.lname, searchValues.city);
                        break;
                    case "linkedin":
                        searchLinkedIn(searchValues.fname, searchValues.lname, searchValues.city);
                        break;
                    case "facebook":
                        searchFacebook(searchValues.fname, searchValues.lname, searchValues.city);
                        break;
                    case "twitter":
                        searchTwitter(searchValues.fname, searchValues.lname, searchValues.city);
                        break;
                }
            }
            //display results
            setTimeout(function () { appendResults(returnHTML) }, 0);
        } else {
            window.location.href = '../Search/Search.html';
        }
    }


    // Clear the id="results" element
    function clearList() {
        document.getElementById("results").innerHTML = 'Loading...';
    }

    // Populate the id="results" element
    function appendResults(html) {
        document.getElementById("results").innerHTML += html;
    }
})();