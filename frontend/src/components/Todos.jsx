//import { todo } from "../../../backend/db"

/* todos = [ 
{ title: ,
 desc: }

]
*/
export function Todos({todos}){
    // return <div>
    //     <h1>Go to Gym</h1>
    //     <h2>You need to have a core workout</h2>
    //     <button>Mark as completed</button>
    // </div>
    return <div>
        {todos.map(function(todo){
            return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "Completed" : "Mark As Completed"}</button>
            </div>
        })}
    </div>
}