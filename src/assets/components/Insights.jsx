import image1 from "/latest-1.png";
import image2 from "/latest-2.png";
import image3 from "/latest-3.png";
const Insights = () => {
  const data = [
    {
      image: image1,
      heading: "Signs Your Ex Is Spying On You",
      para: "In an ideal world, after a relationship ends both you and your ex will move on. But what if they can’t let go, and start spying on your...",
      buttonText: "Expertise",
      buttonWidth: "112.41px",
    },
    {
      image: image2,
      heading: "How to Remove a Hacker from Your Samsung Phone",
      para: "Samsung is the second most popular manufacturer of smartphones in the world, with a market share of 28.19% compared to Apple’s 28.43% as...",

      buttonText: "Guides",
      buttonWidth: "94.27px",
    },
    {
      image: image3,
      heading: "Is Your Cell Phone Under Surveillance?",
      para: "In today’s surveillance state, it can feel like your every move is being watched. Although your mind may be conjuring up images of CCTV...",
      buttonText: "Expertise",
      buttonWidth: "112.41px",
    },
  ];
  return (
    <div className="bg-[#F3F8FF] pt-[84px] pb-[84px]">
      <div className="w-[1056px]  mb-[84px] m-auto">
        <div className="">
          <p className=" m-auto w-[396px] text-[56px] leading-[75px] tracking-[-1.2px] text-[#02033B] font-extrabold">
            Latest insights
          </p>
        </div>
        <div className="mt-[72px] flex gap-[48px] ">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[320px]  bg-[#FFFFFF] rounded-[48px] relative "
            >
              <img
                className="rounded-tl-[48px] rounded-tr-[48px]"
                src={item.image}
                alt=""
              />
              <p
                className={`mt-[47px] ${index == 0 && "w-[177.89px]"} ${
                  index == 1 && "w-[198.18px]"
                } ${index == 2 && "w-[205.81px]"}  ml-[48px] mr-[94.11px] ${
                  index == 2 && "text-[25px]"
                }   text-[#02033B] text-[23px] leading-[30px] tracking-[0%] inter font-bold`}
              >
                {item.heading}
              </p>
              <p className="mt-[24px] text-[16px] leading-[24px] text-[#02033B] tracking-[0%] w-[221.9px] m-auto">
                {item.para}
              </p>
              <button
                className={`${index == 0 && "w-[112.41px]"} ${
                  index == 1 && "w-[94.27px]"
                } ${
                  index == 2 && "w-[112.41px]"
                } pt-[15px] pl-[20px] pb-[18px] pr-[20.41px] text-[15px] text-[#02033B] absolute bg-[#F3F8FF] rounded-[48px] top-[24px] left-[24px] leading-[20px] tracking-[0%] inter font-extrabold`}
                style={{ width: item.buttonWidth }}
              >
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-[72px] w-[226.06px] m-auto">
          <button className="pl-[20px] pt-[16px] pr-[51.06px] pb-[15.5px] bg-[#FFC247] rounded-[42px] text-[19px] leading-[22.5px]tracking-[0%] inter font-extrabold">
            View all insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insights;
