// JavaScript source code for the Standardized_Testing
var pages = [
    "/potentia/Standardized_Testing/SAT/SAT.html",
    "/potentia/Standardized_Testing/ACT/ACT.html",
    "/potentia/Standardized_Testing/Standardized_Testing.html",
    "/potentia/Standardized_Testing/AP_Exams/AP_Exams.html",
    "/potentia/Standardized_Testing/Subject_Test/Subject_Test.html" 
]


document.getElementById("prev").addEventListener("click", function () {
      // Change to the prev page
      event.preventDefault();
      previous();
});

function previous() {
    var current = location.pathname;
    var idx = pages.indexOf(current);
    if (idx < 0) {
        idx = 4
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
    if (idx > 5) {
        idx = 0
    }
    location.replace(pages[idx+1]);
}

