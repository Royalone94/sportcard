# Sports Card Frontend

### Description
Frontend app for the Sports Card platform.

### Requirements
* NPM

### Getting started

#### Starting a local server
* `git clone <REPO>`
* `npm install`
* npm run dev

#### Frontend Development
This project is built using [React](https://reactjs.org/) / [Next.js](https://nextjs.org/) framework, styling is done using [styled-jsx](https://github.com/zeit/styled-jsx) (which comes baked into the Next.js framework.

#### Static assets
All static assets must be contained in the `/static/` folder. This folder is automatically routed by next.js. Assets can be sorted as required inside this folder and then be referenced in components as a root-relative path. eg. `/static/images/example.png`

#### Rendering
**Client side rendering** is handled by next.js and is automatically applied using 'page' names. eg - adding the component `pages/about.js` will automatically render that component at example.com/about

**Server side rendering** is handled by [Express](https://expressjs.com/) and is managed via the '/server.js' file. Basic pages will render automatically as with client side rendering, however dynamic url pages may need additional handling. See the routing section of the file.

#### Routing
Routing is handled by next.js/Express and managed via the `/server.js` file.

#### API/Data
API data is loaded with isomorphic-unfetch by [unfetch](https://github.com/developit/unfetch) using the `getInitialProps()` function