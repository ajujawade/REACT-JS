function getUserPageWise(page){
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(response){
        //console.log(response)
        return response.json()
    })
    .then(function(response){
        return response.data[prompt("Enter Index of Obejct : ")].id
    })
}

// getUserPageWise(2)

function getUserbyID(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        return res.data
    })
}

// getUserbyID(7)

function renderHTML(el){
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<p>${el.email}</p>`)
    document.write(`<p>${el.first_name}${el.last_name}</p>`)
    document.write(`<img src = ${el.avatar}>`)
}

// getUserPageWise(prompt("Enter Page Number : "))
// .then(function(id){
//     return getUserbyID(id)
// })
// .then(function(user){
//     renderHTML(user)
// })

async function renderUser(page){
    let id = await getUserPageWise(page)
    let user = await getUserbyID(id)
    renderHTML(user)

}

renderUser(prompt("Enter Page Number : "))