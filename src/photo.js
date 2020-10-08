import React from 'react'
import Button from '@material-ui/core/Button'


const BASE_URL = "https://polaroided-backend.herokuapp.com"

export default class Photo extends React.Component {

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

    deleteImg (event) {
        event.preventDefault()
        let imageId = parseInt(event.target.dataset.id)
    
        fetch(`${BASE_URL}/photos/${imageId}`, {
            method: 'DELETE'
        })
    
        window.location.reload()
    }

    render () {
        const photos_div = document.querySelectorAll(".row")
        return (
            <div>
                {this.state.photos.length === 0 
                ? 
                <p>No Data</p> 
                : 
                <p>Data</p>
                }
            </div>
        )
    }
}