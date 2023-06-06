import { useReducer,useEffect } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const useTodo = () => {
    const [todos, dispath] = useReducer(todoReducer, [],init)

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    
    },[todos])
    //permite mandar la accion de agregar TODO a la lista
    const onNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        };
        dispath(action)
        
    }
    //permite mandar la accion de eliminar TODO de la lista
    const handleDeleteTodo =(id)=>{
       
        dispath({
            type:'[TODO] Remove Todo',
            payload:id
        })
    }
    // permite mandar la accion de actualizar el done del TODO
    const handleToggleTodo=(togleTodo)=>{
    
        dispath({
            type:'[TODO] Toggle Todo',
            payload:togleTodo
        })
    }

     const todosCount = todos.length
     const pendingTodosCount = todos.filter((todo)=>!todo.done).length
    
  return {
    todos,
    onNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount
  }
}
