import React from "react"
import Banner from "../Homepage/Banner"
import WhyChoose from "../Homepage/WhyChoose/WhyChoose"
import MovingExperience from "../Homepage/MovingExperience"
import Map from "../Homepage/Map"
import Download from "../Homepage/Download"
import Testimonials from "../Homepage/Testimonial/Testimonials"
import Contact from "../Homepage/Contact"

const Home =()=>{
return(
  <div>
    <Banner></Banner>
    <WhyChoose></WhyChoose>
    <MovingExperience></MovingExperience>
    <Map></Map>
    <Download></Download>
    <Testimonials></Testimonials>
    <Contact></Contact>
  </div>
)
}
export default Home;
