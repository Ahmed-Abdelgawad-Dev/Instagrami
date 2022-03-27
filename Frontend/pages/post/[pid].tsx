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
      <img src="" alt="IMAGE GOES HERE" />
      <article>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
          maiores saepe. Sed, tempore numquam. Repellendus rerum commodi maxime
          et placeat, dolore reprehenderit. Optio totam nemo perferendis dicta
          necessitatibus dolores voluptas.
        </p>
      </article>
    </main>
  );
};

export const getStaticPaths = async () => {
  const query = await fetch("http://127.0.0.1:8000/posts");
  const posts = await query.json();

  const paths = posts.map((path: Post) => ({
    params: {
      id: path?.id,
      //   id: path.id,
      //   authorName: path.author_name,
      //   content: path.content,
      //   img: path.img,
      //   status: path.status,
      //   title: path.title,
      //   created: path.created,
      //   updated: path.updated,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = await fetch(`http://127.0.0.1:8000/posts/`, {
    // slug: params?.slug,
    id: params?.id,
  } as any);
  const post = await query.json();
  if (!post) {
    return { notFound: true };
  }
  return { props: { post }, revalidate: 60 };
};

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const query = await fetch(`http://127.0.0.1:8000/posts, {
//     slug: params?.slug,
//   } as any);
//   const post = await query.json();
//   if (!post) {
//     return { notFound: true };
//   }
//   return { props: { post }, revalidate: 60 };
// };

export default Post;
