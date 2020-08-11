class Photo {
    constructor(img_src, caption, user_id) {
        this.img_src = img_src;
        this.caption = caption;
        this.user_id = user_id
    }

    // instance method thats going to render the object to the dom

    renderPhoto() {
        const user_div = document.getElementById(`${this.user_id}`)
        
        console.log(user_id)
        
        user_div.innerHTML += 
        `
        <img src='${this.img_src}'>
        `

    }
}