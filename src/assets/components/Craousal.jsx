
import  { useEffect, useRef } from "react";
import star from "/starr.png";
import cnbc from "/cnbc.png";
import newyork from "/newyork.png";
import financial from "/financial.png";
import readers from "/reader.png";
import zdnet from "/zdnet.png";
import wierd from "/wired.png";

const data = [
  {
    star: star,
    text: "Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.",
    name: "colinandmandy94",
  },
  {
    star: star,
    text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus. Sweet tool. Love it highly recommend.",
    name: "Jennifer Black",
  },
  {
    star: star,
    text: "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.",
    name: "Phillip Colligan",
  },
  {
    star: star,
    text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus. Sweet tool. Love it highly recommend.",
    name: "Alice Smith",
  },
  {
    star: star,
    text: "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive",
    name: "John Doe",
  },
  {
    star: star,
    text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus. Sweet tool. Love it highly recommend.",
    name: "Leslie White",
  },
];

const Craousal = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Center the carousel on load
    const carousel = carouselRef.current;
    if (carousel) {
      const containerWidth = carousel.offsetWidth;
      carousel.scrollLeft = (carousel.scrollWidth - containerWidth) / 2;
    }
  }, []);

  return (
    <div className="bg-[#FFC247]">
      <div className="max-w-[1440px] w-full pb-[70px] mx-auto">
        <div className="max-w-[609px] text-[36px] leading-[45px] tracking-[-0.72px] text-[#02033B] font-bold pl-[93px] pt-[83px]">
          <p className="w-[563.42px] p-2 inter">
            Loved by thousands of iPhone and Android users alike
          </p>
        </div>

        <div className="relative mt-[72px]">
          {/* Scrollable Container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll  scroll-smooth no-scrollbar px-[250px] gap-[40px]"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[400px] flex-shrink-0 pl-[36px] pr-[36px] pt-[36px] pb-[96px] bg-[#FFFFFF] rounded-[48px] flex-col"
                style={{ scrollSnapAlign: "center" }}
              >
                <div className="flex gap-1">
                  <img src={item.star} alt="star" className="w-6 h-6" />
                  <img src={item.star} alt="star" className="w-6 h-6" />
                  <img src={item.star} alt="star" className="w-6 h-6" />
                  <img src={item.star} alt="star" className="w-6 h-6" />
                  <img src={item.star} alt="star" className="w-6 h-6" />
                </div>

                <p className="mt-2 pt-[24px] pb-[24px] inter text-[16px] leading-[20px] tracking-[0px]">
                  {item.text}
                </p>
                <p className="mt-1 w-[136px] leading-[20px] tracking-[0px] inter text-[#02033B] font-bold">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[50px]">
          <div className="flex items-center px-[96px] flex-wrap">
            <p className="w-[129px] text-[23px] text-[#02033B] leading-[30px] tracking-[-0.48px] font-bold inter">
              Featured in:
            </p>
            <div className="flex ml-[102px] gap-[30px] flex-wrap">
              <img className="w-[130px] h-[95px]" src={cnbc} alt="company logo" />
              <img className="w-[130px] h-[95px]" src={newyork} alt="company logo" />
              <img className="w-[130px] h-[95px]" src={financial} alt="company logo" />
              <img className="w-[130px] h-[95px]" src={readers} alt="company logo" />
              <img className="w-[130px] h-[95px]" src={zdnet} alt="company logo" />
              <img className="w-[130px] h-[95px]" src={wierd} alt="company logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craousal;
/////////////////////////////////// scroling crousal n mouse click
// import { useEffect, useRef, useState } from "react";
// import star from "/starr.png";
// import cnbc from "/cnbc.png";
// import newyork from "/newyork.png";
// import financial from "/financial.png";
// import readers from "/reader.png";
// import zdnet from "/zdnet.png";
// import wierd from "/wired.png";

// const data = [
//   {
//     star: star,
//     text: "Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.",
//     name: "colinandmandy94",
//   },
//   {
//     star: star,
//     text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus. Sweet tool. Love it highly recommend.",
//     name: "Jennifer Black",
//   },
//   {
//     star: star,
//     text: "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.",
//     name: "Phillip Colligan",
//   },
//   {
//     star: star,
//     text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus. Sweet tool. Love it highly recommend.",
//     name: "Alice Smith",
//   },
//   {
//     star: star,
//     text: "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive",
//     name: "John Doe",
//   },
//   {
//     star: star,
//     text: "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus. Sweet tool. Love it highly recommend.",
//     name: "Leslie White",
//   },
// ];

// const Craousal = () => {
//   const carouselRef = useRef(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (carousel) {
//       const containerWidth = carousel.offsetWidth;
//       carousel.scrollLeft = (carousel.scrollWidth - containerWidth) / 2;
//     }
//   }, []);

//   // Mouse dragging functionality
//   useEffect(() => {
//     const carousel = carouselRef.current;

//     const mouseDownHandler = (e) => {
//       isDragging.current = true;
//       startX.current = e.pageX - carousel.offsetLeft;
//       scrollLeft.current = carousel.scrollLeft;
//     };

//     const mouseLeaveHandler = () => {
//       isDragging.current = false;
//     };

//     const mouseUpHandler = () => {
//       isDragging.current = false;
//     };

//     const mouseMoveHandler = (e) => {
//       if (!isDragging.current) return;
//       e.preventDefault();
//       const x = e.pageX - carousel.offsetLeft;
//       const walk = (x - startX.current) * 1.5; // adjust speed
//       carousel.scrollLeft = scrollLeft.current - walk;
//     };

//     carousel.addEventListener("mousedown", mouseDownHandler);
//     carousel.addEventListener("mouseleave", mouseLeaveHandler);
//     carousel.addEventListener("mouseup", mouseUpHandler);
//     carousel.addEventListener("mousemove", mouseMoveHandler);

//     return () => {
//       carousel.removeEventListener("mousedown", mouseDownHandler);
//       carousel.removeEventListener("mouseleave", mouseLeaveHandler);
//       carousel.removeEventListener("mouseup", mouseUpHandler);
//       carousel.removeEventListener("mousemove", mouseMoveHandler);
//     };
//   }, []);

//   return (
//     <div className="bg-[#FFC247]">
//       <div className="max-w-[1440px] w-full pb-[70px] mx-auto">
//         <div className="max-w-[609px] text-[36px] leading-[45px] tracking-[-0.72px] text-[#02033B] font-bold pl-[93px] pt-[83px]">
//           <p className="w-[563.42px] p-2 inter">
//             Loved by thousands of iPhone and Android users alike
//           </p>
//         </div>

//         <div className="relative mt-[72px]">
//           {/* Scrollable Container */}
//           <div
//             ref={carouselRef}
//             className="flex overflow-x-scroll scroll-smooth no-scrollbar px-[250px] gap-[40px] cursor-grab active:cursor-grabbing"
//             style={{ scrollSnapType: "x mandatory" }}
//           >
//             {data.map((item, index) => (
//               <div
//                 key={index}
//                 className="w-[400px] flex-shrink-0 pl-[36px] pr-[36px] pt-[36px] pb-[96px] bg-[#FFFFFF] rounded-[48px] flex-col"
//                 style={{ scrollSnapAlign: "center" }}
//               >
//                 <div className="flex gap-1">
//                   <img src={item.star} alt="star" className="w-6 h-6" />
//                   <img src={item.star} alt="star" className="w-6 h-6" />
//                   <img src={item.star} alt="star" className="w-6 h-6" />
//                   <img src={item.star} alt="star" className="w-6 h-6" />
//                   <img src={item.star} alt="star" className="w-6 h-6" />
//                 </div>

//                 <p className="mt-2 pt-[24px] pb-[24px] inter text-[16px] leading-[20px] tracking-[0px]">
//                   {item.text}
//                 </p>
//                 <p className="mt-1 w-[136px] leading-[20px] tracking-[0px] inter text-[#02033B] font-bold">
//                   {item.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-[50px]">
//           <div className="flex items-center px-[96px] flex-wrap">
//             <p className="w-[129px] text-[23px] text-[#02033B] leading-[30px] tracking-[-0.48px] font-bold inter">
//               Featured in:
//             </p>
//             <div className="flex ml-[102px] gap-[30px] flex-wrap">
//               <img className="w-[130px] h-[95px]" src={cnbc} alt="company logo" />
//               <img className="w-[130px] h-[95px]" src={newyork} alt="company logo" />
//               <img className="w-[130px] h-[95px]" src={financial} alt="company logo" />
//               <img className="w-[130px] h-[95px]" src={readers} alt="company logo" />
//               <img className="w-[130px] h-[95px]" src={zdnet} alt="company logo" />
//               <img className="w-[130px] h-[95px]" src={wierd} alt="company logo" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Craousal;
