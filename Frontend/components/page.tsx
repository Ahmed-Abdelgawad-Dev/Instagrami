import type { GetServerSideProps, NextPage } from "next";

const Page: NextPage = ({ data }) => {
    return (
        <div>{data}</div>
        // <div>
        //     {data.map((index, item) => (
        //         <ul>
        //             <li key={index}>{item}</li>
        //         </ul>
        //     ))}
        // </div>
    );
};

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://127.0.0.1:8000/posts/`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default Page;
