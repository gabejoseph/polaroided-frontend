import './Card.css'
import React from 'react';
import Button from '@material-ui/core/Button'


const BASE_URL = "https://polaroided-backend.herokuapp.com"

class User extends React.Component {
    
    constructor() {
        super()
        // this.id = id;
        // this.name = name;
        // this.username = username;
        // this.email = email;

        this.state = {
            users: []
        }

        
    
    }

    componentDidMount() {
        fetch(`${BASE_URL}/users`)
        .then(resp => resp.json())
        .then(users => {
            this.setState({
                users: users
            })
        })
        // fetchImages()
    }



    // instance method thats going to render the object to the dom

    render() {
        return (
            <div>
                {
                this.state.users.length === 0 
                ? 
                <p>No Data</p> 
                : 
                this.state.users.map(result => 
                <div class="eachUser user-container card" id={result.id}>
                    <div class="card-header">
                        <ul>
                            <h3>Username: {result.username}</h3>
                            <li>{result.name} - {result.email}</li>
                        </ul>
                    </div>
                    <div class="row" id={result.id}></div>
                    <Button id={result.id} onClick={deleteUser} >
                         Delete User
                    </Button>
                </div>)
                }
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