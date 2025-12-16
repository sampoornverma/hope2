const g= document.querySelectorAll('.button');
const b=document.querySelector('body');
g.forEach(function(h){
    h.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        b.style.backgroundColor=e.target.id;
        
    })
})