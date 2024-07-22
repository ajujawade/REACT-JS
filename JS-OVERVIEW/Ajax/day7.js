const getUser = fetch(`https://reqres.in/api/users?page=2`)
        .then((response)=>response.json())
        
const createUser = fetch(`https://reqres.in/api/users`,{
    method: "POST",
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        name:'John Doe',
        job: 'Software Developer'
    })
})
.then(function(response){
    return response.json()
})

function quickResponse(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject('I executed First !')
        },1)
    })
}

async function anyPromise(){
    try{
        let q1 = await Promise.any([getUser,
            createUser,
            quickResponse()]
        )
        console.log(q1)        
    }
    catch(error){
        console.error("All failed:",error)
    }
}

// anyPromise()

// Promise.allSettled([getUser,
//     createUser,
//     quickResponse()]
// ).then(function(arr){
//     console.log(arr)
// })

// Promise.all([getUser,
//     createUser,
//     quickResponse()]
// ).then(function(arr){
//     console.log(arr)
// })
// .catch((error)=>console.error('All Failed:',error))

Promise.race([
    getUser,
    createUser,
    quickResponse()
]
).then(function(arr){
    console.log(arr)
})
.catch((error)=>console.error('All Failed:',error))


