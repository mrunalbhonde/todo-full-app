import { createTodo } from './types';
import { updateTodo } from './types';
import { todo } from './db';

const express = require('express');
const z = require("zod");
const app = express();
app.use(express.json());

app.get('/todos', async (req,res)=>{
    const todos = await todo.find();
    //console.log(todos); // will be a promise
    res.json({
        todos
    })
})

app.post("/todos", async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    // put it in the table if success
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo is created"
    })
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id: updatePayload.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })

})

app.listen(3000);