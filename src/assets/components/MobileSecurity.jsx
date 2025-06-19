import adobestock from "/public/AdobeStock.jpeg"
const MobileSecurity = () => {
  return (
    <div className="">
        <div className="max-w-[1176px] mx-[132px] my-[84px] flex gap-[60px] flex-wrap">
            <div className="w-[588px]">
                <p className="ml-[60px] mt-[2px] mr-[81.6px] w-[446.4px] inter text-[36px] text-[#02033B] font-extrabold leading-[45px] tracking-[-0.72px]">At Certo, mobile security <br />is not an afterthought, it’s what we do.</p>
                <p className="w-[448.23px] mt-[43px] ml-[60px] mr-[79.77px] text-[20px] leading-[30px] tracking-[0%] text-[#02033B] inter">With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.</p>
                <div className="mt-[76px] flex flex-col w-[492px] ml-[60px] mr-[36px]">
                    <button className="w-[268.66px] bg-[#FFC247] text-[19px] leading-[22.5px] rounded-[42px] pl-[20px] pt-[16px] text-[#02033B] font-extrabold tracking-[0%] inter  pr-[56.66px] pb-[15.5px]">Get Certo for iPhone</button>
                    <button className="w-[247.59px] rounded-[42px] mt-[24px] border-[2px] pl-[16px] pr-[25.59px] border-[#02033B] pt-[15px] pb-[15.5px] text-[19px] leading-[22.5px] tracking-[0%] font-extrabold inter text-[#02033B]">Get Certo for Android</button>
                </div>
            </div>
            <div className="w-[482.03px] bg-[#FFC247] h-[485.03px] relative ">
                <img className="w-[468px] absolute right-[21.05px] top-[7.02px] bottom-[8.02px]  " src={adobestock} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default MobileSecurity