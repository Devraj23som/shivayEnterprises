import { RiMapPin2Fill } from '@remixicon/react'
import React from 'react'

const About = () => {
  const city=["Bhopal","Indore","Bilaspur","Bhilai","Durg","Gwalior","Charoda"]
  return (
 

   <div id='about' className='w-screen h-10/10 overflow-auto md:overflow-hidden    bg-blue-500 text-white'>

        <div className='w-full h-full'>
            <div className='text-center underline'>
                <h2 className='text-4xl '>Service Center</h2>
            </div>
            <div className='w-3/4 mt-10 mb-10 mx-auto'>
              <h3 className='text-2xl text-center'>Washing Machine AC Refrigerator Microwave
Repair Service Center

Authorized Expert Technician
More Then 75,000 Happy Customers</h3>
            </div>
            <div className=' w-full h-8/10  flex justify-center'>
              <div className='card-section flex-col md:flex-row flex flex-wrap gap-4 justify-center items-center w-8/10 h-fit '>
              {city.map((e,i)=><div key={i} className='card text-black w-1/2 md:w-1/4 h-1/4 bg-white rounded-2xl'>
              
             <div className='flex flex-col justify-center items-center'>
             <RiMapPin2Fill
              color={'blue'}
              />{e}
              <h4>Service Center</h4>
             </div>
              
              </div>)}
                
              </div>
            </div>
        </div>
    </div>

  )
}

export default About