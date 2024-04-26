import getPostMetadata from '@/lib/blog';
import { notFound } from 'next/navigation'
import React from 'react'
import fs from "fs";
import ReactMarkdown from 'react-markdown';
import matter from "gray-matter";

const getPostContent = (slug: string) => {
    const folder = "content/";
    const file = `${folder}${slug}.md`;
    try {
        const content = fs.readFileSync(file, "utf8");
        const matterResult = matter(content);
        return matterResult;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

export default async function PostPage({ params }: { params: any }) {

    const post = getPostContent(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <div className="max-w-3xl px-4 pt-28 text-white pb-12 sm:px-6 lg:px-8 mx-auto">
                <div >
                    {/* <div className="flex justify-between items-center mb-6">
                        <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                            <div className="flex-shrink-0">
                                <img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                            </div>

                            <div className="grow">
                                <div className="flex justify-between items-center gap-x-2">
                                    <div>

                                        <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                                            <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                                                <span className="font-semibold text-neutral-300 dark:text-neutral-200">
                                                    Leyla Ludic
                                                </span>


                                                <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl dark:bg-neutral-950 dark:divide-neutral-700" role="tooltip">

                                                    <div className="p-4 sm:p-5">
                                                        <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                                                            <div className="flex-shrink-0">
                                                                <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                                                            </div>

                                                            <div className="grow">
                                                                <p className="text-lg font-semibold text-gray-200 dark:text-neutral-200">
                                                                    Leyla Ludic
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm  ">
                                                            Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over the world.
                                                        </p>
                                                    </div>



                                                    <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                                                        <ul className="text-xs space-x-3">
                                                            <li className="inline-block">
                                                                <span className="font-semibold text-gray-200 dark:text-neutral-200">56</span>
                                                                <span className=" ">articles</span>
                                                            </li>
                                                            <li className="inline-block">
                                                                <span className="font-semibold text-gray-200 dark:text-neutral-200">1k+</span>
                                                                <span className=" ">followers</span>
                                                            </li>
                                                        </ul>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <ul className="text-xs text-gray-500 dark:text-neutral-500">
                                            <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full  dark:before:bg-neutral-600">
                                                Jan 18
                                            </li>
                                            <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full  dark:before:bg-neutral-600">
                                                8 min read
                                            </li>
                                        </ul>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div>
                        <div className="my-12 text-center">
                            <h1 className="text-2xl ">{post.data.title}</h1>
                            {/* <p className="text-slate-400 mt-2">{post.data.date}</p> */}
                        </div>

                        <article className="prose">
                            {/* <Markdown>{post.content}</Markdown> */}
                            <ReactMarkdown>{post.content}</ReactMarkdown>

                        </article>
                    </div>

                </div>
            </div>

        </>
    )
}
