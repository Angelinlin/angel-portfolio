"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function WorksPage() {

    const works = [
        {
            title: 'The Zen',
            image: '/works/zen.jpg',
            description: 'The Zen is a team of creatives who are excited about unique ideas helping fin-tech and de-fi companies reach their goals.'
        },
        {
            title: 'Barberi app',
            image: '/works/barberi.jpg',
            description: 'Mobile application for the total management of barbershops, from employee management to appointment reservation.'
        },
        {
            title: 'Komu Arcade',
            image: '/works/komu.jpeg',
            description: 'Komu Arcade a virtual reality video game where I was in charge of asset tokenization (NFTs) within the solana network.'
        },
        {
            title: 'sir420.sol',
            image: '/works/sir.png',
            description: 'My alter ego, Web3 portfolio and artist focused on the development and creation of services, experiences and digital art within the blockchain.'
        }
    ]

    return (
        <div className='lg:h-screen w-full flex items-center justify-center py-12'>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                    {works.map((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            key={i} className="group rounded-xl overflow-hidden glassyTwo" >
                            <div className="sm:flex">
                                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                    <Image
                                        width={650}
                                        height={500}
                                        className="grayscale group-hover:grayscale-0 transition-all duration-500 saturate-100 group-hover:scale-105  ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                        src={item.image}
                                        alt={item.title}
                                        priority
                                    />
                                </div>

                                <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0 p-3">
                                    <h3 className="text-xl font-semibold text-neutral-300 dark:text-neutral-300 dark:group-hover:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-gray-400 dark:text-neutral-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
