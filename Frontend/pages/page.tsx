import { InferGetServerSidePropsType } from "next";
// const axios = require("axios").default;

const Page = ({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch(`http://127.0.0.1:8000/posts/`);
    const data = await res.json();
    if (!data) {
        return {
            notFound: true,
        };
    }
    return { props: { data } };
};

export default Page;
