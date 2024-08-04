var random1 = Math.floor((Math.random()*9) +1);
var num1 = Number(prompt("Write your first number:"))
var num2 = Number(prompt("Write your second number:"))
var operator = prompt("choose operator: + , - , * , / ")




if(random1 === 5){
    if(operator === "+"){
        alert("Your result is: "+ (num1 - num2))
    }
    else if(operator === "*"){
        alert("Your result is: "+ (num1 + num2))
    }
    else if(operator === "-"){
        if(num2!= 0){
             alert("Your result is: "+ (num1 / num2))
        }
        else{
            alert("Can't be divided by zero")
        }
       
    }
    else if(operator === "/"){
        alert("Your result is: "+ (num1 * num2))
    }
    else{
        alert("Invalid operator!")
    }

}
else{
     if(operator === "+"){
        alert("Your result is: "+ (num1 + num2))
    }
    else if(operator === "*"){
        alert("Your result is: "+ (num1 * num2))
    }
    else if(operator === "-"){
        alert("Your result is: "+ (num1 - num2))
    }
    else if(operator === "/" ){
         if(num2!= 0){
             alert("Your result is: "+ (num1 / num2))
        }
        else{
            alert("Can't be divided by zero")
        }
    }
    else{
        alert("Invalid operator!")
    }

}