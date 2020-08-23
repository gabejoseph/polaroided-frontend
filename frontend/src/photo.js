class Photo {



    constructor(img_src, caption, user_id) {
        this.img_src = img_src;
        this.caption = caption;
        this.user_id = user_id
    }


    renderPhoto() {
        const user_div = document.getElementById(`${this.user_id}`)
        if (this.user_id == user_div.id) {
            
            user_div.innerHTML += 

            `
            <button class="upload" id='${this.user_id}' >Upload Photo</button></br>
    
            <img src='${this.img_src}'><p>${this.caption}</p>
            `
        }

    }
    

}

