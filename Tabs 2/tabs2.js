let tabLinks= document.querySelectorAll('a')
// let activeTabs=document.querySelectorAll('tabs-list.active')
let tabs=document.querySelectorAll('.tab')
let arrayTabLinks=Array.from(tabLinks)


Array.from(tabLinks).forEach((tabLink)=>{
    tabLink.addEventListener("click",(e)=>{
        console.log('clicked')
        e.preventDefault()
        console.log(e.target)
        let activeElems=document.querySelectorAll('.active')
        console.log(activeElems)
        activeElems.forEach(el=>{
            el.classList.remove('active')
        })
        console.log(activeElems)
        e.target.classList.add('active')
    })
})