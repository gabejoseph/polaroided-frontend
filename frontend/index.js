document.addEventListener("DOMContentLoaded", () => {
    fetchUsers()
    createForm()
})

const BASE_URL = "http://localhost:3000/"

// read 

function fetchUsers () {
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (const user of users) {
            const u = new User(user.id, user.name, user.username, user.email)
            u.renderUser();
        }
    })
}

// create

    // create a form
    // add an event listener
    // once form is submitted => fetch 'post' to my back end 
    // do something with the returned object

    function createForm() {
        const usersForm = document.getElementById("users-form")

        usersForm.innerHTML += 
        `
        <form>
            Name: <input type="text" id="name"></br>
            Username: <input type="text" id="username"></br>
            Email: <input type="text" id="email"></br>
            <input type="submit" value="Create User">
        </form>
        `
        usersForm.addEventListener("submit", userFormSubmission)
    }

    function userFormSubmission () {
        event.preventDefault()
        const name = document.getElementById("name").value
        const username = document.getElementById("username").value
        const email = document.getElementById("email").value

        let user = {
            name: name, 
            username: username,
            email: email
        }

        fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(resp => resp.json())

    }

// delete