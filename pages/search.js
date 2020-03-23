import Page from '../layouts/Main'
import Card from '../components/global/Card'
import Link from 'next/link'
import { SportscardAPI } from '../lib/sportscard-api'
import { Container, Row, Col } from 'reactstrap'
import { colors } from '../styles/variables';

const Search = (props) => (
  <Page>
    <Container>
      <Row>
        <Col sm="12">
          <Card padding="medium">
            <h1>Search</h1>
            <hr />
            <h3>Players</h3> 
            <ol>
            { props.results.player ?
              props.results.player.map((player,i) => (
                <li key={i}><Link href={'/player/' + player.slug}><a>{player.name}</a></Link></li>
              ))
            : /* else */
              <p>There are no player results matching your search.</p>
            }
            </ol>
          </Card>
        </Col>
      </Row>
    </Container>
    {/* styles */}
    <style jsx>{`
      a {
        color: ${colors.green} !important;
      }
      `}</style>
  </Page>
)

Search.getInitialProps = async function(context) {
  const q = context.query.q
  const results = await new SportscardAPI(context).search(q)
  return {
    results
  }
}

export default Search
