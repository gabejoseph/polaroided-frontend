const BASE_URL = "https://polaroided-backend.herokuapp.com"

class User {
    constructor(id, name, username, email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }



    // instance method thats going to render the object to the dom

    renderUser() {
        const usersDiv = document.querySelector(".users-container")
        usersDiv.innerHTML += 
        `
            <div class="eachUser class="user-container" id=${this.id}>
                <div class="card-header">
                    <ul>
                        <h3>Username: ${this.username}</h3>
                        <li>${this.name} - ${this.email}</li>
                    </ul>
                </div>
                <div class="row" id=${this.id}></div>
                <button id="delete-bttn" data-id=${this.id} class="mdc-button foo-button" >
                    Delete User
                </button>
        `
        const usersForm = document.querySelector("#delete-bttn")
        usersForm.addEventListener("click", deleteUser)

    }
    
}


function deleteUser(event) {
    console.log(this.location)
    event.preventDefault()
    let userId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE'
    })

    window.location.reload()
}


export default User