import { Post } from "../../typings/interfaces";

export default function () {
  return <div></div>;
}

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/posts");
  const data = await res.json();
  const parsed= JSON.parse(data)
  const paths:Post  = parsed
};
