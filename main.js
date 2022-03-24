
let headerLi = document.querySelectorAll("header .container .nav ul li"),
    headerTop = document.querySelector("header"),
    sectionShow = document.querySelectorAll("section")


headerLi.forEach((e)=>{
    e.addEventListener("click",function(){
        document.querySelector('header .container .nav ul li.active').classList.remove('active')
        e.classList.add('active')

        // ................

        let target = e.dataset.show ;

        sectionShow.forEach(section => {
            if (target !== 'home') {
                if (section.classList.contains(target)) {
                    headerTop.classList.add('header-top')
                    document.querySelectorAll("section").forEach(e => { e.classList.remove('show') });
                    section.classList.add('show')                
                }
            }else{
                headerTop.classList.remove('header-top')
                section.classList.remove('show') 
            }
        });

    })
})


// ..................open menu phone

document.querySelector('header .menu').addEventListener("click",()=>{
    document.querySelector("header .container .nav").classList.toggle('phone')
    document.querySelectorAll("header .menu ion-icon").forEach(e=>{
        e.classList.toggle('close')
    })
})
headerLi.forEach(e=>{
    e.addEventListener('click',()=>{
        document.querySelector("header .container .nav").classList.remove('phone')
        document.querySelectorAll("header .menu ion-icon").forEach(e=>{
        e.classList.toggle('close')
    })
    })
})