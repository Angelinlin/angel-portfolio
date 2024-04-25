"use client"
import React from 'react'
import Framer from '../ui/framer'
import { motion } from 'framer-motion';
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { RiFlutterLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";

export default function HomeSection() {


    const skillsImages = [
        {
            icon: <TbBrandNextjs size={55} color='gray' />,
            title: 'Next.js',
        },
        {
            icon: <TbBrandTypescript size={55} color='gray' />,
            title: 'Typescript',
        },
        {
            icon: <SiSolidity size={55} color='gray' />,
            title: 'Solidity',
        },
        {
            icon: <FaRust size={55} color='gray' />,
            title: 'Rust',
        },
        {
            icon: <RiFlutterLine size={55} color='gray' />,
            title: 'Flutter',
        },
        {
            icon: <FaNode size={55} color='gray' />,
            title: 'Node.js',
        },
        {
            icon: <FaPython size={55} color='gray' />,
            title: 'Python',
        },
        {
            icon: <RiJavascriptLine size={55} color='gray' />,
            title: 'Javascript',
        },
        {
            icon: <FaReact size={55} color='gray' />,
            title: 'React',
        },
        {
            icon: <SiSolana size={55} color='gray' />,
            title: 'Solana',
        },
        {
            icon: <FaEthereum size={55} color='gray' />,
            title: 'Ethereum',
        },
    ]


    return (
        <>
            <div className="bg-neutral-900 flex items-center justify-center pt-16">
                <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-semibold text-white text-5xl md:text-6xl">
                        Hi I am
                        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"> Angel Cervantes </span>
                        developer and designer
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="max-w-4xl">
                        <p className="mt-5 text-neutral-400 text-lg">
                            It is a creative hub where imagination meets craftsmanship to transform ideas into tangible realities. At Preline Agency, we specialize in turning conceptual visions into concrete forms, whether it be through design, artistry, or technological innovation.
                        </p>
                    </motion.div>
                </div>
            </div >

            <div className="overflow-hidden pt-24 bg-neutral-900">
                <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -bottom-20 start-1/2  transform -translate-x-1/2" width="2745" height="488" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127" className="stroke-neutral-700/50" stroke="currentColor" />
                    <path d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136" className="stroke-neutral-700/50" stroke="currentColor" />
                </motion.svg>

                <div className="relative z-10 pb-8">
                    <div className="max-w-5xl px-4 xl:px-0 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-4">
                            <span className="text-xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text font-bold"> skills </span>
                        </motion.div>
                    </div>
                    {/* <div className="flex justify-between gap-14 pt-4 pb-16 "> */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="flex w-screen animate-marquee items-stretch gap-16 pt-8 pb-16">
                        {
                            [...skillsImages, ...skillsImages].map((skills, i) => (
                                <Framer key={i}>
                                    <div className='glassy border rounded-lg py-6 text-center text-white flex flex-col gap-2'>
                                        <div key={i} className="px-10">
                                            {skills.icon}
                                        </div>
                                        <p className='font-thin z-0 text-xs'>
                                            {skills.title}
                                        </p>
                                    </div>
                                </Framer>
                            ))
                        }
                    </motion.div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}
