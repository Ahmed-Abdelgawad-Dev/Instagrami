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

export default Post;

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/posts");
  const res2 = await res.json();
  const posts = JSON.parse(res2);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slug = `0`;
  const query = `http://127.0.0.1:8000/posts/${slug}`;
  const post = await fetch(query, {
    slug: params?.slug,
  } as any);

  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
};
