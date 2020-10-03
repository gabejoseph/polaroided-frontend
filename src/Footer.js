import './Footer.css'

class Footer {

    renderFooter() { 
        const footer = document.querySelector(".footer-container")
        console.log(footer)
        footer.innerHTML += 
        `
        <div className="footer">
            <p>No rights reserved.  Demo purposes only.</p>
            <p>Privacy · Terms · Sitemap</p>
        </div>
        `
    }
}

export default Footer