"use client";
import React from 'react'
import { motion } from 'framer-motion';

export default function WorksPage() {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                    {[1, 2, 3, 4].map((item) => (
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: item * 0.2 }}
                            key={item} className="group rounded-xl overflow-hidden glassyTwo" href="#">
                            <div className="sm:flex">
                                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                    <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                                </div>

                                <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0 p-2">
                                    <h3 className="text-xl font-semibold text-neutral-300 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                        Studio by Preline
                                    </h3>
                                    <p className="mt-3 text-gray-400 dark:text-neutral-400">
                                        Produce professional, reliable streams easily leveraging Preline&apos;s innovative broadcast studio
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
