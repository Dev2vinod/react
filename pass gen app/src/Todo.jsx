import React, { useRef, useState } from 'react'
import Component from './Component'

const Todo = () => {
 
   const todoValue =useRef()
   const[data,setData] =useState([])
   
   function addTodo(event){
    event.preventDefault()
    console.log(todoValue.current.value,"todo vslue")
    data.push(todoValue.current.value)
    setData([...data])


    todoValue.current.value =''

   }

    const delBtn =(index)=>{
      console.log("delbtn",index)
      data.splice(index,1)
      setData([...data])

    }

    const editTodo =(index,value)=>{
      // console.log("todo edited",value,index)
      data.splice(index,1,value)
      setData([...data])
    }

  return (
   <>
        <p>edti value save ni ho rahi</p>
   
   <form onSubmit={addTodo} className='my-3 mx-9'>

  <input type="text" ref={todoValue} autoFocus   placeholder='Enter Here...' className='bg-green-100' />

    <button type="sumbit" className='bg-pink-200'>Add Todo</button>
   </form>
   
   <div>{  data.length >0 ? data.map((v,index)=>{
       
         return < Component text ={v} key={index} delBtn ={delBtn} index ={index} editTodo ={editTodo}  />


   }) : <span className='font-bold'>No Todo Here... </span>
        
    
    
    } </div>
   
   </>
  )
}

export default Todo