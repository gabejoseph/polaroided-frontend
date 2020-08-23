class Photo {



    constructor(img_src, caption, user_id) {
        this.img_src = img_src;
        this.caption = caption;
        this.user_id = user_id
        console.log(this)
    }

    // instance method thats going to render the object to the dom

    renderPhoto() {
        let user_div = document.getElementById(`${this.user_id}`)

        // attach all photos where user_id = div id

        
        user_div.innerHTML += 

        `
        <button class="upload" id=${this.user_id} >Upload Photo</button></br>

        <img src='${this.img_src}'><p>${this.caption}</p>
        `

        user_div.addEventListener("click", handleClick)

    }

}

function handleClick() {
    const uploadListener = document.querySelector(`.upload, #${user_id}`)
    uploadListener.addEventListener("click", () => console.log("handleClick"))

}