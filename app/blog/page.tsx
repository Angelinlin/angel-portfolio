import { BlogSection } from '@/components/component/blog-section';
import getPostMetadata from '@/lib/blog';
import React from 'react'
import PostPreview from './_components/PostPreview';

export default function Blog() {
    const postMetadata = getPostMetadata();

    return (
        <>
            <div className='h-screen w-full p-8 flex justify-center items-center'>
                <BlogSection postMetadata={postMetadata} />
            </div>
        </>
    )
}
