import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className="post" >
            
            <h3>Username</h3>
            {/* header => avatar + username */}

            <img className="post__image" src="https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale" />

            {/*  image */}

            <h4>Username: caption</h4>
            {/* username + caption */}

        </div>
    )
}

export default Post
