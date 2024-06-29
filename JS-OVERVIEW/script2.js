// let cities = ["Chandrapur","Nagpur","Wardha","Pune"]

// let newArr = [...cities,"Yavatmal"] //SPREAD OPERATOR

// console.log(cities)
// console.log(newArr)

// let [c1,...citi] = cities // REST OPERATOR

// console.log(c1)
// console.log(citi)

let num = [11,22,33,44,55]

// function add(a,b,c){
//     console.log(a+b+c)
// }

// // add(num[0],num[1],num[2])
// add(...num)

function addAll(...arr){
    console.log(arr)
    return arr.reduce(function(acc,el){
        return acc+el
    },0)
}

let sum = addAll(11,22,33,44,55,66,77,88,99)
console.log(sum)

// program 3

let info = {
    firstName:"Ajay",
    lastName:"Jawade",
    age:20
}

let infob = {info,id:2250}
console.log(infob)

let infoc = {...info,id:225018}
console.log(infoc)

let {id,...infod} = infoc

console.log(id)
console.log(infod)


// TEMPLATE LITERALS

let firstName = "Ajay"
let lastName = "Jawade"

console.log(`My First Name is ${firstName} and My Last Name is ${lastName}`)


let season = "rain"

console.log(`My Current city is ${season === "rain"?"Pune":"Nagpur"}`)

let a = 5
let b = 10

console.log(a > b ? "a is greater" : "b is greater")

console.log(`${9+9}`)//output as string 
console.log(9+9) //output as number