import React, { FC } from "react";
import { GetServerSideProps } from "next/types";
const axios = require("axios").default;

type Posts = React.PropsWithChildren<{}>;

type Post = {
    id?: number;
    title?: string;
    slug?: string;
    updated?: any;
    content?: string;
    created?: any;
    status?: number;
    author?: number;
};

export const getServerSidePorps: GetServerSideProps = async () => {
    const posts = await axios.get(`http://127.0.0.1:8000/posts`);
    console.log(posts);

    return {
        props: posts,
    };
};

export default function Posts({ posts }: { posts: Post }) {
    return <div>{posts}</div>;
}
