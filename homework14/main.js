document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.js--form')
    const input = document.querySelector('.js--input');
    const li1 =document.querySelector('.li-1');
    const li2 =document.querySelector('.li-2');
    const li3 =document.querySelector('.li-3');
    const li4 =document.querySelector('.li-4');
    form.addEventListener('submit',function (event){
        event.preventDefault();
        li1.classList.remove('color');
        li2.classList.remove('color');
        li3.classList.remove('color');
        li4.classList.remove('color');
        const pattern = /[A-Z]/g;
        const pattern1 = /[0-9]/g;
        const pattern2 = /[.,:/^_]/g;
        console.log(input.value);
        if(input.value.match(pattern)){
            li1.classList.add('color');
        }
        if(input.value.match(pattern1)){
            li2.classList.add('color');
        }
        if(input.value.match(pattern2)){
            li3.classList.add('color');
        }
        if(input.value.length >=8)
        {
            li4.classList.add('color');
        }
        form.reset();
    })
})
