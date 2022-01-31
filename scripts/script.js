let button = document.getElementById("button")
let buttonClose = document.getElementById("buttonClose")
let menuPhone = document.getElementById("menuPhone")
let contentAuthor = document.getElementById("contentAuthor")
let menuPc = document.getElementById("menuPc")
let media = window.matchMedia("(min-width: 1024px)")
let active = false

button.addEventListener("click", () => {
    if (button.click && active == false) {
        if (media.matches) {
            menuPc.style.display = "flex"
            active = true
        } else {
            contentAuthor.style.display = "none"
            menuPhone.style.display = "flex"

            buttonClose.addEventListener("click", () => {
                contentAuthor.style.display = "flex"
                menuPhone.style.display = "none"
            })
        }
    } else if (button.click && active == true) {
        if (media.matches) {
            menuPc.style.display = "none"
            active = false
        }
    }
})
