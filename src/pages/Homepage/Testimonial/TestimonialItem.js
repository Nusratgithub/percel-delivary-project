import React from 'react'
// import { HiStar } from 'react-icons/hi'

const TestimonialItem = ({ testimonial }) => {
    const { name, title, icon, description } = testimonial
    return (
        <div className='border bg-green-50 border-[#eee5e5] rounded-xl p-4'>
            <div className='flex items-center justify-between gap-5 mb-[22px] '>
                <div className='flex items-center gap-5 '>
                    {/* <img src={img} alt={name} /> */}
                    <div>
                        <h2 className='text-indigo-900 text-text-25 leading-leading-30 font-bold mb-[10px]'>{name}</h2>
                        <p className='font-semibold text-indigo-900 text-lg leading-6 text-theme-text'>{title}</p>
                    </div>
               </div>
                <img className='w-10' src={ icon } alt="icon" />
            </div>
            <p className='mb-5 capitalize text-indigo-900 font-normal text-base leading-leading-30'>{ description }</p>
            {/* <div className='flex mb-[10px] text-[#FF912C] text-xl'>
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
            </div> */}
        </div>
    )
}

export default TestimonialItem