import React from "react";

const MovingExperience = () =>{
    return(
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto text-center lg:text-left">
  <div className="flex gap-8 flex-col flex-col-reverse  lg:flex-row-reverse">
<iframe className="w-full h-[315px] border-solid border-4 rounded-xl border-green-600" src="https://www.youtube.com/embed/DF_aCF5W_2s" title="Reliable Moving Company Western MA - Fast &amp; Safe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
    <div className="my-auto lg:w-full">
      <h1 className="text-3xl lg:text-4xl leading-normal font-bold text-indigo-900">Expect an Outstanding<span className="text-green-600">Moving Experience</span></h1>
      <p className="py-4 text-justify text-lg">Not all moving companies in Massachusetts are the same. When it comes to moving, there are so many things to worry about. Let us handle some of the heavy lifting for you. At All Points Movers, LLC, we utilize the best industry practices for safety and care. Plus, you will only pay for the services you need.</p>
      <button className="bg-indigo-900 text-white font-semibold px-4 py-2 rounded text-center w-full">Our Promise To You</button>
    </div>
  </div>
</div>

        </section>
    )
}
export default MovingExperience;