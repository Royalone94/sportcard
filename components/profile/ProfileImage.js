import Link from 'next/link'
import { UncontrolledTooltip } from 'reactstrap'
import { colors } from '../../styles/variables'

const ProfileImage = (props) => (
  <div className={"profile-image " + props.classes}>
   {console.log(props)}
    <div className="profile-image-inner">
      { props.image ?
        props.link ?
          <Link href={props.link}>
            <img id="orgImage" src={props.image} />
          </Link>
        :
          <img id="orgImage" src={props.image} />
      : null}
      { props.tooltip ?
        <UncontrolledTooltip placement="top" target="orgImage" autohide={false}>
          {props.tooltip}
        </UncontrolledTooltip>
      : null }
    </div>
    {/* styles */}
    <style jsx>{`
      .profile-image {
        border-radius: 50%;
        overflow: hidden;
        position: relative;
      }
      .profile-image:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
      .profile-image-inner {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 100%;
      }
      .profile-image.xlarge {
        width: 160px;
      }
      .profile-image.large {
        width: 120px;
      }
      .profile-image.medium {
        width: 70px;
      }
      .profile-image.small {
        width: 45px;
      }
      .profile-image.bg-white {
        background-color: ${colors.white};
      }
      .profile-image.bg-grey-light {
        background-color: ${colors.greyLight};
      }
      .anchor-bottom {
        align-self: flex-end;
      }
    `}</style>
  </div>
)

export default ProfileImage