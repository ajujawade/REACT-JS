function getInfo(){
    setTimeout(function(){
        console.log("User Created")
        setTimeout(function(){
            console.log("User ID")
            setTimeout(function(){

            },1000)
        },2000)
    },3000)
}
// getInfo()

// Program

function userCreated(){
    return new Promise(function(resolve,reject){
       setTimeout(function(){
        resolve("User Created")
       })
    })
}

function userId(){
    return new Promise(function(resolve,reject){
       setTimeout(function(){
        resolve("User Id")
       }) 
    }
)}

function getinfo(){
    return new Promise(function(resolve,reject){
       setTimeout(function(){
        resolve("Get Info")
       })
    })
}

// userCreated()
// .then(function(str){
//     console.log(str)
//     return userId()
// })
// .then(function(str){
//     console.log(str)
//     return getinfo()
// })
// .then(function(str){
//     console.log(str)
// })

//async await 

async function getinfouser(){
    let q1 = await userCreated()
    console.log(q1)
    let q2 = await userId()
    console.log(q2)
    let q3 = await getinfo()
    console.log(q3)
}
getinfouser()