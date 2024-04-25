"use server"
import { unstable_noStore as noStore } from 'next/cache';
import db from "../prisma"

export const getPosts = async () => {
    noStore();
    try {
        const res = await db.post.findMany({
            where: {
                published: true
            },
        });
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export async function getPost(id: number) {
    noStore();
    try {
        const metadata = await db.post.findUnique({
            where: {
                id: id
            },
        });
        if (metadata === null) {
            return null;
        }
        console.log(metadata);
        return metadata;
    } catch (err) {
        console.log(err);
        return err;
    }
}