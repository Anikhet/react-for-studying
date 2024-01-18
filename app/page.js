"use client"
import React,{ useState } from 'react'

const page = () => {
  const [title, setTitle] = useState('')

  const submitHandle = (e) =>{
    e.preventDefault();
    setTitle('')
  }

  return (
    <>
    <h1 className='bg-black text-white font-bold text-center p-10  text-5xl'>To do list</h1>
    <div className='h-screen flex justify-center items-center flex-grow '>
    <form onSubmit={submitHandle}> 
    <input placeholder='What do you wanna do ' 
    className=' px-20 py-3 text-2xl  text-amber-900 border-2 m-5' 
    value = {title} onChange={(e) => {
      setTitle(e.target.value)
    }}></input>
    <button type='submit' className=' bg-black text-yellow-100 px-6 py-1 text-2xl font-bold rounded m-5'>Add</button>
    </form>
    </div>
    </>
    
  )
}

export default page