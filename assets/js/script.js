document.onkeydown = function(e){
    console.log("key code is: ",e.keyCode)
    if (e.keyCode==38){
        deer = document.querySelector('.deer');
        deer.classList.add('animatedeer');
        setTimeout(() => {
            deer.classList.remove('animatedeer')
        }, (700));
    }


}