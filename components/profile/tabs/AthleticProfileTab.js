import Card from '../../global/Card'
import Statblock from '../StatBlock'

const AthleticProfileTab = (props) => (
    <div className="profile-athletic-profile">

      {/* athletic profile */
      props.player.attributes && props.player.attributes.length ?
      <Card
        padding='medium'
        headerTitle='Athletic profile'>
        <Statblock stats={props.player.attributes} />
      </Card>
      : null }

    </div>
)

export default AthleticProfileTab