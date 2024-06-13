import React, { useRef, useState } from 'react'

const Component = ({text,index,delBtn,editTodo }) => {

    const[showTodo,setShowTodo] =useState(true)
    const editValue =useRef()

  const editBtn =(index)=>{
    console.log("edit hu me",index)
  }

   const saveEditTodo =(index)=>{
    
    console.log(editValue.current.value ,"edti value",index)
    setShowTodo(true)
    editTodo(index,editValue.current.value)
   }

  return (
    <>
     
     <div> 
        {
            showTodo ? <div >

                <span className='bg-green-300'>{text} </span>
                <button className='px-3' onClick={()=>setShowTodo(false)}>Edit</button>
                 <button className='px-2 bg-blue-400 my-5 hover:bg-blue-100' onClick={()=>delBtn(index)}  >Delete</button>
  
            </div> : <div>
                        <input type="text" placeholder='Edit Here ...' autoFocus ref={editValue} />
                        <button className='px-3 bg-purple-400' onClick={saveEditTodo}>Save</button>
                     </div>
        }
        
          
         
               
         </div>
    
    
    </>
  )
}

export default Component