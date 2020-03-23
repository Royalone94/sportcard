import Card from '../components/global/Card'
import Page from '../layouts/Main'
import Link from 'next/link'
import { SportscardAPI } from '../lib/sportscard-api'
import { Container, Row, Col, Table, Button } from 'reactstrap'

const PlayerList = (props) => (
  <Page>
    <Container>
      <Row>
        <Col sm="12">

          <Card padding="medium" headerTitle="Players">

            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>User</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.players.count > 0 ?
                  props.players.results.map((player, i) => (
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>{player.name}</td>
                    <td>{player.slug}</td>
                    <td>{player.user}</td>
                    <td>
                      <Link as={`/player/${player.slug}`} href={`/player?slug=${player.slug}`}>
                        <Button outline color="primary" block>
                          view profile
                        </Button>
                      </Link>
                    </td>
                  </tr>
                  ))
                : null}
              </tbody>
            </Table>

          </Card>

        </Col>
      </Row>
    </Container>
  </Page>
)

PlayerList.getInitialProps = async function(ctx) {
  const players = await new SportscardAPI(ctx).players()
  return {
    players
  }
}

export default PlayerList
