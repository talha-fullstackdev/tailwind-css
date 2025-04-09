// import React from 'react'

// const Design = () => {
//   return (
//     <header className='flex justify-around relative bg-lime-200'>
//         <div className="">
//             <h1>logo</h1>
//         </div>
//         <nav className="flex gap-2">
//             <li>Home</li>
//             <li>About</li>
//             <li>services</li>
//             <li>contact</li>
//             <li>address</li>
//         </nav>
//         <div className="w-[500px] h-[500px] bg-blue-400 rounded-full absolute top-[100px]">
            
//         </div>
//     </header>
//   )
// }

// export default Design
import React from 'react'

const Design = () => {
  return (
    <header className="flex justify-around relative bg-lime-300 py-4">
      <div>
        <h1>logo</h1>
      </div>
      <nav className="flex gap-4 list-none">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Address</li>
      </nav>

      {/* Blue Circle positioned on the right half visible */}
      <div className="w-[700px] h-[700px] bg-blue-400 rounded-full absolute top-[-20px] right-[-200px] z-[1]" />
    </header>
  )
}

export default Design
