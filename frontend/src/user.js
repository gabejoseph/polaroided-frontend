class User {
    constructor(id, name, username, email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }

    // instance method thats going to render the object to the dom

    renderUser() {
        const usersDiv = document.getElementById("users-container")
        usersDiv.innerHTML += 
        `
            <ul>
            <h3>Username: ${this.username}</h3>
            <li>${this.name} - ${this.email}</li>
            </ul>
        `
    }
    
}