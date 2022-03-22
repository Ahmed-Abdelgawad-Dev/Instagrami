import { Post } from "../../typings/interfaces";

export default function () {
  return <div></div>;
}

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/posts");
  const posts = await res.json();

  
  const paths = posts.map((post: Post) => ({
      params: { 
          slug: post.slug
      }
  }))