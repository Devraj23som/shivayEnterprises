import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-16 ">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or need to schedule a repair? Reach out to us through any of the methods below, 
          or fill out our contact form and we'll get back to you as soon as possible.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-repair-light-gray p-6 rounded-xl mb-6 text-white bg-blue-500">
            <h3 className="font-medium text-xl mb-4">Contact Information</h3>
            
            <div className="space-y-4 ">
              <div className="flex items-center text-white gap-3">
                <div className="w-10 h-10 bg-repair-blue rounded-full flex items-center justify-center text-white">
                  {/* <Phone size={20} /> */}
                </div>
                <div>
                  <p className="text-sm ">Phone</p>
                  <p className="font-medium">+91 9109298201</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-repair-blue rounded-full flex items-center justify-center text-white">
                  {/* <Mail size={20} /> */}
                </div>
                <div>
                  <p className="text-sm ">Email</p>
                  <p className="font-medium">shivayenterprises0209@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-repair-blue rounded-full flex items-center justify-center text-white">
                  {/* <MapPin size={20} /> */}
                </div>
                <div>
                  <p className="text-sm ">Address</p>
                  <p className="font-medium">123 Repair Street, Fixville, FX 12345</p>
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
        
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-medium text-xl mb-4">Send Us a Message</h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className=' t-form block w-full'>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className='bg-white w-40 text-black rounded-2xl' name='name' />
              </div>
              <div className='t-form'>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                <input type="text" className='bg-white w-40 text-black rounded-2xl' name='phone' />
                {/* <Input id="phone" placeholder="Your phone number" /> */}
              </div>
            </div>
            
            <div className='t-form '>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className='bg-white text-black rounded-2xl' name="email"  />
              {/* <Input id="email" type="email" placeholder="Your email address" /> */}
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1">Service Needed</label>
              <select 
                id="service" 
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="">Select a service</option>
                <option value="washing-machine">Washing Machine Repair</option>
                <option value="microwave">Microwave Repair</option>
                <option value="refrigerator">Refrigerator Repair</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              {/* <Textarea id="message" placeholder="Describe your issue" rows={4} /> */}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 p-2 text-center text-white text-lg  border-1 border-white 
            " >Submit</button>
            {/* <Button className="w-full bg-repair-orange hover:bg-repair-blue text-white">
              Submit Request
            </Button> */}
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact