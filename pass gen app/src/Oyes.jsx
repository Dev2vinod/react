import React, { useRef, useState } from 'react'

const Oyes = () => {
 
    const nameValue =useRef()

    // const[data,setData] =useState([])

    // data(nameValue.current.value)
    // //  setData(name:nameValue.current.value )
    // setData([...data])
 
     const allSum =(event)=>{
        event.preventDefault()

        console.log("first",nameValue.current.value)
        

        nameValue.current.value =''
     }
    


  return (
    <div>
 

    <form onSubmit={allSum}>

        <input type="text" autoFocus ref={nameValue} className='bg-purple-200' />

        <button type="submit"> add</button>


    </form>

  {/* <p>{data} </p> */}

    </div>
  )
}

export default Oyes