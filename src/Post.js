import React from 'react'
import './Post.css'
import Photo from './Photo'
import Avatar from '@material-ui/core/Avatar'

function Post( { photo, users, username, caption, imageUrl } ) {

    console.log(photo.img_src)

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

            {
                users.map(user => 
                    <Photo 
                        user_id={user.id}
                        image_url={imageUrl}
                    />
                )
            }


            <h4 className="post__text"> <strong>{username}</strong> {caption}</h4>

        </div>
    ) 
}

export default Post
 