document.addEventListener("DOMContentLoaded", () => {
    fetchUsers()
})

const BASE_URL = "http://localhost:3000/"

// read 

function fetchUsers () {
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (const user of users) {
            console.log("rails object", user)
            let u = new User(user.id, user.name, user.username, user.email)
            console.log("javascript object", u)
        }
    })
}

// create


// delete