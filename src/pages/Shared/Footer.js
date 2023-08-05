import React from "react"

const Footer =()=>{
    return (
        <footer className="footer text-white p-10 bg-indigo-900">
  <div>
    <p className="text-green-500 font-bold text-2xl">
        ALL POINTS<span className="text-white">MOVERS LLC</span><br/>
    </p>
    <hr className="border-2 border-green-600 w-72"/>
    <p className="">We Take Care Of The Details..And Deliver Peach Of Mind</p>
    <div className="text-xl">
    <small className="">Phone: 413-992-8931  </small> <br/>
    <small className="">Email: allpointsmoversllc@gmail.com </small> <br/>
    <small className="">Address: 25 Burford Ave Suite #1 West Springfield, MA 01089 </small>
    </div>
  
  
  
  </div> 
  <div>
    <span className="text-xl font-bold">Quick Links</span> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Services</a> 
    <a className="link link-hover">Blog</a> 
    <a className="link link-hover">Video</a>
    <a className="link link-hover">Contact us</a>
  </div> 
  <div className="w-full">
    <h1 className="text-xl font-bold mx-auto">Subscribe Your Email</h1>
    <form className="w-full my-8">
    <input type="text" placeholder="Email" className="input w-full input-bordered" />
    <button className="bg-green-600 my-4 text-white w-full rounded px-4 py-3">Send</button>
    </form>
 
  </div> 
  
</footer>
    )
}
export default Footer;