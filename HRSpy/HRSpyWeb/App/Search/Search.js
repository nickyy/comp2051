/// <reference path="../App.js" />
/// <reference path="../Visualization.js" />

(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();
            $('#fname_bind').click(function () { bindToExistingData("fname") });
            $('#lname_bind').click(function () { bindToExistingData("lname") });
            $('#city_bind').click(function () { bindToExistingData("city") });
            $('#keywords_bind').click(function () { bindToExistingData("keywords") });
            $('#search').click(checkSearchFilters);
            $("#backToSearch").click(function () {
                document.getElementById("resultsContainer").style.display = "none"
                document.getElementById("searchContainer").style.display = "block";
            })

            $(".checkbox").live("change", function () {
                if (this.checked) {
                    bindToExcelCell(this.value);
                }
            });

            if (IN.User.isAuthorized()) {
                //checkbox visible
            }

        });
        
    };

    function bindToExistingData(inputId) {

        Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
         { valueFormat: "unformatted", filterType: "all" },

         function (asyncResult) {
             var error = asyncResult.error;
             if (asyncResult.status === Office.AsyncResultStatus.Failed || asyncResult.value == "") {
                 app.showNotification('Could not copy. Please try again.');
             } else {
                 document.getElementById(inputId).value = asyncResult.value;
             }
         });
 
    }

    function bindToExcelCell(chbxId) {
        var el = document.getElementById(chbxId);
        if (el.tagName == "A") {
            var text = el.href;
        } else {
            var text = el.innerHTML;
        }

        Office.context.document.setSelectedDataAsync(text,
        function (asyncResult) {
            var error = asyncResult.error;
            if (asyncResult.status === Office.AsyncResultStatus.Failed || asyncResult.value == "") {
                app.showNotification('Please select a cell in a document');
            }
        });
    }
    function checkSearchFilters() {
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var city = document.getElementById("city").value;
        // Make sure checkboxes are checked
        var checkboxes = document.getElementsByName("socialFilter");
        var isChecked = false;
        var socialFilters = new Array();
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                isChecked = true;
                socialFilters.push(checkboxes[i].value);
            }
        }
        if (fname && lname && isChecked) {
            var searchValues = { 'fname': fname, 'lname': lname, 'city': city, 'network': socialFilters };
            window.localStorage.setItem('searchValues', JSON.stringify(searchValues));
            //window.location.href = '../SearchResult/SearchResult.html';
            document.getElementById("searchContainer").style.display = "none";
            document.getElementById("resultsContainer").style.display = "block"
            searchAndDisplayDataOrRedirect();
        } else {
            app.showNotification('Please enter first and last names and check at least one network filter');
        }
    }

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
                        searchLinkedIn(searchValues.fname, searchValues.lname, searchValues.city, searchValues.keywords);
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
            //window.location.href = '../Search/Search.html';
        }
    }


    // Clear the id="results" element
    function clearList() {
        document.getElementById("results").innerHTML = "";
    }

    // Populate the id="results" element
    function appendResults(html) {
        document.getElementById("results").innerHTML += html;
    }

})();