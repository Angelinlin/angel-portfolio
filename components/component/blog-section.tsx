
"use client"
import Link from "next/link"
import { getPosts } from "@/lib/actions/actionsPrisma";
import { useEffect, useState } from "react";
import { Post } from "@/lib/types";

export function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPost = async () => {
    const res = await getPosts();
    console.log(res)
    setPosts(res as Post[]);
  }

  useEffect(() => {
    getPost();
  }, [])

  return (
    <div className="flex flex-col text-neutral-300 gap-6 items-start max-w-2xl h-full mx-auto px-4 pt-16">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-xl font-bold tracking-tight">The Official Angelinlin blog</h1>
        </div>
      </div>
      <div className="space-y-4 md:space-y-6">
        <div className="grid gap-4 lg:gap-8">
          {
            posts.map((post, index) => (
              <Link key={index} className="space-y-2 hover:text-blue-300" href="#">
                <h2 className="text-sm font-bold tracking-tight ">
                  {post.title}
                </h2>
                <p className="text-xs text-gray-500 not-italic dark:text-gray-400">
                  {post.content?.substring(0, 100)}...
                </p>
              </Link>
            ))
          }
        </div>
      </div>

    </div>
  )
}
