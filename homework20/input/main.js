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
            const content = document.querySelector('.js--content');
            document.querySelector('.title').insertAdjacentHTML('beforebegin', '<h2>Post</h2>');
            title.innerHTML = user.title;
            content.insertAdjacentHTML('beforebegin',
                '<button class="showBody">Show</button> ' +
                '<button class="exit">Exit</button> ');
            document.querySelector('.showBody').addEventListener('click', function () {
                const body1 = document.querySelector('.body');
                const body = document.querySelector('.js--body');
                const email = document.querySelector('.js--email');
                const name = document.querySelector('.js--name');
                body1.classList.add('hidden');
                fetch(`https://jsonplaceholder.typicode.com/comments/${user.id}`)
                    .then(res => res.json())
                    .then(userComment => {
                        document.querySelector('.body').insertAdjacentHTML('beforebegin', `<h3>Comments</h3>`);
                        document.querySelector('.js--name').insertAdjacentHTML('beforebegin', `<h3>Name</h3>`);
                        name.innerHTML = userComment.name;
                        document.querySelector('.js--email').insertAdjacentHTML('beforebegin', `<h3>Email</h3>`);
                        email.innerHTML = userComment.email;
                        document.querySelector('.js--body').insertAdjacentHTML('beforebegin', `<h3>Information</h3>`);
                        body.innerHTML = userComment.body;
                    });
            })
            document.querySelector('.exit').addEventListener('click', function () {
                location.reload();
            })
        })
})
