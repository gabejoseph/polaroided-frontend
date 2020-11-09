import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'
import './ImageMenu.css'
import Icon from '@material-ui/core/Icon'
import Image from './Image'

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
          { 
          local.user 
          ?
          <>
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
              <Link to='/image' ><MenuItem onClick={() => this.handleClose()}>Upload Image</MenuItem></Link>
            </Menu>
          </>
          :
          <p>hi</p>
          }
      </div>
    );
  }
}

export default ImageMenu
