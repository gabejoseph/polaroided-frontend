import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post( { photo, users } ) {

    return (

            <>

                {
                users.map(user => 
                    user.id === photo.user_id
                    ?
                    <>
                        <div className="post" >
                            <div className="post__header">
                                <Avatar 
                                    className="post__avatar"
                                    alt='RafeQazi'
                                    src="/static/images/avatar/1.jpg"
                                />
                                <h3>{user.username}</h3>
                            </div>

                            <img className="post__image" src={photo.img_src} alt="" />

                            <h4 className="post__text"> <strong>{user.username}</strong> {photo.caption}</h4>
                        </div>    
                    </>
                    :
                    <><p className="no__data"></p></>                    
                    )

                }
                

            </>


    ) 
}

export default Post

// function deleteUser(event) {
//     console.log('delete user')
//     event.preventDefault()
//     let userId = parseInt(event.target.dataset.id)

//     fetch(`${BASE_URL}/users/${userId}`, {
//         method: 'DELETE'
//     })

//     window.location.reload()
// }