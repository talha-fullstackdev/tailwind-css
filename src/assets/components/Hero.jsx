import heroImage1 from "../../../public/home-header-2.png.png"
import heroImage2 from "../../../public/android-dashboard-certo-2.png.png"
const Hero = () => {
  return (
        <div className="flex w-[1440px] justify-center m-auto">
      
      <div className="w-[634px] flex flex-col  gap-10 ml-36 pt-20 relative">
        <p className="text-[60px] font-bold text-[#02033B] w-[595px] pt-16">Your mobile privacy is our mission</p>
        <p className="text-[20px] w-[597.89]">Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and remove threats from your iPhone and Android devices.</p>
       
        <div className="w-[612.25px] flex gap-10">
          <button className="w-[268.66px]  bg-[#FFC247] text-[19px] font-bold p-2 rounded-full">Get Certo for iPhone</button>
          <button className="w-[268.66px] border-2 border-black text-[19px] font-bold p-2 rounded-full">Get Certo for Android</button>
        </div>

      </div>
      {/* ////////////// hero section first div background div */}
      <div className="w-[900px] h-[772px] absolute bg-[#F3F8FF] top-10 left-[-48px] -z-[1] rounded-tr-[1100px]"></div>

      <div className="w-[720px] relative mt-[70px] ">
        <img src={heroImage1} alt="hero image one" className="border-t-[25px] border-l-[25px] border-[#4335DE]" />
        <div className="absolute top-16 w-[241px] border left-16 border-black">
           <img className="" src={heroImage2} alt="hero image two" />
        </div>
       
      </div>
    </div>
  )
}

export default Hero