// Promise.all()
// Promise.any()
// Promise.allSettled()
// Promise.race()

async function PromiseAll(){
    let a = await Promise.all([
        Promise.resolve("Hello1"),
        Promise.reject("Hello2"),
        Promise.resolve("Hello3")
    ])
    console.log(a)
}

//PromiseAll()

async function PromiseAny(){
    let b = await Promise.any([
        Promise.resolve("Hello"),
        Promise.reject("Helloo"),
        Promise.resolve("Hellooo")
    ])
    console.log(b)
}

//PromiseallSettled()

async function PromiseallSettled(){
    let c = await Promise.allSettled([
        Promise.resolve("Ajay"),
        Promise.reject("Tejas")
    ])
    console.log(c)
}

// PromiseallSettled()

function StudentOne(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("StudentOne")
    })
    },1000)
}

function StudentTwo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("StudentTwo")
        })
    },2000)
}

async function getRacePromise(){
    let 
}


async function PromiseRace(){
    let d = await Promise.race([
        Promise.reject("Ajay"),
        Promise.resolve("Tejas"),
        
    ])
}