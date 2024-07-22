// Program 1
// Removing duplicate elements from array

let numbers = [11,22,33,44,55,44,11,33,22,88,66]

//console.log(new Set(numbers))
//console.log(Array.from(new Set(numbers)))

let q2 = [...new Set(numbers)]
//console.log(q2)

// Program 2
numbers = [11,22,11,33,44,55,44,55,66,77]
let q3 = numbers.filter(function(el,index,arr){
    return numbers.indexOf(el) === index
})
// console.log(q3)

// Program 3
// 0,null,undefined,false,""

numbers = [11,22,11,33,44,55,44,55,66,77]
let uarr = []
let seen = {}

for(let i=0; i<numbers.length; i++){
    let item = numbers[i]
    if(!seen[item]){
        uarr.push(item)
        seen[item]=true
    }
}
// console.log(uarr)

numbers = [11,22,11,33,44,55,44,55,66,77]
unique = []

for(let i=0; i < numbers.length; i++){
    if(unique.indexOf(numbers[i]) < 0){
        unique.push(numbers[i])
    }
}

// console.log(unique)

// SORTING

let arr = [99,77,44,55,66,22,11]

for(let i = 0; i < arr.length; i++){
    for(let j=0; j < arr.length - 1; j++){
        if(arr[j] > arr[j+1]){
            [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
        }
    }
}
console.log(arr)