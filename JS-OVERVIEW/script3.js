// ternary opeartor 

// let a = 10
// let b = 5 

// if(a>b){
//     console.log("a is greater")
// }else{
//     console.log("b is greater")
// }

// a > b ? console.log("a is Greater") : console.log("b is Greater")

// let season = "Winter"

// console.log(`The City Iam Currently Living is ${season === "Winter"?"Pune":"Nagpur"}`)

// Function Declaration

// function addition(x,y){
//     return x + y
// }

// addition(12,3)

// function expression 

// let additon = function(x,y){
//     return x + y
// }

// arrow function

// let addition = (x,y) =>{
//     return x + y
// }

// let addition = (x,y) => x+y


// let numbers = [11,22,33,44,55,66,77,88,99]

// let sum = numbers.reduce((acc,el)=>acc+el)

// console.log(sum)


// this keyword

var firstName = "Ajay"
var lastName = "Jawade"

// let info = {
//     firstName : "Tejas",
//     lastName : "Gajbhe",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
        
//     displayName2 = function(){
//         console.log(this.firstName + this.lastName)

//     }
//     displayName2()   
//     }
// }

let info = {
    firstName:"Tejas",
    lastName:"Gajbhe",
    displayName:()=>{
        console.log(this.firstName + this.lastName)
    let displayName2 = ()=>{
        console.log(this.firstName + this.lastName)
    }
    displayName2()
}
}

info.displayName()
