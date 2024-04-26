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
            <div className="flex w-full justify-between">
                <h2 className=" text-neutral-300">{title}</h2>
                <div className="flex-row gap-2 md:block hidden">
                    {tags?.map((tag) => (
                        <p key={tag} className="inline-flex mx-1 items-center rounded border p-1 text-sm leading-4 no-underline border-neutral-700 bg-neutral-800 text-neutral-100 gap-1 hover:bg-purple-300 hover:bg-opacity-20 transform duration-300">
                            {tag}
                        </p>
                    ))
                    }
                </div>
            </div>
            <p className="text-neutral-500">{description?.substring(0, 50)}...</p>
        </Link>
    );
};
