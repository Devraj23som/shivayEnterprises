import React from 'react'

const Service = () => {
  return (
    <div className='w-full h-fit py-4  border-t-2 '>
        <div className='w-full '>
            <h1 className='text-3xl text-center text-orange-500 underline
            '>Services Charges</h1>
            <p className='w-3/4 mt-10 mb-10 mx-auto text-center'>We provide expert repair services for a wide range of household appliances. Our technicians are fully trained and equipped to handle all your repair needs.</p>
        </div>
        <div className='w-full h-full md:px-5 text-orange-500 flex flex-col justify-between items-center md:flex-row gap-2 mt-2 '>
            
            <div className="card w-100 md:w-1/5 h-fit rounded-2xl overflow-hidden ">
                <div className="card-body flex flex-col gap-2 p-2">
                    <h5 className="card-title text-2xl text-center underline">Air Conditioner Repair</h5>
                    <div className='card-image w-full h-fit rounded-2xl overflow-hidden'>
                        <img  src="/shivayAC3.jpg" alt="washing machine" />
                    </div>
                    <div className='w-100 px-10'>
                        <h3>Split Ac Repair Service & Installation Window Ac Repair Installation Inverter Non Inverter AC Repair Service Ac Jet Pump Service Ac Deep Cleaning Service Ac Pcb Board & Compressor Repair Ac Gas Charging Service</h3>
                    </div>
                    <p className="card-text text-center text-xl font-bold">Service Charge  Rs. 450/-</p>
                   
                </div>
            </div>
            <div className="card w-100 md:w-1/5 h-fit rounded-2xl overflow-hidden ">
                <div className="card-body flex flex-col gap-2 p-2">
                    <h5 className="card-title text-2xl text-center underline">Refrigerator Repair</h5>
                    <div className='card-image   rounded-2xl overflow-hidden'>
                        <img src="/shivayRefriedge3.jpg" alt="washing machine" />
                    </div>
                     <div className='w-100 px-10'>

                    <h3>Inverter Non Inverter Fridge Repair Single & Double Triple Door Fridge Repair Deep Freezer Commercial Fridge Repair Service Fridge Pcb Board & Compressor Repair Service Fridge Gas Charging Service </h3>
                    </div>
                    <p className="card-text text-center text-xl font-bold">Service Charge  Rs. 350/-</p>
                   
                </div>
            </div>
            <div className="card w-100 md:w-1/5 h-fit rounded-2xl overflow-hidden ">
                <div className="card-body flex flex-col gap-2 p-2">
                    <h5 className="card-title text-2xl text-center underline">Washing Machines Repair</h5>
                    <div className='card-image w-full h-5/10 rounded-2xl overflow-hidden'>
                        <img  src="/shivayWashing3.jpg" alt="washing machine" />
                    </div>
                    <div className='w-100 px-10'>
                       <h3>Fully Automatic & Semi Automatic Washing Machine Repair Front Load & Top Load Washing Machine Repair Service Washing Machine Pcb Board & Motor Repair Service </h3>

                    
                    </div>
                    <p className="card-text text-center text-xl font-bold">Service Charge  Rs. 350/-</p>
                   
                </div>
            </div>
            <div className="card w-100 md:w-1/5 h-fit rounded-2xl overflow-hidden">
                <div className="card-body flex flex-col gap-2 p-2">
                    <h5 className="card-title text-2xl text-center underline">Microwave Repair</h5>
                    <div className='card-image h-60  rounded-2xl overflow-hidden'>
                        <img src="/shivayMicrowave5.jpg" alt="washing machine" />
                    </div>
                     <div  className='w-100 px-10'>

                    <h3>Microwave Oven Repair Service Microwave Pcb Board Repair Microwave Oven Magnetron Repair Service Microwave Transformer Repair Service Microwave Switch Repair Service </h3>
                    </div>
                    <p className="card-text text-center text-xl font-bold">Service Charge  Rs. 350/-</p>
                   
                </div>
            </div>
            <div className="card w-100 md:w-1/5 h-fit rounded-2xl overflow-hidden">
                <div className="card-body flex flex-col gap-2 p-2">
                    <h5 className="card-title text-2xl text-center underline">TV Repair</h5>
                    <div className='card-image h-60  rounded-2xl overflow-hidden'>
                        <img src="/shivaytv.jpg" alt="washing machine" />
                    </div>
                      <div className='w-100 px-10'>
     <h3 >We specialize in repairing all types and brands of televisions, including LED, LCD, Smart TVs, and Plasma TVs. Our expert technicians quickly diagnose and fix screen issues, sound problems, motherboard faults, power supply failures, and more </h3>
                    </div>
                    <p className="card-text text-center text-xl font-bold">Service Charge  Rs. 350/-</p>
                   
                </div>
            </div>  

        </div>

    </div>
  )
}

export default Service