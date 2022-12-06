// Header

const barsContainer = document.querySelector(".bar")
const nav = document.querySelector("nav")


barsContainer.addEventListener('click', ()=>{
    barsContainer.classList.toggle("activeBars")
    nav.classList.toggle('activeNav')
})
