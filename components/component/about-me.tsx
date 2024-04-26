"use client";
import Image from "next/image";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandVercel } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export function AboutMe() {

  const [isVisible, setIsVisible] = React.useState(false);

  const handleViewportEnter = () => {
    setIsVisible(true);
  }

  return (
    <section id="about" className="bg-neutral-900 dark:bg-gray-800 text-white py-12 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          onViewportEnter={handleViewportEnter}
          transition={{ duration: 2, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center">
            <Image
              alt="Profile Picture"
              className="rounded-full w-48 h-48 object-cover"
              height={200}
              src="/Angel.jpg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width={200}
              priority

            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Angel Cervantes</h2>
            <p className="text-neutral-400 leading-relaxed">
              I&apos;m a passionate web developer with a strong background in front-end technologies. I love building
              visually appealing and user-friendly websites and applications. In my free time, I enjoy exploring new
              design trends, experimenting with different libraries and frameworks, and staying up-to-date with the
              latest industry developments.
            </p>
            <div className="w-auto flex gap-2">
              <a
                className="inline-flex items-center rounded border p-1 text-sm leading-4 no-underline border-neutral-700 bg-neutral-800 text-neutral-100 gap-1 hover:bg-purple-300 hover:bg-opacity-20 transform duration-300"
                href="https://nextjs.org"
                target="_blank"
              >
                NextJS <TbBrandNextjs size={16} color='white' />
              </a>
              <a
                className="inline-flex items-center rounded border p-1 text-sm leading-4 no-underline border-neutral-700 bg-neutral-800 text-neutral-100 gap-1 hover:bg-yellow-300 hover:bg-opacity-20 transform duration-300"
                href="https://vercel.com"
                target="_blank"
              >
                Vercel <TbBrandVercel size={16} color='white' />
              </a>
              <a
                className="inline-flex items-center rounded border p-1 text-sm leading-4 no-underline border-neutral-700 bg-neutral-800 text-neutral-100 gap-1 hover:bg-sky-300 hover:bg-opacity-20 transform duration-300"
                href="https://reactjs.org"
                target="_blank"
              >
                ReactJS <FaReact size={16} color='white' />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
