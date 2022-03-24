export interface Post {
    id?: number | string;
    author_name?: string;
    title?: string;
    slug?: string;
    author?: boolean;
    created?: string;
    updated?: string;
    content: string;
    status?: boolean;
    img?: string;
}