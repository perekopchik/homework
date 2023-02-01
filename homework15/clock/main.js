function Clock(contentPlace){
    let timer ;
    let content = document.querySelector(contentPlace);
    this.start = function (){
        function render(){
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            if(hours <10){hours = `0${hours}`}
            if(minutes <10){minutes = `0${minutes}`}
            if(seconds <10){seconds = `0${seconds}`}
            content.innerHTML = `${hours}:${minutes}:${seconds}`;
        }
         timer = setInterval(render,1000);
    }
    this.stop = function (){
        clearInterval(timer);
    }
}
/*Clock.prototype.stop = function (){
    clearInterval(this.timer);
}*/
const timer = new Clock('.js--content');
document.querySelector('.js--start').addEventListener('click', function (){
    timer.start();
})
document.querySelector('.js--stop').addEventListener('click', function (){
    timer.stop();
})

