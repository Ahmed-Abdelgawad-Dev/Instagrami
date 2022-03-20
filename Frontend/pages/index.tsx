import Head from "next/head";
import Header from "../components/Header";
import AfterHeader from "../components/AfterHeader";
import Layout from "../components/Layout";
import { Props } from "../typings/types";
import Link from "next/link";

const Home = ({ posts }: Props) => {
  return (
    <Layout>
      <div className="min-w-2xl max-w-7xl mx-auto">
        <Head>
          <title>Mediumize</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
          <AfterHeader />
          {/* Posts */}
          <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-col-3 gap-3 md:gap-6 p-2 md:p-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`${post.img as any as string}`}>
                <div className="group">
                  <img
                    className="h-60 w-full object-cover group-hover:scale-105"
                    src={post.img ?? post.img}
                    alt="Image Post"
                  />
                  <div className=" bg-yellow-50 flex justify-between p-6">
                    <div>
                      <p className="font-extrabold">{post.title}</p>
                      <p className="">
                        {post.content} by {post.author_name}
                      </p>
                    </div>
                    <img
                      className="h-12 w-12 rounded-full"
                      src={post.img ?? post.img}
                      alt="Post Image"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`http://127.0.0.1:8000/posts/`);
  const posts = await res.json();
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return { props: { posts } };
};

export default Home;
