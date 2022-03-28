import Header from "../../components/Header";
import { Post } from "../../typings/interfaces";
import { GetStaticProps } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
interface Props {
  post: Post;
}

type FormShape = {
  id: string;
  name: string;
  email: string;
  comment: string;
};

const Post = ({ post }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormShape>();
  const onSubmit: SubmitHandler<FormShape> = async (data) => {
    console.log(data);
  };
  return (
    <main>
      <Header />
      <div className="min-w-2xl max-w-7xl mx-auto">
        <img
          className="w-full h-36 object-cover"
          src={post.img}
          alt="IMAGE GOES HERE"
        />
        <article className="max-w-3xl max-auto p-5">
          <div className="flex space-x-2 items-center ">
            <img
              className="w-10 h-10 rounded-full"
              src={post.img}
              alt="Author Image"
            />
            <p className="font-light text-sm">
              Created by:{" "}
              <span className="text-green-900 font-bold">
                {post.author_name}
              </span>{" "}
              | {new Date(post.created as any as string).toString()}
            </p>
          </div>
          <h1 className="text-2xl font-bold mt-10 mb-2">{post.title}</h1>
          <h2 className="text-base mt-2">{post.content}</h2>
          <div className="mt-10 my-5">
            <img
              className="h-1/2 w-full space-x-2 items-center"
              src={post.img}
              alt=""
            />
          </div>
        </article>
      </div>
      <hr className="max-w-lg max-auto my-5 border bg-yellow-900" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-5 m=10 mx-auto mx-w-2xl"
      >
        <h3 className="tetx-sm text-yellow-500">Did you enjoy the article?</h3>
        <h4 className="text-3xl bold mb-3">Leave a comment</h4>
        <hr className="bg-yellow-500 border-2 mb-2" />

        <input
          {...register("id", { required: true })}
          type="hidden"
          name="id"
          value={post.id}
        />

        <label className="block mb-5">
          <span className="text-gray-700 font-bold">Name:</span>
          <input
            {...register("name", { required: true })}
            className="shadow border rounded py-2 px-3 m-2 block w-full ring-yellow-500"
            type="text"
            placeholder=" Ahmed Abdelgawad"
          />
        </label>
        <label className="block mb-5">
          <span className="text-gray-700 font-bold">Email:</span>
          <input
            {...register("email", { required: true })}
            className="shadow border rounded py-2 px-3 m-2 block w-full  ring-yellow-500"
            type="text"
            placeholder=" your_name@gmail.com"
          />
        </label>
        <label className="block mb-5">
          <span className="text-gray-700 font-bold">Comment</span>
          <textarea
            {...register("comment", { required: true })}
            className="shadow border rounded block ring-yellow-200 py-2 px-3 m-2 w-full outline-none focus:ring"
            placeholder=" Write your comment here"
            rows={10}
          />
        </label>
        <div>
          {errors.name && (
            <span className="text-red-500"> - Name required.</span>
          )}
          <br />
          {errors.email && (
            <span className="text-red-500"> - Email required.</span>
          )}
          <br />
          {errors.comment && (
            <span className="text-red-500"> - Comment required.</span>
          )}
        </div>
        <br />
        <input
          className="text-xl bg-yellow-400 hover:bg-yellow-500 rounded py-2 px-4 text-white font-bold cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
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
