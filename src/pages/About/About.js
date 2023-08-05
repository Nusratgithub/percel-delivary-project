import React from "react"
// import './About.css'
import img from '../../assets/images/CaptureB.png'
import person from '../../assets/images/CaptureDelivary.png'

const About=()=>{
 return(
<section className="container mx-auto">
<div className=' my-2'>
    <div className=''>
        <img src={img} alt="" className='w-full h-60' />
    </div>    
</div>
 <div className="container mx-auto bg-green-50 m-10 lg:w-2/3 p-5">
<h1 className="lg:text-2xl text-xl leading-normal font-bold text-indigo-900">Moving Company Western MA and Nearby Area</h1>
<p className="py-2 text-indigo-900">All Points Movers, LLC is built on a foundation of experience. Our management team includes 3 generations of movers and a tradition of professionalism and quality. We’re family owned and operated because our team is a family. As the senior team leaders, the skills we bring to the organization are not of the operational variety. We must leave that to the younger men. Our responsibilities focus on four key elements:</p>
</div>
<div className="lg:p-10 py-8 lg:w-11/12 mx-auto my-10 bg-green-50">
 <div className=" text-left">
  <div className="flex lg:gap-10 flex-col lg:flex-row">
    <img src={person} className="lg:h-[500px] border-2 bg-green-600 border-dotted" />
    <div className="my-auto ">
      <h1 className="text-3xl font-bold text-indigo-900">Our Team</h1>
      <p className="py-2 text-justify">Our bench of moving specialists is deep. The specialists enjoy their work, they are conscientious, and they show up every day. They work very hard, sometimes in extreme conditions. Their friendly and courteous personalities will put you at ease. Their attention to detail and the careful manner they move your belongings will gain your trust. Their knowledge enthusiasm and work ethic will exceed your expectations. They have character, are proud of their accomplishments, and want to be your mover. As proof of our commitment to you, I offer 2014 team member initiatives:</p>
   <div className="flex gap-2 my-2">
   <button className="bg-indigo-900 text-white font-semibold px-4 py-2 rounded-full text-center">My Videos</button>
      <button className="bg-green-600 text-white font-semibold px-4 py-2 rounded-full text-center">Our Services</button>
   </div>
      
    </div>

  </div>
  
</div>

        </div>


</section>
 )
}
export default About;