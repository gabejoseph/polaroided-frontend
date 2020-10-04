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

// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import { Avatar } from "@material-ui/core"
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { userActions } from '../actions/user.actions'



//   constructor(props) {
//     super(props);

//     this.state = {
//       anchorEl: null
//     }

//     // this.handleClick = this.handleClick.bind(this)
//     this.handleClose = this.handleClose.bind(this)
//     // this.handleLogout = this.handleLogout.bind(this)
//   }

//   handleClick(event) {
//     this.setState({
//       anchorEl: event.currentTarget
//     })
//   }

//   handleClose() {
//     this.setState({
//       anchorEl: null
//     })
//   };

//   handleLogout() {
//     this.props.logout();
//     this.handleClose();
//   }

//   render() {

//     const local = localStorage

//     return (
//       <div>
//           <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}>
//               <Avatar />
//           </Button>
//           <Menu
//               id="simple-menu"
//               anchorEl={this.state.anchorEl}
//               keepMounted
//               open={Boolean(this.state.anchorEl)}
//               onClose={() => this.handleClose()}
//           >
//              {local.user ? <MenuItem onClick={() => this.handleLogout()}>Logout</MenuItem> : 
//                <div>
//                  <Link to='/login' ><MenuItem onClick={() => this.handleClose()}>Login / Register</MenuItem></Link>
//                  <MenuItem onClick={() => this.handleLogout()}>Logout</MenuItem>   
//                </div>
//              }
//           </Menu>
//       </div>
//     );
//   }
// }

// const actionCreators = {
//   logout: userActions.logout
// };

// export default connect(null, actionCreators)(SimpleMenu)



