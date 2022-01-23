// const chipButtons=document.getElementsByClassName("cross-chip")
// const chipElems=document.getElementsByClassName("chip-ele")
// console.log(chipElems)
// console.log(chipButtons)
// const chipsArray=Array.from(chipElems)
// const chipBtArray=Array.from(chipButtons)
// console.log(chipsArray)
// console.log(chipBtArray)

// Array.from(chipButtons).forEach((element,index)=>{
//     element.addEventListener("click",()=>deleteChip(element.id))
// })
// function deleteChip(chipId){
//     chipsArray.splice(chipId,1)
//     console.log(chipsArray) 
// }



//take input
//listen to input
//update input
// const inputChipsContainer=document.getElementsByClassName("input-chip-container")
// const chipInput=document.getElementById("input-chip")
// console.log(chipInput)


// const chipModify=()=>{
//     console.log(chipInput.value)
//     console.log(chipInput.value.length)

// }

// chipInput.addEventListener('input',chipModify)

const chipBox=document.getElementsByClassName('input-chip-container')
const chipBoxArray=Array.from(chipBox)
const inputChip=document.getElementById('input-chip')

const chips=[]

function createChip(chipName){
    const div=document.createElement('div');
    div.setAttribute('class','chip-ele chip-ele-input')
    const btn=document.createElement('button')
    div.innerHTML=chipName
    btn.innerHTML='&times;'
    btn.setAttribute('class','cross-chip button closebtn')
    btn.setAttribute('data-item',chipName)
    console.log(btn)
    // btn.setAttribute('class','button')
    div.appendChild(btn)
    return div

}
function reset(){
    document.querySelectorAll('.chip-ele-input').forEach((element)=>{
        element.parentElement.removeChild(element)
    })
}
const addChips=()=>{
    reset()
    chips.slice().reverse().forEach((element)=>{
        const chipele=createChip(element)
        chipBoxArray[0].prepend(chipele)
        
    })
}

inputChip.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        // const chip=createChip(inputChip.value)
        // chipBoxArray[0].prepend(chip)
        chips.push(inputChip.value)
        addChips()
        inputChip.value=""
    }
})




// function removeChip(){
    
//     //     const getTarget=e.target.getAttribute('data-item')
//     // const index=chips.indexOf(getTarget)
//     chips=[...chips.slice(0,index),...chips.slice(index+1)]
//     console.log(chips)
//     addChips()
    

// }

console.log(chipBoxArray)

chipBoxArray.forEach((element,index)=>{
    
})







