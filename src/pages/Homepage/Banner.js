import React from "react";
import img from '../../assets/images/Hero-Image.png'

const Banner = () =>{
    return(
        <section className="bg-green-50">
            <div className="py-8 container mx-auto text-center lg:text-left">
  <div className="flex flex-col flex-col-reverse gap-10 lg:flex-row-reverse">
    <img src={img} className=""/>
    <div className="my-auto">
      <h1 className="text-3xl lg:text-5xl leading-relaxed font-bold text-indigo-900">Your Preferred <span className="text-green-600">Movers in</span> <span className="text-indigo-900">Western MA</span></h1>
      <p className="py-4 lg:w-11/12 text-lg">Moving into, out of or around Massachusetts and Connecticut? We can help! Residential or Commercial, Local or Long Distance. Better rates, Better service, Happier outcomes. Call and we can talk about it or email us the details and we will respond ASAP.</p>
      <button className="bg-indigo-900 text-white font-semibold px-4 py-2 rounded-full text-center">GET A FREE ESTIMATE</button>
    </div>
  </div>
</div>

        </section>
    )
}
export default Banner;