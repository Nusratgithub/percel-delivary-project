import React from "react";

const Map = () =>{
    return(
        <div className="bg-gray-100 pb-12">
            <div className="container mx-auto ">
  <div className="flex gap-8 flex-col lg:flex-row">
<iframe 
className="w-full h-[315px] border-solid border-4 rounded-xl border-green-600" 
src="https://maps.google.com/maps?q=Chittagong,%20bangladesh&t=k&z=9&ie=UTF8&iwloc=&output=embed" title="Reliable Moving Company Western MA - Fast &amp; Safe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
    <div className="my-auto lg:w-full">
      <h1 className="text-xl leading-normal font-bold text-indigo-900">25 Burford Ave Suite <br></br>
      #1 West Springfield, MA 01089</h1>
      <p className="py-5 text-justify text-lg">
      Call Us For a Free Estimate! 413-992-8931<br/>
      Our "Office without Walls" concept allows us to better serve you wherever you are located and to do so in a quick and efficient manner. There's always a truck near you! <br/>
      We are fully licensed registered and insured:
      MA DPU #31740; DOT #2536110; MC #894484
      </p>  
    </div>
  </div>
  <h1 className="text-indigo-900 font-bold text-center text-xl py-16">A portion of every job is donated to local charities to be used in our communities</h1>
</div>
</div>
    )
}
export default Map;