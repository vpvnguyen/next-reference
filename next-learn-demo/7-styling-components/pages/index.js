import Layout from '../components/MyLayout'
import Link from 'next/link'

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ]
};

// CSS rules have no effect on elements inside of a child component; like the one below
const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>

    {/* this styling is encapsulated in this component */}
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>

        {/* abstracting getPosts to PostLink component above; this will show the scope of styling. expected that we no longer have styling for the elements inside PostLink */}

        {/* {getPosts().map(post => (
          <li key={post.id}>
            <Link href="/p/[id]" as={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))} */}


        {/* INTO THIS */}

        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>

      {/* note that styling is wrapped in in a template string */}
      {/* Styles should go inside template strings. Styled jsx works as a babel plugin. It will parse all of the CSS and apply it in the build process. (With that our styles get applied without any overhead time) */}
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
}
