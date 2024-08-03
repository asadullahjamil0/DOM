
function myName(name) {
    console.log(name + " You are so good!")
    console.log(name + " You are so good in coding also!")
    console.log(name + " You are so good in talking!")
}

function sum(num1, num2, num3 = 5) {
    console.log(num1 + num2 + num3)
}

sum(12)
sum(12, 23)
sum(12, 56)

const func1 = (x) => {
    console.log("Hey I am an arrow funcion ", x)
}

func1(1)
func1(2)
func1(3)