const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const TodosModel = require('./todos.model');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const password = '1q2w3e4r5t6y7u8i9o';
app.listen(5000,() =>{
    console.log('Server...')
})

mongoose.connect(
    `mongodb+srv://admin:${password}@cluster0.y7f8r2i.mongodb.net/?retryWrites=true&w=majority`,
    { },
    () => {
        console.log('DB IS ONLINE')
    }
)
app.get('/',(req,res)=>{
    res.sendFile('public/index.html',{ root:__dirname})
})

let todos = [];
app.get('/todos',(req,res)=>{
    TodosModel.find().then(response => res.send(response));
})

app.post('/todos',(req,res)=>{
    const newTodo = new TodosModel(req.body);
    newTodo.save().then(response => res.send(response))
})
app.get('/todos/:id',(req,res)=>{
    TodosModel.findById(req.params.id).then(response => res.send(response))
})
app.put('/todos/:id',(req,res)=>{
    const id = +req.params;
    const body = req.body;
    console.log(body);
    TodosModel.updateOne({_id: id},body)
        .then(()=> TodosModel.findById(id))
        .then(response =>res.send(response))
})
app.delete('/todos/:id',(req,res)=>{
    const id = req.params;
    TodosModel.deleteOne({_id:id}).then(response =>{
        if(response.deletedCount ===0){
            res.status(404).send({message: 'Error'})
        }else{
            res.send(response)
        }
    })
})
