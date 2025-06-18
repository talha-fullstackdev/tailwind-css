import heroImage1 from "/home-header-2.png.png"; // we can write directly like this images in public folder
import heroImage2 from "/android-dashboard-certo-2.png.png";
import { GoArrowRight } from "react-icons/go";

const HeroComponent = () => {
  return (
    <div className="flex w-[1440px] justify-center m-auto sm:flex-wrap md:flex-nowrap">
      <div className="w-[634px] flex flex-col  gap-10 ml-40 pt-20 relative">
        <p className="text-[60px] font-extrabold text-[#02033B] w-[595px] pt-16 leading-[75px] tracking-[-1.2px] inter">
          Your mobile privacy is our mission
        </p>
        <p className="text-[20px] w-[597.89] leading-[30px] inter">
          Think your phone has been hacked? Our trusted apps make it easy for
          you to scan, detect and remove threats from your iPhone and Android
          devices.
        </p>

        <div className="w-[612.25px] flex gap-10">
          <div className="w-[268.66px] bg-[#FFC247] rounded-full flex justify-center items-center gap-4">
          <button className=" text-center  font-bold text-[19px] p-2  inter">
            Get Certo for iPhone
          </button>
          <p className="w-[20px] text-[20px] font-bold text-[#000000]"><GoArrowRight /></p>
          </div>
          <button className="w-[268.66px] border-2 border-black text-[19px] font-bold p-2 rounded-full inter">
            Get Certo for Android
          </button>
        </div>
      </div>
      <div className="w-[900px]   h-[772px] absolute bg-[#F3F8FF] top-10 left-[-15px] -z-[1] rounded-tr-[1100px]"></div>

      <div className="w-[741px] relative mt-[70px] ">
        <img
          src={heroImage1}
          alt="hero image one"
          className="border-t-[25px] border-l-[25px] border-[#4335DE] w-[100%]"
        />
        <div className="absolute top-16 w-[241px] border left-16 border-black">
          <img className="" src={heroImage2} alt="hero image two" />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
