export interface Post {
    author_name: ReactNode;
    title: string;
    slug: string;
    author: boolean;
    created?: string;
    updated?: string;
    content: string;
    status?: boolean;
    img?: string;
}