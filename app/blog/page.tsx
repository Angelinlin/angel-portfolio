"use client";
import React from 'react'
import { posts } from '#site/content';
import { PostItem } from './_components/PostPreview';
import { motion } from 'framer-motion';
export default function Blog() {
    const displaysPosts = posts;

    return (
        <>
            <div className='h-screen w-full p-8 flex justify-center items-center'>
                {/* <BlogSection postMetadata={displaysPosts} /> */}

                <div className="flex flex-col text-neutral-300 w-full gap-6 items-start max-w-2xl h-full mx-auto px-4 pt-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 w-full">
                        <div className="space-y-2">
                            <h1 className="text-xl font-bold tracking-tight">The Official Angelinlin&apos;s blog</h1>
                        </div>
                    </motion.div>
                    <div className="space-y-4 md:space-y-6 w-full">
                        <div className="grid items-center gap-8">
                            {displaysPosts?.length > 0 ? (
                                <ul className='flex flex-col w-full gap-4'>
                                    {displaysPosts.map((post, i) => {
                                        const { slug, title, description, date, tags } = post; // Remove 'const' keyword
                                        return (
                                            <motion.li
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                                key={slug}>
                                                <PostItem slug={slug} title={title} description={description} date={date} tags={tags} />
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <p>No posts to display</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
