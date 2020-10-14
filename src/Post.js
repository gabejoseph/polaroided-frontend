import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post() {
    return (
        <div className="post" >
            <div className="post_header">
                <Avatar 
                    className="post__avatar"
                    alt='RafeQazi'
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Username</h3>
            </div>

            {/* header => avatar + username */}

            <img className="post__image" src="https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale" />
            {/*  image */}

            <h4 className="post__text"> <strong>cleverqzai</strong> Wow day three of lives sessions</h4>
            {/* username + caption */}

        </div>
    )
}

export default Post
 