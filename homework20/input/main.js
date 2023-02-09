const button = document.querySelector('.js--button');
button.addEventListener('click', function () {
    const input = document.querySelector('.js--input');
    if (input.value > 100 || input.value <= 0) {
        alert('Введите input от 1 до 100');
        location.reload();
    }
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.json()
        })
        .then(users => {
            const user = users.find((user) => {
                return String(user.id) === input.value
            })
            const title = document.querySelector('.js--title');
            const body = document.querySelector('.js--body');
            document.querySelector('.title').insertAdjacentHTML('beforebegin', '<h2>Title</h2>');
            title.innerHTML = user.title;
            const content = document.querySelector('.js--content');
            content.insertAdjacentHTML('beforebegin',
                '<button class="showBody">Show</button> ' +
                '<button class="exit">Exit</button> ');
            document.querySelector('.showBody').addEventListener('click', function () {
                document.querySelector('.body').insertAdjacentHTML('beforebegin', '<h3>Body</h3>');
                body.innerHTML = user.body;
            })
            document.querySelector('.exit').addEventListener('click', function () {
                location.reload();
            })
        })
})
