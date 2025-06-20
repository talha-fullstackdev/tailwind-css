import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import image5 from "/5.png";
import image6 from "/6.png";

const FeedBack = () => {
  const data = [
    {
      image: image1,
      heading: "Spyware detection",
      text: "Our advanced spyware detection engine can identify if a device contains spyware or bugging software.",
    },
    {
      image: image2,
      heading: "Keylogger detection",
      text: "Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).",
    },
    {
      image: image3,
      heading: "Find tracking apps",
      text: "Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.",
    },
    {
      image: image4,
      heading: "OS integrity check",
      text: "Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.",
    },
    {
      image: image5,
      heading: "Threat removal",
      text: "Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.",
    },
    {
      image: image6,
      heading: "Easy to use",
      text: "We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.",
    },
 
  ];

  return (
    <div className="pt-[83px] pb-[84px] bg-[linear-gradient(180deg,_#F3F8FF_0%,_#E7EFFA_100%)] ">
      <div className="max-w-[840px]  m-auto">
        <div className="max-w-[739.18px]">
        <p className="p-4 text-[36px] leading-[46px] tracking-[-0.72px] text-[#02033B] font-extrabold text-center inter">Get your freedom back, stop mobile spyware today</p>
        </div>
    
      <div className="mt-[71.02px] max-w-[840px] bg-[#FFFFFF] pt-[72px] pr-[72px] pl-[72px] rounded-[48px]">
        <div className="max-w-[696px] flex flex-wrap gap-[48px]">
          {data.map((item, index) => (
            <div key={index} className="max-w-[200] flex flex-col items-center justify-center ">
              <img className="max-w-[77px]" src={item.image} alt="" />
              <h2 className="max-w-[184px] inter text-center mt-[24px] text-[19px] font-bold leading-[25px] tracking-[-0.4px] text-[#02033B]">{item.heading}</h2>
              <p className={`${index==0 && "max-w-[196.48px]"} ${index==1 && "max-w-[184.54px]"} ${index==2 && "max-w-[197.62px]"} ${index==3 && "max-w-[193.15px]"} ${index==4 && "max-w-[198.48px]"} ${index==5 && "max-w-[198.22px]"} mt-[24px] pl-[12.86px] pr-[12.62px] text-[16px] w-[196.48px] leading-[24px] tracking-[0%] inter text-center text-[#02033B] `}>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-[72px] max-w-[564.25px] pb-[48px] m-auto">
          <button className="max-w-[268.66px] mb-[24px] bg-[#FFC247] text-[19px] leading-[22.5px] tracking-[0%] pl-[22px] pt-[16px] pr-[54.66px] pb-[15.5px] rounded-[42px] font-extrabold inter">Get Certo for iPhone</button>
          <button className="max-w-[247.59px]  mb-[24px] border-[1px] text-[19px] border-[#02033B] rounded-[42px] ml-[24px] mr-[24px] font-extrabold inter leading-[22.5px] tracking-[0%]  pl-[22px] pt-[16px] pr-[23.59px] pb-[15.5px] ">Get Certo for Android</button>
        </div>
      </div>
        </div>
    </div>
  );
};

export default FeedBack;
