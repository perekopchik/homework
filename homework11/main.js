/*1) Самостоятельно реализовать пример с урока (todo list).
 2) Добавить метод удаления todo айтема.*/
document.addEventListener('DOMContentLoaded',function (){
function Tasks(input, todosWrapper){
    this.input =document.querySelector(input);
    this.todosWrapper = document.querySelector(todosWrapper);
    this.addItem = (event) => {
        event.preventDefault();
        const value = this.input.value;
        this.input.value = '';
        const item = this.createTemplate(value);
        this.todosWrapper.innerHTML = item;
    }
    this.createTemplate = (description) => {
        return(
            `       
       <label class="todo-item">
            <input type="checkbox" class="js--complete">
            <div class="todo-item__desc">${description}</div>
            <button class="todo-item__delete js--delete">Удалить</button>
        </label>
        `
        )
    }
}
const task = new Tasks('.js--form','.js--todos-wrapper')
document.querySelector('.js--form').addEventListener('submit', task.addItem)
})