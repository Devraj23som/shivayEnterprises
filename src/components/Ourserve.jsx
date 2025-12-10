import React from 'react'

const Ourserve = () => {
  return (
    <div id='service' className='w-screen py-10 border-t-2 h-auto '>
        {/* <div className='w-full'>
            <h2 className='text-4xl text-center text-orange-500 underline'>Our Services <br /> All Major Brand</h2>
        </div> */}
        <div className='content w-full h-9/10   flex justify-center '>

        <div className=' ourserveBox w-8/10 h-fit mt-3 '>
                {/* <div className='head pb-3 border-b-2'>
                    <div>
                        <img src="/productlogos.jpg" alt="logo" />
                    </div>
                    <div  >
                        <img  src="/productlogos2.jpg" alt="logo" />
                    </div>
              


                </div> */}
               
              
                <div className='flex flex-col gap-5 satis my-5'>
                    <h3 className='text-3xl text-center font-bold text-orange-500'>Our Best Policy</h3>
                     <div className='moneyBack'>
                        <img src="/moneyBack.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/satis.jpg" alt="" />
                    </div>
                    
                </div>
                <div className="content-points">
                    <div className="point-box">
                        <h2 className='text-3xl underline '>Trusted Technician
                        </h2>
                        <h3>Safety and comforts of our customers is on priority for us. So we only associate with technician who have strong technical experience and also provide us credentials in support to confirm their identity.</h3>
                    </div>
                    <div className="point-box">
                        <h2 className='underline text-3xl '>Best Pricing</h2>
                        <h3>Buying is never easy unless prices are shown upfront. Service Clap provides you transparent and upfront prices before you order. We provide repairing solution at affordable cost.</h3>
                    </div>
                    <div className="point-box">
                        <h2 className='text-3xl underline '>Quality Assurance</h2>
                        <h3>Our Prime motto is customer satisfaction, we are with you at every step of the process, thereby ensuring that the work is redone if you are not fully pleased with the service.</h3>
                    </div>
                </div>
        </div>

        </div>
    </div>
  )
}

export default Ourserve