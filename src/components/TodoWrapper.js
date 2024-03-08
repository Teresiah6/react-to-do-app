import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
//import and initialize uuid
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
  //move state from todoForm here to this parent
  //props to move the value ie addTodo
  const [todos, setTodos] = useState([]);

  const addTodo = todo =>{
    setTodos([...todos, {id: uuidv4(), task: todo,completed: false, 
    isEditing:false}])
    console.log(todos) 
  }
  const toggleComplete = id=>{
    setTodos(todos.map(todo => todo.id=== id? {...todo, completed: !todo.completed}: todo ))

  }
  const deleteTodo = id =>{
    //remove the todo with the id passed in 
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = id =>{
    //if id match edit
    setTodos(todos.map(todo => todo.id=== id ? {
      ...todo, isEditing: !todo.isEditing} : todo
  ))
  }
  //turns out the order of task and id as params matter 
  const editTask =(task, id) =>{
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, isEditing : !todo.isEditing} : todo))
    }
  
  
  return (
    <div className='TodoWrapper'>
      <h1>Do Hard Things!</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        todo.isEditing ? (<EditTodoForm editTodo={editTask} task={todo}/>):
         (<Todo task = {todo} key ={index}
          toggleComplete={toggleComplete}
          deleteTodo = {deleteTodo}
          editTodo={editTodo}/>)
        
      ))}
      
    </div>
  )
}
 