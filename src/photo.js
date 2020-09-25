class Photo {

    constructor(id, img_src, caption, user_id) {
        this.id = id;
        this.img_src = img_src;
        this.caption = caption;
        this.user_id = user_id
    }


    renderPhoto() {
        const users_div = document.querySelectorAll(".row")
        for ( let user_div of users_div) {
            if (this.user_id == user_div.id) {
                user_div.innerHTML += 
            
                `   
                    <div class="column mdc-card demo-card" >
                        <img src='${this.img_src}' 
                        class="mdc-card__media mdc-card__media--16-9 demo-card__media" 
                        style="background-image: url(&quot;https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg&quot;);"
                        ></br>
                        <p class="demo-card__secondary mdc-typography mdc-typography--body2" >
                            ${this.caption}
                        </p></br>
                        <button 
                            id="delete-bttn" 
                            data-id=${this.id} 
                            class="mdc-button foo-button"
                            onClick="deleteImg()
                            mdc-button__ripple">
                            Delete Image
                        </button></br>
                    </div>  

                `
            }
        }
    }
    
}




// function deleteImg() {
//     const BASE_URL = "http://localhost:4000/"
//     let imageId = parseInt(event.target.dataset.id)

//     fetch(`${BASE_URL}/photos/${imageId}`, {
//         method: 'DELETE'
//     })
//     this.location.reload()
// }

export default Photo