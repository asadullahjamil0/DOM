console.log("This tutorial is about strings")

let me = "asad"
console.log(me[0])
console.log(me[1])
console.log(me[2])
console.log(me[3])

console.log(me.length)

let friendName = "BILAL"
console.log("My name is " + me + " and my friends name is " + friendName)
console.log(`My name is ${me} and my friends name is ${friendName}`)



console.log(me.toUpperCase())
console.log(friendName.toLowerCase())
console.log(friendName.slice(1,4))
console.log(friendName.slice(2))

let anotherNAme = "mubashir"

console.log(friendName.replace("BILAL",anotherNAme))
console.log(friendName.concat(me.concat(anotherNAme)))
