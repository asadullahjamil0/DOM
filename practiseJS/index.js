// by get element 

// Choosing colour by randomly generated number in dom
// document.querySelectorAll(".box")[3].style.backgroundColor = "red";


// by querySelector
// document.querySelectorAll(".box").forEach((e) => {
//     let random1 = Math.floor(Math.random() * 5)
//     if (random1 === 0) {
//         e.style.backgroundColor = "yellow"
//         e.style.color = "red"
//     }
//     else if (random1 === 1) {
//         e.style.backgroundColor = "green"
//         e.style.color = "black"
//     }
//     else if (random1 === 2) {
//         e.style.backgroundColor = "red"
//         e.style.color = "white"
//     }
//     else if (random1 === 3) {
//         e.style.backgroundColor = "aqua"
//         e.style.color = "white"
//     }
//     else {
//         e.style.backgroundColor = "grey"
//         e.style.color = "pink"
//     }
// })

function getRandomColour() {
    let val1 = Math.floor(Math.random() * 255)
    let val2 = Math.floor(Math.random() * 255)
    let val3 = Math.floor(Math.random() * 255)
    return `rgb(${val1},${val2},${val3})`;
}
function getRandomColour1() {
    let random2 = Math.floor(Math.random() * 16777215)
    return "#" + random2;
}


// we can use both several method to choose random colour 
document.querySelectorAll(".box").forEach((e) => {
    // e.style.backgroundColor = getRandomColour1()
    // e.style.color = getRandomColour1()

    e.style.backgroundColor = getRandomColour()
    e.style.color = getRandomColour()
})
