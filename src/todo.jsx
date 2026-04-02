import {useState} from "react";


function Todo(){
    let [input , setInput] = useState("");
    let[todos,setTodos] = useState([{id : crypto.randomUUID() , text: "sample task" , done : false}]);

    function addTodo(){
        if(!input.trim()) return;
        
        setTodos(()=>([...todos , {id : crypto.randomUUID() , text : input, done : false}]));
        
        setInput("");
    }

    function deleteTodo(id){
        setTodos(todos.filter((todo)=>(todo.id != id)));
    }

    function upperCase(){
        setTodos(todos.map((todo)=>({id : todo.id ,text :todo.text.toUpperCase() })));
    }

    function lowerCase(){
        setTodos(todos.map((todo)=>({...todo,text :todo.text.toUpperCase() })));
    }

    function upperCase1(id){
        setTodos( todos.map((todo)=>{
            if(todo.id == id){
                return { ...todo , text: todo.text.toUpperCase()} ;
            }else{
                return todo ;
            }
        }) )
    }

    function lowerCase1(id){
        setTodos(
            todos.map((todo)=>{
                if(todo.id == id){
                    return {...todo , text : todo.text.toLowerCase()};
                }else{
                    return todo;
                }
            })
        )
    }

    
 
    function done(id){
        setTodos(
            todos.map((todo)=>{
                if(todo.id == id){
                    return {...todo , done : !todo.done}
                }else{
                    return todo;
                }
            })
        )
    }
   

    return (
        <div>
            <h1> Todo list </h1>
            
            <input
              type="text"
              placeholder="Enter the todo here."
              onChange={(e) => setInput(e.target.value)}
              value={input}

              onKeyDown={(e) => {
                if(e.key === "Enter") addTodo();  // Enter press? -> addTodo ko call karo
              }}
              
            />

            &nbsp;&nbsp;
            <button onClick={addTodo} > Add </button>

            &nbsp;&nbsp;
            <button onClick={upperCase}> UpperCase_all </button>

            &nbsp;&nbsp;
            <button onClick={lowerCase}> LowerCase_all </button>


            <ol>
                {
                    todos.map((todo)=> (<li key={todo.id} style={{textDecorationLine : todo.done ? "line-through" : "none"}}> {todo.text} &nbsp;&nbsp; <button onClick={()=>(deleteTodo(todo.id))}> Delete </button> 
                                                                              &nbsp;&nbsp; <button onClick={()=>(upperCase1(todo.id))}> UpperCase </button> 
                                                                              &nbsp;&nbsp; <button onClick={()=>(lowerCase1(todo.id))}> LowerCase </button>  
                                                                              &nbsp;&nbsp; <button onClick={()=>(done(todo.id))}> Done </button> </li> ))
                }                                                             
            </ol>
            
        </div>
    );
}

export default Todo;