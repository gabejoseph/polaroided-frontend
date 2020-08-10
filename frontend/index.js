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
            <input type="submit" value="Create User"
        </form>
        
        
        
        `
    }

// delete