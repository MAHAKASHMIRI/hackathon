const togglebutton= document.getElementById('toggle') as HTMLButtonElement;
const profile= document.getElementById('sidebar') as HTMLElement;
togglebutton.addEventListener('click',()=>{
    if(profile.style.display==='none'){
        profile.style.display='block'
    }
    else{
        profile.style.display='none'
    }
})