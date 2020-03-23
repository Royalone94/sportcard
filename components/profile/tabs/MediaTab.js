import Card from '../../global/Card'
import MediaGallery from '../../global/MediaGallery'

const MediaTab = (props) => (
    <div className="profile-media">

      {/* Media */
      props.has_media && (props.media != false) ?
      <Card
        padding="medium"
        headerTitle='Media'>
        <MediaGallery media={props.media.results} />
      </Card>
      : null }

    </div>
)

export default MediaTab