import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'
import './ImageMenu.css'
import Icon from '@material-ui/core/Icon'

// import { userActions } from '../actions/user.actions'

class ImageMenu extends React.Component {
 

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null, 
      photo: {
        img_src: "",
        caption: "",
        user_id: ""
      }
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


  render() {

    const local = localStorage

    return (
      <div className="button_menu" >
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}>
            <Icon >add_circle</Icon>
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


function handleUpload(photo) {
  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(photo)
  };

  // return fetch(`${BASE_URL}/photos`, requestOptions).then(handleResponse);
}

// function handleResponse(response) {
//   return response.text().then(text => {
//       const data = text && JSON.parse(text);
//       if (!response.ok) {
//           if (response.status === 401) {
//               // auto logout if 401 response returned from api
//               // logout();
//               // location.reload(true);
//           }
//           const error = (data && data.message) || response.statusText;
//           return Promise.reject(error);
//       }
//       console.log(data)
//       return data;
//   });
// }