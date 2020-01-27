// Having brackets ([]) in the page name makes it a dynamic route.
// [id].js = good
// post-[id].js = bad

// When creating the dynamic route we added id between the brackets ([]). 
// This is the name of the query param received by the page, so for /p/hello-nextjs the query object will have { id: 'hello-nextjs'}, and we can access it with useRouter().

import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';

export default function Post() {
    const router = useRouter();
    console.log(router.query); // {id: "hello-nextjs"}
    console.log(router.query.id); // hello-nextjs
    return (
        <Layout >
            <h1>{router.query.id}</h1>
            <p>This is the blog post content.</p>
        </Layout>
    );
};
