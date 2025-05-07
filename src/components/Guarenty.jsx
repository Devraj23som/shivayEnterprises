import React from 'react'

const Guarenty = () => {
  return (
    <div id='guarenty' className='w-screen py-4 h-fit bg-blue-500  '>
      <h1 className='text-4xl text-center text-white py-5'>
        Review
      </h1>
        <div className='w-full h-full  flex flex-col gap-2 md:flex-row'>
            <div className="guaret-text md:w-1/2 flex justify-center items-center text-white ">
                <div className="content-guarent flex flex-col gap-5 w-8/10">
                    <div className="text-box w-full md:px-5 py-10 border-2 rounded-2xl">
                      
"Great job guys, keep up the great work!"  Priyanka Jain
                    </div>
                    <div className="text-box w-full md:px-5 py-10 border-2 rounded-2xl">
                      
                    "Thanks to everyone involved and keep up the great work guys!"  Ranjana Yadav


                    </div>
                    <div className="text-box w-full md:px-5 py-10 border-2 rounded-2xl">
                      
                    "Quick and reliable service!"  Vikas Rathore


                    </div>
                </div>
            </div>
            <div className="guarent-image flex justify-center items-center   md:w-1/2  ">
            <div className='guarent-icon w-1/2 h-full'>
                <img className='w-full h-full object-contain object-center'  src="/guarenty.jpg" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Guarenty