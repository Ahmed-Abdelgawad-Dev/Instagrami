export interface Post {
    title: string;
    slug: string;
    author: boolean;
    created?: string;
    updated?: string;
    content: string;
    status?: boolean;
    img?: string;
}