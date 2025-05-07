import React from 'react'

const Service = () => {
  return (
    <div className='w-full h-fit py-4  bg-blue-500 text-white'>
        <div className='w-full '>
            <h1 className='text-4xl text-center underline
            '>Services Charges</h1>
            <p className='w-3/4 mt-10 mb-10 mx-auto text-center'>We provide expert repair services for a wide range of household appliances. Our technicians are fully trained and equipped to handle all your repair needs.</p>
        </div>
        <div className='w-full h-full md:px-5 flex flex-col justify-between items-center md:flex-row gap-2 mt-2 '>
            <div className="card w-1/2 md:w-1/5 h-fit rounded-2xl overflow-hidden border-2">
                <div className="card-body flex flex-col gap-2 p-2">
                    <div className='card-image w-full h-5/10 rounded-2xl overflow-hidden'>
                        <img  src="/shivayWashing.jpg" alt="washing machine" />
                    </div>
                    <h5 className="card-title text-2xl text-center">Washing Machines</h5>
                    <p className="card-text text-center">Service Charge  Rs. 350/-</p>
                   
                </div>
            </div>
            <div className="card w-1/2 md:w-1/5 h-fit rounded-2xl overflow-hidden border-2">
                <div className="card-body flex flex-col gap-2 p-2">
                    <div className='card-image w-full h-fit rounded-2xl overflow-hidden'>
                        <img  src="/shivayAC.jpeg" alt="washing machine" />
                    </div>
                    <h5 className="card-title text-2xl text-center">Air Conditioner</h5>
                    <p className="card-text text-center">Service Charge  Rs. 450/-</p>
                   
                </div>
            </div>
            <div className="card w-1/2 md:w-1/5 h-fit rounded-2xl overflow-hidden border-2">
                <div className="card-body flex flex-col gap-2 p-2">
                    <div className='card-image   rounded-2xl overflow-hidden'>
                        <img src="/shivayRefriedge.jpeg" alt="washing machine" />
                    </div>
                    <h5 className="card-title text-2xl text-center">Refrigerator</h5>
                    <p className="card-text text-center">Service Charge  Rs. 350/-</p>
                   
                </div>
            </div>
            <div className="card w-1/2 md:w-1/5 h-fit rounded-2xl overflow-hidden border-2">
                <div className="card-body flex flex-col gap-2 p-2">
                    <div className='card-image h-60  rounded-2xl overflow-hidden'>
                        <img src="/shivayMicrowave2.jpg" alt="washing machine" />
                    </div>
                    <h5 className="card-title text-2xl text-center">Microwave</h5>
                    <p className="card-text text-center">Service Charge  Rs. 350/-</p>
                   
                </div>
            </div>

        </div>

    </div>
  )
}

export default Service