const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000,() =>{
    console.log('Server...')
})

let todos = [];
app.get('/todos',(req,res)=>{
    res.send(todos);
})

app.post('/todos',(req,res)=>{

    const newTodo ={
        id: req.body.id,
        text: req.body.text,
        checked: req.body.checked
    }
    todos.push(newTodo);
    console.log('body',req.body);
    res.send(newTodo);
})
app.get('/todos/:id',(req,res)=>{
    const id = +req.params;
    const todo = todos.find(item =>+item.id===id);
    res.send(todo);
})
app.put('/todos/:id',(req,res)=>{
    const id = +req.params;
    const body = req.body;
    const todo = { ...body, checked: true };
    todos = todos.map(item=>{
        if(item.id === id){
            return todo
        } else{
            return item
        }
    })
    res.json(todos);
})
app.delete('/todos/:id',(req,res)=>{
    const id = +req.params;
    todos = todos.filter(item => item.id !== id);
    res.send('Success');
})
