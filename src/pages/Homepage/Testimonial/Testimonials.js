import React from 'react'
import TestimonialHeading from './TestimonialHeading'
import quote from '../../../assets/icons/quote.svg'
import TestimonialItem from './TestimonialItem'

const testimonials = [
    {
        id: 1,
        name: 'Awlad Hossain',
        title: 'Businessman',
        icon: quote,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        id: 2,
        name: 'Awlad Hossain',
        title: 'Businessman',
        icon: quote,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        id: 3,
        name: 'Awlad Hossain',
        title: 'Businessman',
        icon: quote,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
      
   
]

const Testimonials = () => {
    return (
       <section>
         <div className='container mx-auto mb-20'>
            <TestimonialHeading />
            <div className='grid container mx-auto grid-cols-1 lg:grid-cols-3 gap-6 mb-b-50'>
            {
                    testimonials.map(testimonial => (
                        <TestimonialItem key={ testimonial.id } testimonial={ testimonial } />
                    ))
                }
            </div>
        </div>
       </section>
    )
}

export default Testimonials