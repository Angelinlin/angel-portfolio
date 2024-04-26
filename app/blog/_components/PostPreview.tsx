import Link from "next/link";
import { PostMetadata } from "@/lib/blog";

const PostPreview = (props: PostMetadata) => {
    return (
        <Link className=" w-full items-center rounded border p-1 text-sm  no-underline border-neutral-700 bg-neutral-800 text-neutral-100 gap-1 hover:bg-slate-400 hover:bg-opacity-20 transform duration-300 "
            href={`/blog/${props.slug}`}>
            {/* <p className="text-sm text-slate-400">{props.date}</p> */}
            <h2 className=" text-neutral-300  mb-4">{props.title}</h2>
            <p className="text-neutral-500">{props.subtitle.substring(0, 50)}...</p>
        </Link>
    );
};

export default PostPreview;