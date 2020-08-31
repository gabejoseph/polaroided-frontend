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
        <div class="eachUser mdc-card mdc-card--outlined" id=${this.id}>
            <div class="user-data-container" >
                <ul>
                    <h3>Username: ${this.username}</h3>
                    <li>${this.name} - ${this.email}</li>
                </ul>
                <button 
                    id="delete-bttn" 
                    data-id=${this.id} 
                    onClick="deleteUser()"
                    class="mdc-button foo-button">
                    <div class="mdc-button__ripple"></div>
                    Delete User
                </button>
            </div>
        </div>
        `

    }

    
}

