function getUser(id){
    fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(res){
        console.log(res.data)
    })
}

// getUser(2)

// POST 

function createUser(){
    fetch(`https://reqres.in/api/users`,{
        method : 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify({
            name:'John Doe',
            job : 'Software Developer'
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.error(error)
    })
}
//createUser()

function updateUser(){
    fetch(`https://reqres.in/api/users/2`,{
        method : 'PUT',
        headers : {
            'Content-Type':'application/json'
        },
        body : JSON.stringify({
            "name": "morpheus",
            "job": "zion resident"
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
    })
}

//updateUser()

// DELETE

function deleteUser(){
    fetch(`https://reqres.in/api/users/2`,{
        method : 'DELETE'
    })
    .then(function(response){
        //console.log(response)
        if(response.status == 204){
            console.log('User Deleted Successfully!')
        }
    })
}

//deleteUser()


// Program 1

async function getUser(id){
    try{
        let response = await fetch(`https://reqres.in/api/users/${id}`)
        let res = await response.json()
        console.log(res.data)
    }
    catch(error){
        console.error(error)
    }
}
//getUser(3)

// Program 2

async function CreateUser(){
    try{
        let response = await fetch(`https://reqres.in/api/users`,{
            method : 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                name:'John Doe',
                job : 'Software Developer'
            })
        })
        let responseb = await response.json()
        console.log(responseb)
    }
    catch(error){
        console.error(error)
    }
}
//CreateUser()

// Program 3

async function UpdateUser(){
    try{
        let response = await fetch(`https://reqres.in/api/users/2`,{
            method : 'PUT',
            headers : {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                "name": "morpheus",
                "job": "zion resident"
            })
        })
        let responseb = await response.json()
        console.log(responseb)
    }
    catch(error){
        console.error(error)
    }
}
//UpdateUser()

// Program 4

async function DeleteUser(){
    try{
        let response = await fetch(`https://reqres.in/api/users/2`,{
                method : 'DELETE'
            })
        if(response.status == 204){
            console.log('User Deleted Successfully!')
        }
    }
    catch(error){
    console.error(error)
}
}
DeleteUser()