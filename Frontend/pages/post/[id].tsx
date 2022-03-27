import Header from "../../components/Header";
import { Post } from "../../typings/interfaces";
import { GetStaticProps } from "next";

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  console.log("POST =>>>>>>>>>>>", post);
  return (
    <main>
      <Header />
      <img
        className="w-full h-36 object-cover"
        src={post.img}
        alt="IMAGE GOES HERE"
      />
      <article className="max-3xl max-auto p-5">
        <h1 className="text-2xl font-bold mt-10 mb-2">{post.title}</h1>
        <h2 className="text-base mt-10 mb-2">{post.content}</h2>
        <div className="flex space-x-2 items-center ">
          <img
            className="w-10 h-10 rounded-full"
            src={post.img}
            alt="Author Image"
          />
          <p className="font-light text-sm">
            Created by:{" "}
            <span className="text-green-900 font-bold">{post.author_name}</span>{" "}
            | {new Date(post.created as any as string).toString()}
          </p>
        </div>
      </article>
    </main>
  );
};

export const getStaticPaths = async () => {
  const query = await fetch("http://127.0.0.1:8000/posts");
  const posts = await query.json();

  const paths = posts.map((path: Post) => ({
    params: {
      id: path?.id?.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = await fetch(`http://127.0.0.1:8000/posts/${params?.id}`);
  const post = await query.json();
  if (!post) {
    return { notFound: true };
  }
  return { props: { post }, revalidate: 60 };
};

export default Post;
