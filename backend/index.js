import { createTodo } from './types';
import { updateTodo } from './types';

const express = require('express');
const z = require("zod");
const app = express();
app.use(express.json());

app.get('/todos', (req,res)=>{
    res.send("hello, world!");
})

app.post("/todos", function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    // put it in the table if success
})

app.put("/completed", function(req, res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }

})

app.listen(3000);