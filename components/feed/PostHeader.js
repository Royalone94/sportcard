import TimeAgo from 'react-timeago'
import ProfileImage from '../profile/ProfileImage'
import { colors } from '../../styles/variables.js'

const PostHeader = (props) => (
  <div className="post-header">
    <div className="header-left">
      {props.postData.profile.profile_image ?
        <ProfileImage
          className="image"
          classes="small"
          image={props.postData.profile.profile_image.profile_image_small} />
        : null
      }
      <h3 className="name">{props.postData.profile.name}<span>{props.postData.profile.tagline}</span></h3>
    </div>
    <div className="header-right">
      <span className="time"><TimeAgo date={props.postData.created_at} /></span>
      <span className="location">Sydney, Australia (todo)</span>
    </div>
    {/* styles */}
    <style jsx>{`
      .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: solid 1px ${colors.greyLight};
      }
      .header-left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      .header-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
      }
      .image {
        margin-right: 0.75rem;
      }
      h3.name {
        font-family: 'proxima-nova', sans-serif;
        font-weight: 700;
        font-style: italic;
        color: ${colors.black};
        margin: 0;
        font-size: 1.25rem;
        margin-left: 0.75rem;
      }
      h3.name span,
      .time,
      .location {
        font-family: 'open-sans', sans-serif;
        font-weight: 300;
        font-style: normal;
        margin: 0;
        font-size: 0.875rem;
        display: block;
      }
      .location {
        font-style: italic;
      }
    `}</style>
  </div>
)

export default PostHeader
