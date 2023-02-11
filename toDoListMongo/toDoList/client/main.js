const API_URL = 'http://localhost:5000';
document.addEventListener('DOMContentLoaded', function () {
    function Tasks(input, todosWrapper) {
        this.completeName = 'js--complete';
        this.deleteName = 'js--delete';
        this.input = document.querySelector(input);
        this.todosWrapper = document.querySelector(todosWrapper);
        this.loadFromServer = function () {
            const response = fetch(`${API_URL}/todos`, {method: "GET"});
            response
                .then(res => res.json())
                .then(data => {
                    data.forEach(todoItem => {
                        this.todosWrapper.insertAdjacentHTML('afterbegin', this.createTemplate(todoItem))
                    })
                    document.querySelectorAll(`.${this.deleteName} `).forEach(button => {
                        button.addEventListener('click', this.delete);
                    })
                    document.querySelectorAll(`.${this.completeName}`).forEach(checkboxItem => {
                        checkboxItem.addEventListener('click', this.complete);
                    })
                });
        }
        this.addItem = (event) => {
            event.preventDefault();
            const randomId = Math.floor(Math.random() * 100);
            const value = this.input.value;
            const response = fetch(`${API_URL}/todos`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: randomId,
                    text: value,
                    checked: false

                })
            });
            response
                .then(res => {
                    if (res.status === 201) {
                        this.input.value = '';
                        const item = this.createTemplate({id: randomId, text: value, checked: false});
                        this.todosWrapper.insertAdjacentHTML('afterbegin', item);
                    }
                    document.querySelectorAll(`.${this.deleteName} `).forEach(button => {
                        button.addEventListener('click', this.delete);
                    })
                    document.querySelectorAll(`.${this.completeName}`).forEach(checkboxItem => {
                        checkboxItem.addEventListener('click', this.complete);
                    })
                })
        }
        this.complete = function () {
            const id = this.closest('.todo-item').dataset.id;
            let checked;
            fetch(`${API_URL}/todos/${id}`, {method: "GET"})
            .then((res) => res.json())
                .then(data => {
                    if (data.checked === false) {
                        checked = true;
                    }
                    if (data.checked === true) {
                        checked = false;
                    }
                    let requestOptions = {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            id: id,
                            text: data.text,
                            checked: checked
                        })
                    };
                    fetch(`${API_URL}/todos/${id}`, requestOptions)
                        .then((response) => response.json())
                        .then(data => data)
                })
        }
        this.delete = function () {
            const id = this.closest('.todo-item').dataset.id;
            fetch(`${API_URL}/todos/${id}`, {method: "DELETE"})
            this.closest('.todo-item').remove();
        }
        this.createTemplate = ({id, text, checked}) => {
            return (
                `       
       <label data-id="${id}" class="todo-item">
            <input  class="${this.completeName} todo-item__input" ${checked ? 'checked="true"' : ''}"  type="checkbox">
            <div class="todo-item__desc ">${text}</div>
            <button class="todo-item__delete ${this.deleteName}">Удалить</button>
        </label>
        `
            )
        }
    }

    const task = new Tasks('.form__input', '.js--todos-wrapper');
    task.loadFromServer();
    document.querySelector('.js--form').addEventListener('submit', task.addItem)
})