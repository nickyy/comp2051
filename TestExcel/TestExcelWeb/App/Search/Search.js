/// <reference path="../App.js" />
/// <reference path="../Visualization.js" />

(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();
            //attach click events
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
        });

    };

    //paste data from a selected cell in the document into an input on the form in the app 
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

    //copy data from the app and paste it in a cell in the document 
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

    //validate input values
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
            searchValues = JSON.stringify(searchValues);
            document.getElementById("searchContainer").style.display = "none";
            document.getElementById("resultsContainer").style.display = "block"
            searchAndDisplayDataOrRedirect(searchValues);
        } else {
            app.showNotification('Please enter first and last names and check at least one network filter');
        }
    }
    //search social media networks 
    function searchAndDisplayDataOrRedirect(searchValues) {
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
            app.showNotification('Please enter first and last names and check at least one network filter');
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