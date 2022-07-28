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


const validateForm = () => {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const message = document.getElementById('message')
    
    if (name.value && email.value && phone.value && message.value) {
            if (email.value.includes('@')) {
                    alert(`Thanks for submitting your message ${name.value}!`)
            } else {
                alert('Please include a valid email with an @ symbol')
            }
    } else {
        alert('Please make sure all 4 fields are filled out')
    }
}
//main.addEventListener('submit', (e) => {
    //let messages = []
    //if (name.value === '' || name.value == null){
        //messages.push('Name is required')
    

    //if (messages.length > 0) {
       // e.preventDefault()
        //errorElement.innerText = messages.join(', ')
