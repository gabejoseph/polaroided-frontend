class Photo {



    constructor(img_src, caption, user_id) {
        this.img_src = img_src;
        this.caption = caption;
        this.user_id = user_id
    }


    renderPhoto() {
        console.log(this)
        const user_div = document.querySelector(`.eachUser`)
        if (this.user_id == user_div.id) {
            
            user_div.innerHTML += 

            `    
            <img src='${this.img_src}'><p>${this.caption}</p>
            `
        }

    }
    

}

