/*1) Самостоятельно реализовать пример с урока (todo list).
 2) Добавить метод удаления todo айтема.*/
document.addEventListener('DOMContentLoaded', function () {
    function Tasks(input, todosWrapper) {
        this.completeName = 'js--complete';
        this.deleteName = 'js--delete';
        this.input = document.querySelector(input);
        this.todosWrapper = document.querySelector(todosWrapper);
        this.addItem = (event) => {
            event.preventDefault();
            const value = this.input.value;
            this.input.value = '';
            const item = this.createTemplate(value);
            this.todosWrapper.insertAdjacentHTML('beforeend', item);
            document.querySelectorAll(`.${this.completeName}`).forEach(checkboxItem => {
                checkboxItem.addEventListener('click', this.complete);
            })
            document.querySelectorAll(`.${this.deleteName} `).forEach(button => {
                button.addEventListener('click', this.delete);
            })
        }
        this.complete = function () {
            this.closest('.todo-item').classList.toggle("todo-item__desc--underline");
        }
        this.delete = function () {
            this.closest('.todo-item').remove();
        }
        this.createTemplate = (description) => {
            return (
                `       
       <label class="todo-item">
            <input  class="${this.completeName} todo-item__input" type="checkbox">
            <div class="todo-item__desc ">${description}</div>
            <button class="todo-item__delete ${this.deleteName}">Удалить</button>
        </label>
        `
            )
        }
    }

    const task = new Tasks('.form__input', '.js--todos-wrapper')
    document.querySelector('.js--form').addEventListener('submit', task.addItem)
})