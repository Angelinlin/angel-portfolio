export type Post = {
    id: number;
    title: string;
    content: string | null;
    published: boolean;
    date: Date;
}

export type Contact = {
    id: number;
    name: string;
    email: string;
    message: string;
    date: Date;
}