

const scrollHeader = ()=>{

    const header = document.getElementById('header')
    if(this.scrollY >= 50){
        header.classList.add('scroll__header')
    }else{
        header.classList.remove('scroll__header')
    }
}

window.addEventListener('scroll',scrollHeader)


const sections = document.querySelectorAll('.section[id]')


const scrollActive = ()=>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50

        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}

window.addEventListener('scroll', scrollActive)