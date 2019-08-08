// JavaScript source code for the Standardized_Testing
var pages = [
    "/Standardized_Testing/SAT/SAT.html",
    "/Standardized_Testing/ACT/ACT.html",
    "/Standardized_Testing/Standardized_Testing.html",
    "/Standardized_Testing/AP_Exams/AP_Exams.html",
    "/Standardized_Testing/Subject_Test/Subject_Test.html" 
]


document.getElementById("prev").addEventListener("click", function () {
      // Change to the prev page
      event.preventDefault();
      previous();
});

function previous() {
    var current = location.pathname;
    var idx = pages.indexOf(current);
    if (idx < 1) {
        idx = 5
    }
    location.replace(pages[idx - 1]);
}

document.getElementById("next").addEventListener("click", function (event) {
      // Change to the next page
      event.preventDefault();
      next();
});


function next() {
    var current = location.pathname;
    var idx = pages.indexOf(current);
    if (idx > 3) {
        idx = -1
    }
    location.replace(pages[idx+1]);
}

