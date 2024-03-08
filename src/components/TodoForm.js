//import useState to keep track of what user is typing 
import React, {useState} from 'react'
//import that prop addTodo
export const TodoForm = ({addTodo} ) => {
  const [value, setValue] = useState("");
  //on default when you submit forms the value reloads
  const handleSubmit = e => {
    //prevent automatic reload when submitting 
    e.preventDefault();
    //validate input 
    if(value.trim().length !== 0){
    //console.log(value);
    //using the prop
  
    addTodo(value);
    //after submitting the value clear the form 
    setValue("");
  }
  else{
    alert("Your task cannot be blank");
  }
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={value}
      placeholder='what is the task today?' onChange={(e) => setValue(e.target.value)}>
      </input>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
