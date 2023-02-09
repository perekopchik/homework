const API_URL = 'http://localhost:3000/todos';
document.addEventListener('DOMContentLoaded', function () {
    function Tasks(input, todosWrapper) {
        this.completeName = 'js--complete';
        this.deleteName = 'js--delete';
        this.input = document.querySelector(input);
        this.todosWrapper = document.querySelector(todosWrapper);
        this.loadFromServer = function (){
           const response =  fetch(API_URL,{method: "GET"});
           response
               .then(res=>res.json())
               .then(data =>{
                   data.forEach(todoItem=>{
                       this.todosWrapper.insertAdjacentHTML('afterbegin',this.createTemplate(todoItem))
                   })
               });
        }
        this.addItem = (event) => {
            event.preventDefault();
            const value = this.input.value;
            const response =  fetch(API_URL,{
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id: Math.floor(Math.random()*100),
                    text: value,
                    checked: false

                })});
            response
                .then(res => {
                    if(res.status===201){
                        this.input.value = '';
                        const item = this.createTemplate({text:value,checked:false});
                        this.todosWrapper.insertAdjacentHTML('afterbegin', item);
                        document.querySelectorAll(`.${this.completeName}`).forEach(checkboxItem => {
                            checkboxItem.addEventListener('click', this.complete);
                        })
                    }
                })
            document.querySelectorAll(`.${this.deleteName} `).forEach(button => {
                button.addEventListener('click', this.delete);
            })
        }
        this.complete = function () {
            this.closest('.todo-item').classList.toggle("todo-item__desc--underline");
        }
        this.delete = function () {
/*            const response = fetch(`${API_URL}/${id}`,{method:"DELETE"});
            response.then(()=> console.log('Delete successful'))
                })*/
            this.closest('.todo-item').remove();
        }
        this.createTemplate = ({text,checked}) => {
            return (
                `       
       <label class="todo-item">
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