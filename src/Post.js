import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post( { photo, users, username, caption, imageUrl } ) {

    return (

            <div className="post" >


                {
                users.map(user => 
                    user.id === photo.user_id
                    ?
                        <>
                        <div className="post__header">
                            <Avatar 
                                className="post__avatar"
                                alt='RafeQazi'
                                src="/static/images/avatar/1.jpg"
                            />
                            <h3>{user.username}</h3>
                        </div>
                        
                        <img className="post__image" src={photo.img_src} />
    
                        <h4 className="post__text"> <strong>{user.username}</strong> {photo.caption}</h4>
                    </>
                    :
                    <p>noData</p>
                    
                )

                }
                

            </div>


    ) 
}

export default Post
 