//import useState to keep track of what user is typing 
import React, {useState} from 'react'
//import that prop addTodo
export const EditTodoForm = ({editTodo, task} ) => {
  const [value, setValue] = useState(task.task);
  //on default when you submit forms the value reloads
  const handleSubmit = e => {
    //prevent automatic reload when submitting 
    e.preventDefault();
    //console.log(value);
    //validate input
    if(value.trim().length !== 0){
    //using the prop
    editTodo(value, task.id);
    //after submitting the value clear the form 
    setValue("");
    }
    else{
      alert("Your task cannot be blank")
    }
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={value}
      placeholder='Update task' onChange={(e) => setValue(e.target.value)}>
      </input>
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
