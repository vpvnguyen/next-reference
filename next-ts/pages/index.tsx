import { NextPage } from 'next';

// change to use strict / typescript
// const Home = ({ userAgent }) => <h1>Heyo, {userAgent}</h1>;
const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <h1>{userAgent}</h1>
);

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    console.log(req);

    return { userAgent };
};

export default Home;