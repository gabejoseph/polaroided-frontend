import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Photo.css'

function Photo( { imageUrl } ) {


    return (
        <>
            
            <img className="post__image" src={imageUrl} />
            {/*  image */}

        </>
    ) 
}

export default Photo
 