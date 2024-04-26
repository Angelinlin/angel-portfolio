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

    const [isVisible, setIsVisible] = React.useState(false);

    const handleViewportEnter = () => {
        setIsVisible(true);
    }

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
                    <div

                        className="flex w-screen animate-marquee items-stretch gap-16 pt-8 pb-16">
                        {
                            [...skillsImages, ...skillsImages].map((skills, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                                    onViewportEnter={handleViewportEnter}
                                    transition={{ duration: 0.5, delay: i * 0.2 }}
                                    key={i}>
                                    <Framer>
                                        <div className='glassy border rounded-lg py-6 text-center text-white flex flex-col gap-2'>
                                            <div key={i} className="px-10">
                                                {skills.icon}
                                            </div>
                                            <p className='font-thin z-0 text-xs'>
                                                {skills.title}
                                            </p>
                                        </div>
                                    </Framer>
                                </motion.div>
                            ))
                        }
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}
