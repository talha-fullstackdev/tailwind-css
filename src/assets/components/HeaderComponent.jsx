
import logo from "/logo.svg.png"

const HeaderComponent = () => {
  return (
    <div className="bg-[#F3F8FF]">
    <header className="max-w-[1440px] h-[102px] flex items-center m-auto justify-around  flex-wrap">
      <div className="w-[157px] h-[53.85px] text-center flex justify-center items-center">
        <img className="" src={logo} alt="logo.png" />
      </div>
      <nav className="flex w-[632.19px] h-[54px] justify-around items-center flex-wrap">
        <ul className="flex gap-10 text-[19px] font-sans">
          <li className="text-[#02033B] font-bold inter">iPhone</li>
          <li className="text-[#02033B] font-bold inter">Android</li>
          <li className="text-[#02033B] font-bold inter">Help</li>
          <select value="" className="text-[#02033B]  font-bold inter">
            <option className="text-[#02033B] text-[16px]   font-bold bg-slate-300" name="" id="">Company</option>
            <option className="text-[#02033B] text-[16px]  font-bold bg-slate-300" name="" id="">Address</option>
            <option className="text-[#02033B] text-[16px]  font-bold bg-slate-300" name="" id="">Contact</option>
            <option className="text-[#02033B] text-[16px]  font-bold bg-slate-300" name="" id="">Services</option>
          </select>
        </ul>
        <button className="bg-[#4335DE] text-white w-[91.95px] h-[50px] rounded-full text-[18px]">Sign in</button>
      </nav>
    </header>
    </div>

  )
}

export default HeaderComponent
