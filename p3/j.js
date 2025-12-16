const s = document.querySelector("#clock");

setInterval(function(){
    const time = new Date();
    s.innerText = time.toLocaleTimeString();
}, 1000);