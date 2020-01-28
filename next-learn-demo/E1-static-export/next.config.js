const fetch = require('isomorphic-unfetch')

module.exports = {
  exportTrailingSlash: true,

  // Next.js to export only declared pages
  // To render the shows in our app, we first fetch the list of shows, this is the same fetch we do in /.
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }

    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    const shows = data.map(entry => entry.show)

    // We then loop the shows and add a new path and query for every one of them.
    // The page /show/[id] will then use the query object to get the id and fetch more info about the show.
    shows.forEach(show => {
      paths[`/show/${show.id}`] = { page: '/show/[id]', query: { id: show.id } } // '/show/975': { page: '/show/[id]', query: { id: '975' } }
    })

    return paths;
  }
}
