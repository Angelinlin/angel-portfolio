import Link from "next/link";
import { PostMetadata } from "@/lib/blog";

interface PostItemProps {
    slug: string;
    title: string;
    description?: string;
    date: string;
    tags?: Array<string>;
}

export function PostItem({
    slug,
    title,
    description,
    date,
    tags,
}: PostItemProps) {
    return (
        <Link className="flex flex-col gap-2 text-start rounded border p-2 text-sm  no-underline border-neutral-700 bg-neutral-800 text-neutral-100 hover:bg-slate-400 hover:bg-opacity-20 transform duration-300 "
            href={"/" + slug}>
            {/* <p className="text-sm text-slate-400">{props.date}</p> */}
            <h2 className=" text-neutral-300">{title}</h2>
            <p className="text-neutral-500">{description?.substring(0, 50)}...</p>
        </Link>
    );
};
