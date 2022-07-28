const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
/* Closes hamburger after clicking onto a page */
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/*Contact Form Validation*/

const name = document.getElementById('name')
const email = document.getElementById('email')
const main = document.getElementById('main')
const errorElement = document.getElementById('error')

main.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null){
        messages.push('Name is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')


    }

})

