import Card from '../../global/Card'
import Statblock from '../StatBlock'

const GameStats = (props) => (
    <div className="profile-gamestats">

      {/* stats */
      props.player.statistics && props.player.statistics.length ?
        <Card
          padding='medium'
          headerTitle='Game stats'>
          {/* <Statblock stats={props.player.statistics} /> */}
          <Statblock stats={props.player.statistics} />
        </Card>
      : null }

    </div>
)

export default GameStats