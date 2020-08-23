document.addEventListener("DOMContentLoaded", () => {
    fetchUsers()
    createForm()
    sortButton()
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
        addToForm(users)
    })
    fetchImages()
}

function addToForm (users) {
    console.log(users)
}

function fetchImages () {
    fetch(`${BASE_URL}/photos`)
    .then(resp => resp.json())
    .then(photos => {
        for (const photo of photos) {
            const p = new Photo(photo.img_src, photo.caption, photo.user_id)
            p.renderPhoto();
        }
    })
}

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
        .then(user => {
            const u = new User(user.id, user.name, user.username, user.email)
            u.renderUser();
        })
}

// delete

function deleteUser() {
    let userId = parseInt(event.target.dataset.id)
    console.log(userId)

    fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE'
    })
    
    this.location.reload()
}

function sortButton () {
    const button = document.querySelector(".sort")
    button.addEventListener("click", sortUsers)
}

function sortUsers () {
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        users.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
        const usersDiv = document.getElementById("users-container")
        usersDiv.innerHTML = '' 
        renderUser(users)
    })


}


