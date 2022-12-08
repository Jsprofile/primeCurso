// Header

const header = document.querySelector("header")
const barsContainer = document.querySelector(".bar")
const nav = document.querySelector("nav")
const navOptions = document.querySelectorAll("nav a")


barsContainer.addEventListener('click', ()=>{
    barsContainer.classList.toggle("activeBars")
    nav.classList.toggle('activeNav')
})

navOptions.forEach(navOption =>{
  navOption.addEventListener('click', ()=>{
    console.log(navOption)
    nav.classList.remove('activeNav')
  })
})

window.onscroll = () =>{
  if(window.pageYOffset > 100){
    header.classList.add('activeHeader')
  }else{
    header.classList.remove('activeHeader')
  }
}


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


//Grade activing

const gradeTitles = document.querySelectorAll('.gradeTitle')

gradeTitles.forEach(gradeTitle =>{
  gradeTitle.addEventListener('click', ()=>{
    var gradeContent = gradeTitle.nextElementSibling
    gradeContent.classList.toggle('activegradeContent')


    if (gradeContent.style.maxHeight) {
      gradeContent.style.maxHeight = null;
    } else {
      gradeContent.style.maxHeight = gradeContent.scrollHeight + "px";
    } 
  })
})




//FAQ activing

const quests = document.querySelectorAll('.quest')

quests.forEach(quest =>{
  quest.addEventListener('click', ()=>{
    var answer = quest.nextElementSibling
    answer.classList.toggle('activeAnswer')

    var answerClass = answer.classList
    var answerP = answer.querySelector(`.${answerClass[0]} p`)

    console.log(answerP)

    var ansHeight = answer.scrollHeight + 40

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = ansHeight + "px";
    } 
  })
})
