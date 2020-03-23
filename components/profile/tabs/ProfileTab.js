import Card from '../../global/Card'
import Statblock from '../StatBlock'
import Achievements from '../Achievements'
import Career from '../Career'
import MediaGallery from '../../global/MediaGallery'
import { newlineBr } from '../../../lib/helpers.js'

const Profile = (props) => (
    <div className="profile-sportscard">

      {/* description */
        props.player.description || props.player.video_url ?
        <Card classes="readmore" video={props.player.video_url} padding='medium'>
          {/* {props.player.description ? newlineBr(props.player.description) : null} */}
          {props.player.description ? newlineBr(props.player.description) : null}
        </Card>
      : null}

      {/* stats */
      props.player.statistics && props.player.statistics.length ?
        <Card
          padding='medium'
          headerTitle='Game stats'
          linkName="View all"
          linkTo={"/player/" + props.player.slug + "/game-stats"}>
          <Statblock stats={props.player.statistics} />
        </Card>
      : null }

      {/* achievements */
      props.player.achievements && props.player.achievements.length ?
        <Card
          headerTitle='Acheivements'
          linkName="View all"
          linkTo={"/player/" + props.player.slug + "/achievements"}
          authed={props.authed}>
          <Achievements data={props.player.achievements} />
        </Card>
      : null }

      {/* career */
      props.player.has_career && (props.career != false) ?
      <Card
        headerTitle='Career'
        linkName="View all"
        linkTo={"/player/" + props.player.slug + "/career"}>
        <Career data={props.career.results} />
      </Card>
      : null }

      {/* ahtletic profile */
      props.player.attributes && props.player.attributes.length ?
      <Card
        padding='medium'
        headerTitle='Athletic profile'
        linkName="View all"
        linkTo={"/player/" + props.player.slug + "/athletic-profile"}>
        <Statblock stats={props.player.attributes} />
      </Card>
      : null }

      {/* Media */
      props.player.has_media && (props.media != false) ?
      <Card
        padding="medium"
        headerTitle='Media'
        linkName="View all"
        linkTo={"/player/" + props.player.slug + "/media"}>
        <MediaGallery media={props.media.results} />
      </Card>
      : null }

    </div>
)

export default Profile