import Photo from './photo'
import User from './user'
import './Footer.css'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    document.getElementById('root')
);
  

document.addEventListener("DOMContentLoaded", () => {
    // fetchUsers()
    // createForm()
    // createDropDown()
    // sortButton()
})

const BASE_URL = "https://polaroided-backend.herokuapp.com"

// read 

// function fetchUsers () {
//     fetch(`${BASE_URL}/users`)
//     .then(resp => resp.json())
//     .then(users => {
//         for (const user of users) {
//             const u = new User(user.id, user.name, user.username, user.email)
//             addToDropDown(user)
//         }
        
//     })
//     fetchImages()
// }

// function addToDropDown (user) { 
//     const formsDiv = document.querySelector(".user-dropdown")

//     formsDiv.innerHTML += 

//     `
//         <option id="${user.id}" >${user.name}</option>
//     `
// }

// function fetchImages () {
//     fetch(`${BASE_URL}/photos`)
//     .then(resp => resp.json())
//     .then(photos => {
//         for (const photo of photos) {
//             const p = new Photo(photo.id, photo.img_src, photo.caption, photo.user_id)
//             p.renderPhoto();
//         }
//     })
// }

// function createForm() {
//     const usersForm = document.querySelector(".users-form")
//     usersForm.innerHTML += 
//     `
//     <form>
//         Name: <input type="text" id="name"></br>
//         Username: <input type="text" id="username"></br>
//         Email: <input type="text" id="email"></br>
//         <input type="submit" value="Create User"></br>
//         </br>
//     </form>
//     `
//     usersForm.addEventListener("submit", userFormSubmission)

// }

// function userFormSubmission (event) {
//     event.preventDefault()
//     const name = document.getElementById("name").value
//     const username = document.getElementById("username").value
//     const email = document.getElementById("email").value

//     let user = {
//         name: name, 
//         username: username,
//         email: email
//     }

//     fetch(`${BASE_URL}/users`, {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//         .then(resp => resp.json())
//         .then(user => {
//             const u = new User(user.id, user.name, user.username, user.email)
//             u.renderUser();
//         })
//     window.location.reload()
    
// }

// function createDropDown() {

//     const usersForm = document.querySelector(".dropdown-form")
//     usersForm.innerHTML += 
//     `
//     <form>
//         <label for="users">Choose a User to upload a photo:</label></br>
//         <select name="users" class="user-dropdown">
//         </select></br>
//         <input value="URL" id="url" /></br>
//         <input value="Caption" type="textarea" id="caption" /></br>
//         <input type="submit" value="Upload" />
//     </form>
//     `
//     usersForm.addEventListener("submit", handleImageUpload)
// }

// function handleImageUpload(event) {
//     event.preventDefault()
//     let userName = document.querySelector(".user-dropdown").value
//     let dropDownList = document.querySelectorAll(".user-dropdown option")
//     let caption = document.querySelector("#caption").value
//     let url = document.querySelector("#url").value

//     for ( let dropDown of dropDownList ) {
//         if ( dropDown.value === userName) {
//             var user_id = dropDown.id
//         }
//     }

//     let photo = {
//         img_src: url, 
//         caption: caption,
//         user_id: user_id
//     }

//     fetch(`${BASE_URL}/photos`, {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(photo)
//     })
//         .then(resp => resp.json())
//         .then(photo => {
//             const p = new Photo(photo.id, photo.img_src, photo.caption, photo.user_id)
//             p.renderPhoto();
//     })
// }

// function sortButton () {
//     const button = document.querySelector("#sort")
//     button.addEventListener("click", sortUsers)
// }

// function sortUsers () {
//     const usersDiv = document.querySelector(".users-container")
//     fetch(`${BASE_URL}/users`)
//     .then(resp => resp.json())
//     .then(users => {
//         users.sort(function(a, b) {
//             var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//             var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//             if (nameA < nameB) {
//               return -1;
//             }
//             if (nameA > nameB) {
//               return 1;
//             }
          
//             // names must be equal
//             return 0;
//         });
//         usersDiv.innerHTML = ""
//         for ( let user of users ) {
//             const u = new User(user.id, user.name, user.username, user.email)
//             u.renderUser();
//             // addToDropDown(user)
//         }
//     })
//     fetchImages()

// }

