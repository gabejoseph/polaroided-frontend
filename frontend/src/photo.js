class Photo {
    constructor(img_src, caption, user_id) {
        this.img_src = img_src;
        this.caption = caption;
        this.user_id = user_id
    }

    // instance method thats going to render the object to the dom

    renderPhoto() {
        let user_div = document.getElementById(`${this.user_id}`)
        // attach all photos where user_id = div id

        
        user_div.innerHTML += 

        `
        <button />
        <img src='${this.img_src}'><p>${this.caption}</p>
        `

    }
}