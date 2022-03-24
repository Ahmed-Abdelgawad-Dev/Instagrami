import Header from "../../components/Header";
import { Post } from "../../typings/interfaces";
import { GetStaticProps } from "next";

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  console.log(post);

  return (
    <main>
      <Header />
    </main>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/posts");
  const posts = await res.json();

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post?.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const p = await fetch(`http://127.0.0.1:8000/posts`, {
    slug: params?.slug,
  } as any);
  const post = await p.json();
  if (!post) {
    return { notFound: true };
  }
  return { props: { post }, revalslugate: 60 };
};

export default Post;
