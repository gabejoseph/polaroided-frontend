import React from 'react'
import Button from '@material-ui/core/Button'


const BASE_URL = "https://polaroided-backend.herokuapp.com"

class Photo extends React.Component {

    constructor() {
        super()
        // this.id = id;
        // this.img_src = img_src;
        // this.caption = caption;
        // this.user_id = user_id

        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        fetch(`${BASE_URL}/photos`)
        .then(resp => resp.json())
        .then(photos => {
            this.setState({
                photos: photos
                
            })
        })
    }

    render () {
        const photos_div = document.querySelectorAll(".row")
        return (
            <div>
                {
                this.state.photos.length === 0 
                ? 
                <p>No Data</p> 
                : 
                this.state.photos.map(result => 



                <div class="eachUser user-container card" id={result.id}>
                    <div class="card-header">
                        <ul>
                            <h3>Username: {result.username}</h3>
                            <li>{result.name} - {result.email}</li>
                        </ul>
                    </div>
                    <div class="row" id={result.id}></div>



                    <Button id={result.id} onClick={deleteImg} >
                         Delete User
                    </Button>
                </div>)
                }

                
            </div>
            for ( let user_div of users_div) {
                if (this.user_id == user_div.id) {
                    user_div.innerHTML += 
                
                    `   
                        <div>
                            <img src='${this.img_src}' 
                            ></br>
                            <p>
                                ${this.caption}
                            </p></br>
                            <button 
                                id="img-delete" 
                                data-id=${this.id} 
                                >
                                Delete Image
                            </button></br>
                        </div>  

                    `
                    const imgForm = document.querySelector("#img-delete")
                    imgForm.addEventListener("click", deleteImg)
                }
            }

        )}
    
}

function deleteImg (event) {
    event.preventDefault()
    let imageId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/photos/${imageId}`, {
        method: 'DELETE'
    })

    window.location.reload()
}



export default Photo