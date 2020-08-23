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
            <div id=${this.id}>
            <ul>
            <h3>Username: ${this.username}</h3>
            <li>${this.name} - ${this.email}</li>
            </ul>
            <button class="upload" id='${this.user_id}' >Upload Photo</button></br>
            <button class="delete-bttn" data-id=${this.id} onClick="deleteUser()">Delete User</button>
            <div>
        `
        handleClick()
    }

    
}

function handleClick() {
    const uploadListener = document.querySelector(`.upload`)
    uploadListener.addEventListener("click", handleImageUpload)
}

function handleImageUpload () {
    
}