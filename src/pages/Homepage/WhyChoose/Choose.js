import React from 'react'

const Choose = ({ choose }) => {
    const { name, img,desc } = choose
    return (
        <div className='text-black bg-green-100 border-2 border-dotted border-green-600 px-3 py-7 cursor-pointer flex flex-col justify-center items-center rounded-lg bg-[] hover:bg-white  transition-colors duration-200'>
            <img className='w-[75px] h-[53px] mb-5' src={img} alt={name} />
            <h3 className='text-center text-lg font-bold leading-leading-21'>{name}</h3>
            <p className='text-center'>{desc}</p>
        </div>
    )
}

export default Choose