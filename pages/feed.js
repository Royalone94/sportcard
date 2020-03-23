import Page from '../layouts/Main'
import { SportscardAPI } from '../lib/sportscard-api'
import { Container, Row, Col } from 'reactstrap'
import Post from '../components/feed/Post'

const Feed = (props) => (
  <Page>
    <Container>
      <Row>
        <Col md={{size: 10, offset: 1}} lg={{size: 8, offset: 2}}>
          <h1>Feed page</h1>
          {props.authed == true && props.feedData.length ?
            props.feedData.map((a,i) => (
              <Post postData={a.post} />
            ))
          : <p>There is no feed here</p> }
        </Col>
      </Row>
    </Container>
  </Page>
)

Feed.getInitialProps = async function(ctx) {
  const feedData = await new SportscardAPI(ctx).feed()
  console.log(feedData)
  return { feedData }
}

export default Feed
