const chipButtons=document.getElementsByClassName("cross-chip")
const chipElems=document.getElementsByClassName("chip-ele")
console.log(chipElems)
const chipsArray=Array.from(chipElems)
const chipBtArray=Array.from(chipButtons)
console.log(chipsArray)
console.log(chipBtArray)

Array.from(chipButtons).forEach((element,index)=>{
    element.addEventListener("click",()=>deleteChip(element.id))
})
function deleteChip(chipId){
    chipsArray.splice(chipId,1)
    console.log(chipsArray) 
}