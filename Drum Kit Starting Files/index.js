let counter = document.querySelectorAll(".drum").length;

for (let index = 0; index < counter; index++) {

    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        alert("I got clicked!");
    });
}


// Second way to add event listener to all button elements 
// document.querySelector(".set").addEventListener("click", function() {
//     alert("I got clicked!");
// });
