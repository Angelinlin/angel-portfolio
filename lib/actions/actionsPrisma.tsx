"use server"
import db from "../prisma"

export const getPosts = async () => {
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
