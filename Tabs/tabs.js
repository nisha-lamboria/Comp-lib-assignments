const tabs=document.querySelectorAll('[data-tab-target]')
console.log(tabs)
console.log(Array.from(tabs))

Array.from(tabs).forEach(tab=>{
    tab.addEventListener("click",()=>{
        const target=document.querySelector(tab.dataset.tabTarget)
        target.classList.add('active')
    })
})