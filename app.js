// Header

const barsContainer = document.querySelector(".bar")
const nav = document.querySelector("nav")


barsContainer.addEventListener('click', ()=>{
    barsContainer.classList.toggle("activeBars")
    nav.classList.toggle('activeNav')
})


//Ppupers activing

const activers = document.querySelectorAll('#portalActiver')
const wrappers = document.querySelectorAll('#portalWrapper')
const popupClosers = document.querySelectorAll('#popupCloser')
const popups = document.querySelectorAll('.popup')

activers.forEach((activer) =>{
  activer.addEventListener('click', ()=>{
    console.log(activer)
    var rWrapper = [...wrappers].filter(el => el.dataset.subject == activer.dataset.subject).map(elem =>{
      elem.style.display = 'flex'
    })
    })
})

popupClosers.forEach(closer =>{
  closer.addEventListener('click', ()=>{
    [...wrappers].map(e => {
      e.style.display = 'none'
    })
  })
})
