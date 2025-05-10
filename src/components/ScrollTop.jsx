
// import { Button } from "@/components/ui/button";
// import { useScrollDirection } from "./useScrollDirection.js";
'use client'
import { RiPhoneFill, RiWhatsappLine } from "@remixicon/react";
import { useScrollDirection } from "./useScrollDirection.jsx";

const ScrollTop = () => {
  const { visible } = useScrollDirection();
  
  return (
    <div 
      className={` fixed bottom-0 w-full h-10 z-50    flex justify-center transition-transform duration-200 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
            <div  className='w-full '>
                <a href="https://wa.me/+919109298201?text=Hello" target="_blank" rel="noopener noreferrer">
                <div className="absolute -top-15 right-5">
                    
                  <RiWhatsappLine className=' bg-green-500 bottom-15 right-5   rounded-3xl text-green-800'  size={50}/>
                </div>
                </a>
              <a href="tel:+919109298201">
                <div className='w-full h-10 text-2xl rounded-2xl text-center bg-orange-500 text-white'>
               <div className="flex items-center justify-center">
                 <RiPhoneFill size={30}/>
                  <button > Click for Call </button>
               </div>
                </div>
                  </a>
              </div>
      {/* <Button asChild size="lg" className="bg-service-orange hover:bg-service-orange/90 text-white shadow-lg">
        <a href="tel:+11234567890" className="flex items-center gap-2">
          <Phone size={18} />
          <span>Call Now</span>
        </a>
      </Button> */}
    </div>
  );
};
export default ScrollTop;