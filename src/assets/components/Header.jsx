// import React from 'react'
// import logo from "../logo/logo.png"
// const Header = () => {
//   return (
//     <header className="flex justify-around p-3 m-auto  bg-slate-700 max-w-screen-lg font-sans  text-white">
//         <div className="flex items-center gap-1 ">
//             <img className='w-14' src={logo} alt="" />
//             <h1>TN</h1>
//         </div>
//         <div className="">
//             <ul className='flex items-center gap-4  font-sans '>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//                 <li>Address</li>
//             </ul>
//         </div>
//     </header>
//   )
// }

// export default Header
import logo from "../../../public/logo.svg.png"
import heroImage1 from "../../../public/home-header-2.png.png"
import heroImage2 from "../../../public/android-dashboard-certo-2.png.png"
const Header = () => {
  return (
    <>
    <header className="max-w-[1440px] h-[102px] flex items-center m-auto justify-around bg-[#F3F8FF] flex-wrap">
      <div className="w-[157px] h-[53.85px] text-center flex justify-center items-center">
        <img className="" src={logo} alt="logo.png" />
      </div>
      <nav className="flex w-[632.19px] h-[54px] justify-around items-center flex-wrap">
        <ul className="flex gap-10 text-[19px] font-sans">
          <li className="text-[#02033B] font-bold inter">iPhone</li>
          <li className="text-[#02033B] font-bold inter">Android</li>
          <li className="text-[#02033B] font-bold inter">Help</li>
          <select value="" className="text-[#02033B] font-bold inter">
            <option className="text-[#02033B] font-bold" name="" id="">Company</option>
          </select>
        </ul>
        <button className="bg-[#4335DE] text-white w-[91.95px] h-[50px] rounded-full text-[18px]">Sign in</button>
      </nav>
    </header>
    {/* ///////////////////////////////////////////// hero section */}
    <div className="flex w-[1440px] justify-center m-auto">
      <div className="w-[634px] flex flex-col  gap-10 ml-36 pt-20">
        <p className="text-[60px] font-bold text-[#02033B] w-[595px] pt-16">Your mobile privacy is our mission</p>
        <p className="text-[20px] w-[597.89]">Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and remove threats from your iPhone and Android devices.</p>
        <div className="w-[612.25px] flex gap-10">
          <button className="w-[268.66px]  bg-[#FFC247] text-[19px] font-bold p-2 rounded-full">Get Certo for iPhone</button>
          <button className="w-[268.66px] border-2 border-black text-[19px] font-bold p-2 rounded-full">Get Certo for Android</button>
        </div>
      </div>
      <div className="w-[720px] relative mt-[70px] ">
        <img src={heroImage1} alt="hero image one" className="border-t-[25px] border-l-[25px] border-[#4335DE]" />
        <div className="absolute top-16 w-[241px] border left-16 border-black">
           <img className="" src={heroImage2} alt="hero image two" />
        </div>
       
      </div>
    </div>
    </>
  )
}

export default Header

