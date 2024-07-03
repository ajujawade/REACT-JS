// truthy and falsy

let a1 = "" && 7

console.log(a1)


let a2 = 8 === 8 && 7
console.log(a2)

let a11 = 0
let b12 = 42
let b13 = null
let b14 = "hello"

console.log(a11 && b12)

console.log(b13 && b14)

let b15 = null
let b16 = 7 != 7
let f = b15 || b16

console.log(f)

let b15b = "A"
let f12 = b15b ||b16

console.log(f12)

let h1 = false
let h2 = 10 === '10'
let r = false || h2

console.log(r)

let j = 9 > 11
let k = undefined
let jk = k || j

console.log(jk)

console.log(null ?? "hello")
console.log(0 && 'hello')
console.log(undefined ?? 'hello')

// Optional Operator 

let info = {
        firstName : 'Ajay',
        lastName : 'Jawade',
        parent : {
            mother : 'Surekha Jawade',
            father : 'Latari Jawade'
        }
}

console.log(info.paren?.father)