// async vs sync    

// Program 1

function additionA(){
    console.log("A is Executed")
}

function additionB(){
    console.log("B is Executed")
}

// additionB()
// additionA()

// Program 2

function additionBa(){
    setTimeout(function(){
        console.log("Ba is Executed.")
    },3000)
}

function additionC(){
    setTimeout(function(){
        console.log("C is Executed.")
    })
}


// additionBa()
// additionC()

// Program 3

// User Create -----------> User ID ------------> Get Info

function getInfo(){
    setTimeout(function(){
        console.log('User Created')
    },3000)

    setTimeout(function(){
        console.log('User Id')
    },2000)

    setTimeout(function(){
        console.log('Get Info')
    },1000)
}

//getInfo()


// Program 4

function getInfo(){
    setTimeout(function(){
        console.log("User Created")

        setTimeout(function(){
            console.log("Get Id ")

            setTimeout(function(){
                console.log("Get Info")
            },1000)
        },2000)
    },3000)
}

// getInfo()

// Program 6 // Promises

// Resolve Reject Pending

let pro = new Promise(function(resolve,reject){
    let a = 10

    if(a == 10){
        resolve('Hello')
    }
    else {
        reject('Bye')
    }
})

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

pro
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("I will always Execute")
})
