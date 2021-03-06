import React from 'react'
import './Header.css'
import SimpleMenu from './SimpleMenu'
import { Button } from '@material-ui/core'
import ImageMenu from './ImageMenu'

function Header() {

    return (
        <div className="app__header" >

            <img 
                className="app__headerImage"
                src="https://i.imgur.com/ZwFwl3E.jpg"
                alt=""
            />

            <div className='app__header_right'>
                <Button id="sort"  >
                    <span >Sort Users</span>
                </Button>
                
                <div className="app__header_minimenu">
                    <ImageMenu />
                </div>
                <SimpleMenu />
            </div>

            
        </div>

    )
}

export default Header
