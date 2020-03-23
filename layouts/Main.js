import Nav from '../components/global/Nav'
import Meta from '../components/global/Meta'

export default ({ children }) => (
  <div id="div_parent">
    <Meta />
    <section id="main" role="main">
    { children }
    </section>
    <style jsx>{`
    #div_parent {
      position:absolute,
    },
    #main {
      height: 100%;
      left: 0;
      right: 0;
    }
    `}</style>
  </div>
)