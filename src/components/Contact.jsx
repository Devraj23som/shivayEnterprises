import { RiWhatsappLine } from '@remixicon/react'
import React, { useState } from 'react'

const Contact = () => {
  const [Name, setname] = useState("");
  const [Email, setemail] = useState("")
  const [Service, setservice] = useState("")
  const [Phone, setphone] = useState("")
  // Inside a React component
const sendEmail = async (e) => {
  e.preventDefault();
  const response = await fetch('https://shivayenterprisesback.onrender.com/api/users/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
     
      subject: 'User request',
      service: Service,
      phone: Phone,
      name:Name,
      email:Email
    })
  });

  const result = await response.json();
  alert(result.message || result.error);
};

  return (
    <section id="contact" className="py-16 border-t-2">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className=" max-w-2xl mx-auto">
          Have questions or need to schedule a repair? Reach out to us through any of the methods below, 
          or fill out our contact form and we'll get back to you as soon as possible.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 ">
        <div>
          <div className="bg-repair-light-gray p-6 relative rounded-xl mb-6  ">
            <h3 className="font-medium text-xl mb-4 ">Contact Information</h3>
            
            <div className="space-y-4 ">
              <div className="flex items-center  gap-3">
                <div className="w-10 h-10 bg-repair-blue rounded-full flex items-center justify-center text-white">
                  {/* <Phone size={20} /> */}
                </div>
                <div>
                  <p className="text-sm text-red-600">Phone</p>
                 <a href="tel:+919109298201">
                  
                   <p className="font-medium">+91 9109298201</p>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-repair-blue rounded-full flex items-center justify-center text-white">
                  {/* <Mail size={20} /> */}
                </div>
                <div>
                  <p className="text-sm text-red-600 ">Email</p>
                <a href="mailto:shivayenterprises0209@gmail.com">
                    <p className="font-medium">shivayenterprises0209@gmail.com</p>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-repair-blue rounded-full flex items-center justify-center text-white">
                  {/* <MapPin size={20} /> */}
                </div>
                <div>
                  <p className="text-sm text-red-600 ">Location</p>
                  <p className="font-medium">
                    <span className='font-bold'>Madhya Pradesh</span> <br />
                    Bhopal-Indore-Gwalior<br />
                    <span className='font-bold'>Chhattisgarh</span> <br />
                    Raipur-Bhilai-Bilaspur-Durg-Charoda<br />
                    <span className='font-bold'>Maharashtra</span> <br />
                    Thane-Kalyan</p>
                </div>
                
              
              </div>
              {/* <div className='w-full mt-20'>
              <a href="tel:+919109298201">
                <div className='w-full  text-2xl rounded-2xl text-center bg-orange-500 text-white'>
                
                  <button >Click for Call </button>
                </div>
                  </a>
                <a href="https://wa.me/+919109298201?text=Hello" target="_blank" rel="noopener noreferrer">
                
                  <RiWhatsappLine className='absolute bg-green-500 bottom-15 right-5  rounded-3xl text-green-800'  size={50}/>
                </a>
              </div> */}
            </div>
          </div>
          
         
            </div>
        
        <div className=" p-6 rounded-xl shadow-sm border border-amber-500">
          <h3 className="font-medium text-xl mb-4">Send Us a Message</h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className=' t-form block w-full'>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" onChange={(e) => setname(e.target.value)} className=' w-40 text-black border-2 rounded-2xl' name='name' />
              </div>
              <div className='t-form'>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                <input type="text" onChange={(e) => setphone(e.target.value)} className='bg-white w-40 text-black border-2 rounded-2xl' name='phone' />
                {/* <Input id="phone" placeholder="Your phone number" /> */}
              </div>
            </div>
            
            <div className='t-form '>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" onChange={(e) => setemail(e.target.value)} className='border-2 text-black rounded-2xl' name="email"  />
              {/* <Input id="email" type="email" placeholder="Your email address" /> */}
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1">Service Needed</label>
              <select 
                id="service"  onChange={(e) => setservice(e.target.value)} required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="">Select a service</option>
                <option value="washing-machine">Washing Machine Repair</option>
                <option value="microwave">Microwave Repair</option>
                <option value="air-conditioner">Air Conditioner Repair</option>
                <option value="refrigerator">Refrigerator Repair</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              {/* <Textarea id="message" placeholder="Describe your issue" rows={4} /> */}
            </div>
            <button onClick={(e)=>sendEmail(e)} className="rounded-2xl bg-orange-500 hover:bg-orange-700 p-2 text-center text-white text-lg  border-1 border-white 
            " >Submit</button> <br />
             <a href="tel:+919109298201" className="rounded-2xl bg-orange-500 hover:bg-orange-700 p-2 text-center text-white text-lg  border-1 border-white 
            ">
              Call Now
             </a>
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