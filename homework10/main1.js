//В папку images добавить изображения разных размеров: 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вывести изображение из этой папки, полученное случайным образом (Math.random). Размер изображения должен соотвецтвовать 80% размеров (ширина) окна браузера (к примеру окно 1000px, то размер изображения 800px).
function showImage(){
    let randomNumber = Math.random()*10;
    if ( randomNumber >=1 ) {
        randomNumber = Math.floor(randomNumber);
    }else {
        randomNumber = Math.ceil(randomNumber);
    }
    let value = Math.floor((window.innerWidth / 100 )* 80);
    const size = value +"px";
    const img = document.createElement('img');
    img.src = "images/" + randomNumber + ".jpg";
    document.querySelector('body').appendChild(img);
    img.style.width = size;
}
showImage();
