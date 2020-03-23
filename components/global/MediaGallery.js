import {Row, Col} from 'reactstrap'
import Video from 'react-player'

const MediaGallery = (props) => (
  <div className="media-gallery">
    <Row>
    {props.media.map((media,i) => (
      <Col md="6" key={i}>
        <div className="media-gallery-item">
        {media.media_type == "video_embed" ?
          <Video url={media.video_url} width="100%" height="190px" />
        :
        media.media_type == "image" ?
          <img src={media.image.thumbnail} alt={media.description} />
        : null }
        </div>
      </Col>
    ))}
    </Row>
    {/* styles */}
    <style jsx>{`
      .media-gallery {
        margin-bottom: -2rem;
      }
      .media-gallery-item {
        width: 100%;
        height: 190px;
        overflow: hidden;
        margin-bottom: 2rem;
      }
      .media-gallery-item img {
        max-width: 100%;
      }
    `}</style>
  </div>
)

export default MediaGallery