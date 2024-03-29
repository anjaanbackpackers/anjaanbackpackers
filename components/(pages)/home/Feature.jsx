"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Hero1 from '@/public/hiking/hiking9.WEBP';

import AOS from 'aos'
import 'aos/dist/aos.css'

const features = [
    {
        name: 'Push to deploy.',
        description: 'Come and Explore the Majestic and Breathtaking Himalayan Mountains with Us Today',
    },
    {
        name: 'SSL certificates.',
        description: "Immerse Yourself in the Unmatched and Pristine Beauty of Nature's Magnificent Landscapes",
    },
    {
        name: 'Database backups.',
        description: 'Embark on an Unforgettable Hiking Journey with Us and Discover the Breathtaking Beauty of Nature',
    },
]
const Feature = () => {

    return (
        <div className='overflow-hidden bg-white pt-16 sm:pt-24 pb-4'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto grid gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none grid-cols-12'>
                    <div className='col-span-12 lg:pr-8 lg:pt-4 lg:col-span-7'>
                        <div className=''>
                            <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'
                                data-aos="fade-up" data-aos-duration="500">
                                Discover the Beauty of Uttarakhand through Hiking
                            </h2>
                            <p className='mt-6 text-base text-gray-900 md:text-lg'
                                data-aos="fade-up" data-aos-duration="500">
                                Experience the thrill of hiking in Uttarakhand, where breathtaking landscapes and serene trails await you. Whether you&apos;re a beginner or an experienced hiker, our expert guides will ensure a memorable adventure.
                            </p>
                            <ul className='mt-10 ml-5 max-w-xl text-base leading-7 text-gray-600 lg:max-w-none' data-aos="fade-up" data-aos-duration="500">
                                {features.map((feature) => (
                                    <li key={feature.name} className='list-disc'>
                                        {feature.description}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 flex gap-x-6" data-aos="fade-up" data-aos-duration="500">
                                <a href="#" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm ring-1 ring-orange-500 hover:text-white hover:bg-orange-500">Discover trips</a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                                    Join us <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-5' data-aos="zoom-out" data-aos-duration="500">
                        <Image
                            src={Hero1}
                            alt='Product screenshot'
                            quality={100}
                            loading='eager'
                            className='h-full object-cover rounded-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature