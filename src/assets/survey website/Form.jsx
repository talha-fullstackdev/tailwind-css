import React from 'react'

const Form = ({data}) => {     
   const {nameRef,emailRef,contactRef,handleSubmit } =  data
   /// making tailwind-css variables to avoid code repeating
   const inputsCSS="p-1 rounded-sm border-2  cursor-pointer"
   const inputDivCss = "flex flex-col gap-1"
   const buttonCss = "self-start ml-4 relative bottom-4 bg-green-600 text-white p-1 px-3"
  return (
    <div className='flex flex-col max-w-[40%]  gap-8 m-auto mt-10 pl-2 border p-4'>
    <h1 className='text-2xl font-semibold'>Basic Details</h1>
    <form onSubmit={handleSubmit} className='flex flex-col max-w-[50%] gap-8'>
        <div className={inputDivCss}>
        <label className='cursor-pointer' htmlFor="name">1.Name</label>
        <input ref={nameRef} id='name' type="text" placeholder='Enter your Name' className={inputsCSS}  autoComplete="off" />
        </div>
        <div className={inputDivCss} >
        <label className='cursor-pointer' htmlFor="email">2.Email</label>
        <input ref={emailRef} id='email' type="text" placeholder='Enter your Email' className={inputsCSS}  autoComplete="off"/>
        </div>
        <div className={inputDivCss} >
        <label className='cursor-pointer' htmlFor="Number">3.Contact no</label>
        <input ref={contactRef} id='Number' type="text" placeholder='Enter your Contact No' className={inputsCSS} autoComplete="off"/>
        </div>
        <button className={buttonCss}>Next</button>
    </form>
</div>
  )
}

export default Form