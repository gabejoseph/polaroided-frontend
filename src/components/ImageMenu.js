import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from "@material-ui/core"
import { Link } from 'react-router-dom'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import './ImageMenu.css'

// import { userActions } from '../actions/user.actions'

class ImageMenu extends React.Component {
 

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    }

    // this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    // this.handleLogout = this.handleLogout.bind(this)
  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose() {
    this.setState({
      anchorEl: null
    })
  };

  handleLogout() {
    this.props.logout();
    this.handleClose();
  }

  render() {

    const local = localStorage

    return (
      <div className="button_menu" >
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}>
              <ExpandMoreIcon />
          </Button>
          <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={() => this.handleClose()}
          >
             {local.user ? <MenuItem onClick={() => this.handleLogout()}>Logout</MenuItem> : 
               <div>
                 <Link to='/login' ><MenuItem onClick={() => this.handleClose()}>Login / Register</MenuItem></Link>
                 <MenuItem onClick={() => this.handleLogout()}>Logout</MenuItem>   
               </div>
             }
          </Menu>
      </div>
    );
  }
}

// const actionCreators = {
//   logout: userActions.logout
// };

export default ImageMenu


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
//             // const p = new Photo(photo.id, photo.img_src, photo.caption, photo.user_id)
//             // p.renderPhoto();
//     })
// }
