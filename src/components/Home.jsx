import React from 'react'

const Home = () => {
  return (
    <div className=' w-full h-9/10 overflow-y-hidden overflow-x-hidden'>
         <section id="home" className="py-16 md:py-24 bg-repair-light-gray">
      <div className="container  flex flex-col   justify-between items-center md:flex-row">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-repair-dark-gray mb-4">
            Fast & Reliable <span className="text-blue-500">Electronic Repairs</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We fix washing machines, microwaves, refrigerators, ac and more with expert care. 
            Quick service, affordable rates, and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Button className="bg-repair-orange hover:bg-repair-blue text-white text-lg py-6 px-8">
              Book a Repair
            </Button>
            <Button variant="outline" className="border-repair-blue text-repair-blue hover:bg-repair-blue hover:text-white text-lg py-6 px-8">
              View Services
            </Button> */}
          </div>
        </div>
        <div className='homeImg w-5/6 flex justify-center h-80 '>
            <img src="/homeappli.webp" alt="" />
        </div>
        </div>
        </section>
    </div>
  )
}

export default Home