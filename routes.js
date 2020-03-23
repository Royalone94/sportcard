// Defines routes extra to those handled by the next.js
// file structure (pages/<page>.js)

const routes = require('next-routes')


module.exports = routes()
    // Name   Page      Pattern
    .add('player-details', pattern='/player/:slug', page='player')
    .add('player-edit', pattern='/:me(me)/', page='player')
    .add('player-tab', pattern='/player/:slug/:tab', page='player')
    .add('search', pattern='search/:q', page='search')
