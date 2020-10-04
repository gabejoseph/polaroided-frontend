import './Card.css'
import React from 'react';


const BASE_URL = "https://polaroided-backend.herokuapp.com"

class User extends React.Component {
    
    constructor(id, name, username, email) {
        super()
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }

    



    // instance method thats going to render the object to the dom

    render() {
        const usersDiv = document.querySelector(".users-container")

        return (
        
            <div class="eachUser user-container card" id={this.id}>
                <div class="card-header">
                    <ul>
                        <h3>Username: {this.username}</h3>
                        <li>{this.name} - {this.email}</li>
                    </ul>
                </div>
                <div class="row" id={this.id}></div>
                <button id={this.id}  >
                    Delete User
                </button>
        </div>

        
        )
    }
    
}

// const usersForm = document.querySelector(`#delete-bttn-${this.id}`)
// usersForm.addEventListener("click", deleteUser)


function deleteUser(event) {
    console.log('delete user')
    event.preventDefault()
    let userId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE'
    })

    window.location.reload()
}


export default User


// {loading ? <h1>loading...</h1>  :
                
//     (this.state.listings.length > 0 ? 
//         this.state.listings.map(result =>
//             <SearchResult 
//                 key = {result.id}
//                 img = {result.img}
//                 location= {result.location}
//                 title= {result.title}
//                 description= {result.description}
//                 star= {result.star}
//                 price= {result.price}
//                 total= {result.total}
//             />
//         )
    
//     :
//     this.props.listing.map(result =>
//         <SearchResult 
//             key = {result.id}
//             img = {result.img}
//             location= {result.location}
//             title= {result.title}
//             description= {result.description}
//             star= {result.star}
//             price= {result.price}
//             total= {result.total}
//         />
//     ))
// }