import Layout from '../components/MyLayout.js';
import Link from 'next/link';

const PostLink = props => (
  <li>
    {/* BEFORE CLEAN ROUTE */}
    {/* <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link> */}

    {/* AFTER CLEAN ROUTE */}
    {/* In the <Link> element, the href prop is now the path of the page in the pages folder and as is the URL to show in URL bar of the browser. */}
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {/* <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" /> */}

        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  );
}