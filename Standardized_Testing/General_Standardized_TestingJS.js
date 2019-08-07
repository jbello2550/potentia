// JavaScript source code for the Standardized_Testing
$(document).ready(function () {
    next();
    previous();
});

var pages = [
    "SAT/SAT.html",
    "ACT/ACT.html",
    "Standardized_Testing/Standardized_Testing.html",
    "AP_Exams/AP_Exams.html",
    "Subject_Test/Subject_Test.html" 
]

function previous() {
    document.getElementById("prev").addEventListener("click", function () {
        // Change to the prev page

    });
}
function next() {
    document.getElementById("next").addEventListener("click", function () {
        // Change to the next page        
        console.log('bob');
        var num = 4
        location.replace(pages[num]);
        num -= 1
    });
}