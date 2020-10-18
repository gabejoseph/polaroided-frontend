import React from 'react'
import './Post.css'
import Photo from './Photo'
import Avatar from '@material-ui/core/Avatar'

function Post( { username, caption } ) {


    return (
        <div className="post" >
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt='RafeQazi'
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
            </div>

            {/* header => avatar + username */}

            <Photo />

            <h4 className="post__text"> <strong>{username}</strong> {caption}</h4>
            {/* username + caption */}

        </div>
    ) 
}

export default Post
 