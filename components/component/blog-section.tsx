
"use client"
import Link from "next/link"
import { getPosts } from "@/lib/actions/actionsPrisma";
import { Suspense, useEffect, useState } from "react";
import { Post } from "@/lib/types";
import { PostMetadata } from "@/lib/blog";
import PostPreview from "@/app/blog/_components/PostPreview";

export function BlogSection({ postMetadata }: { postMetadata: PostMetadata[] }) {

  const postsPrev = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));


  return (
    <div className="flex flex-col text-neutral-300 w-full gap-6 items-start max-w-2xl h-full mx-auto px-4 pt-16">
      <div className="space-y-4 w-full">
        <div className="space-y-2">
          <h1 className="text-xl font-bold tracking-tight">The Official Angelinlin blog</h1>
        </div>
      </div>
      <div className="space-y-4 md:space-y-6 w-full">
        <div className="grid items-center gap-4 lg:gap-8">
          {postsPrev}

        </div>
      </div>
    </div>
  )
}
