
"use client";
import React, { useEffect, useRef, useState } from "react";

const Example = () => {
    const containerRef = useRef(null);
    const [isInside, setIsInside] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const scrollSpeed = 5; 
  
    useEffect(() => {
      const target = containerRef.current;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInside(entry.isIntersecting);
        },
        { threshold: 0.7 }
      );
  
      if (target) observer.observe(target);
  
      return () => {
        if (target) observer.unobserve(target);
      };
    }, []);
  
    useEffect(() => {
      const handleWheel = (e) => {
        if (isInside) {
          const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
          const scrollableHeight = scrollHeight - clientHeight;
  
          if (e.deltaY > 0 && scrollTop < scrollableHeight) {
            e.preventDefault();
            containerRef.current.scrollBy({
              top: e.deltaY * scrollSpeed, 
              behavior: "smooth",
            });
          } else if (e.deltaY < 0 && scrollTop > 0) {
            e.preventDefault();
            containerRef.current.scrollBy({
              top: e.deltaY * scrollSpeed, 
              behavior: "smooth",
            });
          }
        }
      };
  
      if (isInside) {
        document.addEventListener("wheel", handleWheel, { passive: false });
      } else {
        document.removeEventListener("wheel", handleWheel);
      }
  
      return () => {
        document.removeEventListener("wheel", handleWheel);
      };
    }, [isInside]);
  
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
      setIsAtTop(scrollTop === 0);
    };
  return (
    <div className="h-[200vh] bg-gray-900">
      <div className="text-white text-center py-10">
        <p>Scroll down to enter the scrollable section...</p>
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nam provident exercitationem ab nobis minus iusto sapiente vitae, ratione quidem reiciendis magnam doloremque aspernatur quam veritatis molestiae, illum doloribus dolore similique in sequi assumenda eligendi itaque. Maxime sed consequatur possimus ullam sapiente animi dicta molestias porro in deserunt, fugiat reiciendis incidunt voluptate quasi obcaecati accusantium totam unde ipsum eveniet aperiam veniam debitis sint minus! Animi exercitationem reiciendis modi labore in quidem facere iusto unde maxime! Ratione, quam ad totam omnis quibusdam consequuntur doloremque mollitia perspiciatis, dolore ut accusantium. Eligendi, earum! Voluptatem veniam magnam labore soluta quod sapiente ducimus tempora cupiditate qui excepturi dolor hic nisi voluptatum nobis vel ipsum, eaque non totam doloribus dicta maiores. Unde, voluptatibus molestiae! Necessitatibus facere minus labore iste a officiis. Placeat nesciunt sit exercitationem hic eius eaque distinctio velit ipsum ipsa, laborum cum tempora magni! Delectus repudiandae porro natus beatae, quidem temporibus expedita omnis maiores assumenda asperiores! Doloribus, alias? Itaque, id numquam? Corporis itaque consectetur placeat ad blanditiis perferendis adipisci recusandae. Impedit necessitatibus, facilis rerum quasi deleniti tempora esse officia qui ad dolore sint aperiam ipsa soluta dignissimos perferendis omnis error alias nisi commodi enim reprehenderit in illo! Reprehenderit nesciunt reiciendis suscipit, itaque deserunt quos officiis expedita delectus? Est, aperiam minus. Exercitationem, temporibus porro voluptatibus numquam voluptas officiis quam deserunt eveniet sit, sequi deleniti recusandae perferendis, quidem impedit nihil. Laborum beatae pariatur earum quo impedit nobis totam distinctio animi deleniti amet corporis necessitatibus velit ducimus voluptas ab delectus, provident iste sit ex id voluptate eligendi et. Asperiores magnam explicabo quasi quam tenetur cupiditate odio nesciunt. Architecto animi tenetur facere maxime provident debitis aperiam dolore reiciendis quisquam sunt. Id consequatur architecto perspiciatis rerum? Aut, explicabo deleniti. Ab temporibus sunt eos enim. Eius voluptatem sapiente ea ut sit rerum quia voluptates animi veniam, dolor sed consectetur ullam.</p>
     
       
      </div>

      <div
        ref={containerRef}
        className="h-[70vh] w-[80%] mx-auto bg-gray-800 overflow-y-auto p-6 rounded-md"
        onScroll={handleScroll}
      >
        <div className="h-[50vh] bg-blue-500 mb-4 flex items-center justify-center text-white text-xl">
          Section 1
        </div>
        <div className="h-[50vh] bg-green-500 mb-4 flex items-center justify-center text-white text-xl">
          Section 2
        </div>
        <div className="h-[50vh] bg-red-500 mb-4 flex items-center justify-center text-white text-xl">
          Section 3
        </div>
        <div className="h-[50vh] bg-yellow-500 flex items-center justify-center text-white text-xl">
          Section 4
        </div>
      </div>

      <div className="text-black text-center py-10">
        <p>Keep scrolling after the section ends...</p>
       
      </div>
      <div className="text-black text-center py-10">
        <p>Keep scrolling after the section ends...</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id consectetur, ea quo nisi libero odit minus eius porro nobis est tempora! Quasi quaerat molestiae laborum obcaecati ducimus illum ea inventore sed suscipit, distinctio provident deserunt explicabo veritatis dolor hic, nesciunt sapiente, a est minus excepturi. Alias fugit ad at libero beatae magnam officia iusto aliquam itaque eum fuga accusantium earum cum, neque inventore. Voluptatem mollitia nemo quod hic, assumenda exercitationem quisquam impedit consequuntur, quis animi laudantium pariatur dolorum magni rem architecto eveniet cum iusto aliquid optio placeat, voluptatum et? Maxime mollitia ipsam tenetur quas possimus laudantium eos velit quos, sint accusamus illum tempora pariatur explicabo eius sed similique voluptas itaque rerum quaerat ut reprehenderit veritatis quidem dolorem dolores! Facilis voluptatibus quod culpa officiis. Tempore doloremque quas amet, adipisci optio laborum ab maxime aliquid delectus odio ex beatae, quos officiis, iure obcaecati nesciunt doloribus dolores. Culpa sed maxime ipsum nisi sapiente officiis nemo atque quia inventore eveniet fugiat odio similique ea eum hic cum eaque, fugit numquam unde dolor consequatur error corrupti. Consequatur perferendis quos, sit dicta explicabo impedit? Itaque earum enim error, blanditiis, repellat laboriosam mollitia, eius ducimus odit cum repellendus quidem sequi. Accusantium sint ratione voluptatibus ipsa? Sapiente mollitia repellat, magnam voluptatem cum necessitatibus corporis inventore quisquam accusamus sit dolores tenetur neque atque illo voluptates modi perferendis enim nostrum corrupti debitis consectetur ipsam! Incidunt unde ipsa et similique accusamus quas est delectus officia labore temporibus, eveniet aut consectetur ratione voluptatem totam, rerum exercitationem aliquid dolores. Quas hic animi exercitationem at neque earum, dolorum pariatur fuga, nesciunt corporis blanditiis laudantium accusamus odio beatae? Error nam debitis tenetur aliquid cupiditate vitae, officia ut libero aperiam quae officiis? Quidem nesciunt velit, consequuntur, similique obcaecati deleniti ipsa minima voluptate eaque illum odio, architecto vero dignissimos sapiente error modi assumenda aut aspernatur? Nemo adipisci laborum cupiditate possimus, quasi nam inventore maiores unde iure earum omnis voluptatem fugit necessitatibus, voluptas reprehenderit aliquid! Porro eius iusto nobis neque dicta quaerat eum sequi nulla, numquam dignissimos delectus obcaecati commodi possimus distinctio quis officiis ab sunt aliquam. Quasi blanditiis tempora, molestias neque animi, provident recusandae fugit consectetur, delectus ipsa sapiente assumenda ea at ab. Quisquam repellendus dolores quaerat dolorem! Quisquam ratione libero odit, minus cumque soluta itaque, mollitia autem quasi consectetur nam unde doloribus eaque reiciendis consequatur fuga assumenda illum nulla tenetur provident, delectus quidem dolore. Soluta odit quo fugiat consectetur fuga esse velit veritatis repellendus voluptas. Odit.</p>
       

        
   
      </div>
    </div>
  );
};

export default Example;
