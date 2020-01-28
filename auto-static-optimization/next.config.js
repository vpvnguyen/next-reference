module.exports = {
    target: 'serverless'
};

// In most cases you don't need a custom server, so try to add target: 'serverless' whenever possible
// getInitialProps is the main deciding factor for whether a page is static or not, don't add it if you don't need SSR
// Not all dynamic data has to have SSR, e.g if it's behind a login, or if you don't need SEO on it, for cases like that it can be better to do the fetching outside getInitialProps and get the benefits of static HTML