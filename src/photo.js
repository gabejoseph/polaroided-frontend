const BASE_URL = "https://polaroided-backend.herokuapp.com"

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

    }
    
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