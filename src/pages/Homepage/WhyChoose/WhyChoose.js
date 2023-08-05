import React from 'react'
import WhyChooseHeading from './WhyChooseHeading'
import team from '../../../assets/icons/team.svg'
import time from '../../../assets/icons/time.svg'
import support from '../../../assets/icons/support.svg'
import delivery from '../../../assets/icons/delivery.svg'
import Choose from './Choose'

const whyChoose = [
    {
        id: 1,
        name: 'Local Moves',
        img: team,
        desc: 'We’ll move your apartment, home,or business'
    },
    {
        id: 2,
        name: '24/7 Support',
        img: support,
        desc: 'Moves over 150 miles from origin to destination'
    },
    {
        id: 3,
        name: 'Timely Delivery',
        img: time,
        desc: 'Help when your time and schedule matter most'
    },
    {
        id: 4,
        name: 'Packing',
        img: delivery,
        desc: 'Moves over 150 miles from origin to destination'
    }
]

const WhyChoose = () => {
    return (
        <section className='container mx-auto my-12 '>
            <WhyChooseHeading />
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-b-50'>
                {
                    whyChoose.map(choose => (
                        <Choose key={ choose.id } choose={ choose } />
                    ))
                }
            </div>
        </section>
    )
}
export default WhyChoose