function UserTable({_content, _form, _addButton, _userInfo, _localStorageKeyName}) {
    this.init = function () {
        this.onSubmit();
        this.onAddButton();
        this.loadUser();
    }
    this.onSubmit = function () {
        _form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser({
                name: _form.elements['name'].value,
                age: _form.elements['age'].value,
                phone: _form.elements['phone'].value,
                id: Math.floor(Math.random() * 100),
            });
            _form.reset();
            _form.classList.remove('open');
        });
    }
    this.addUser = function (user) {
        this.userTemplate(user)
        const users = JSON.parse(localStorage.getItem(_localStorageKeyName)) || [];
        users.push(user);
        localStorage.setItem(_localStorageKeyName, JSON.stringify(users));
    }
    const _buttonOk = document.querySelector('.js--ok');
    this.userTemplate = function (user) {
        _content.insertAdjacentHTML('beforeend', (
            `<tr data-id="${user.id}">` +
            `<td>${user.id}</td>` +
            `<td>${user.name}</td>` +
            `<td>${user.phone}</td>` +
            `<td>${user.age}</td>` +
            `<td>` +
            '<button type="button" class="js--view btn">View</button>' +
            '<button type="button" class="js--delete btn">Delete</button>' +
            '<button type="button" class="js--edit btn">Edit</button>' +
            `</td>` +
            `</tr>`
        ))
        const _currentTr = document.querySelector(`[data-id="${user.id}"]`);
        const viewButton = _currentTr.querySelector('.js--view');
        const deleteButton = _currentTr.querySelector('.js--delete');
        const editButton = _currentTr.querySelector('.js--edit');
        const handleEdit = () => {
            _form.classList.add('open');
            _buttonOk.setAttribute('type', 'button');
            document.querySelector('.mb-1').value = user.name;
            document.querySelector('.mb-2').value = user.phone;
            document.querySelector('.mb-3').value = user.age;
            _buttonOk.addEventListener('click', function () {
                const users = JSON.parse(localStorage.getItem(_localStorageKeyName));
                for (let n = 0; n < users.length; n++) {
                    if (users[n].id === user.id) {
                        users[n].name = _form.elements['name'].value;
                        users[n].age = _form.elements['age'].value;
                        users[n].phone = _form.elements['phone'].value;
                        localStorage.setItem(_localStorageKeyName, JSON.stringify(users));
                        location.reload();
                    }
                }
            })
        }
        editButton.addEventListener('click', handleEdit);
        const handleDelete = () => {
            users = JSON.parse(localStorage.getItem(_localStorageKeyName));
            for (let n = 0; n < users.length; n++) {
                if (users[n].id === user.id) {
                    users.splice(n, 1);
                    localStorage.setItem(_localStorageKeyName, JSON.stringify(users));
                    _currentTr.remove();
                }
            }

        }
        deleteButton.addEventListener('click', handleDelete);
        const handleView = () => {
            _userInfo.innerHTML = JSON.stringify(user, undefined, 2)
        }
        viewButton.addEventListener('click', handleView)
    }
    this.onAddButton = function () {
        _addButton.addEventListener('click', function () {
            _buttonOk.setAttribute('type', 'submit');
            _form.classList.add('open');
        })
    }
    this.loadUser = function () {
        const users = JSON.parse(localStorage.getItem(_localStorageKeyName));
        if (users) {
            users.forEach(userItem => this.userTemplate(userItem))
        }
    }
}

const userDate = new UserTable({
    _localStorageKeyName: 'users',
    _content: document.querySelector('.js--content'),
    _form: document.querySelector('.js--form'),
    _addButton: document.querySelector('.js--add'),
    _userInfo: document.querySelector('.js--user'),
});
document.addEventListener('DOMContentLoaded', function () {
    userDate.init();
})
