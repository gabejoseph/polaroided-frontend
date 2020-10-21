import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import LanguageIcon from "@material-ui/icons/Language"
// import { Link } from 'react-router-dom'
import SimpleMenu from './SimpleMenu'
import { Button } from '@material-ui/core'
import ImageMenu from './ImageMenu'

function Header() {

    return (
        <div className="app__header" >
            {/* <Link to='/' > */}

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
                    <LanguageIcon />
                    <ImageMenu />
                </div>
                <SimpleMenu />
            </div>

            
        </div>

    )
}

export default Header
