import { colors } from '../../styles/variables'
import { Container } from 'reactstrap';
import ProfileImage from './ProfileImage';

const ProfileHeader = (props) => (
  <section className="profile-header">
    <div className="profile-header-details">
      <Container>
        <div className="profile-header-details-inner">
          { props.profileName || props.profileTagline ?
            <div className="profile-header-name">
              <h1>
                {props.profileName}
                {props.verified ?
                  <img className="verified" src="/static/icons/icon-trophy.svg" alt="Verified"/>
                : null}
              </h1>
              <p>{props.profileTagline}</p>
            </div>
          : null }
          { props.organisation ?
            <div className="profile-header-organisation">
              <ProfileImage 
              classes="medium shadow bg-white" 
              image={props.organisation.organisation.logo}
              tooltip={props.organisation.organisation.name}
              link={props.organisation.organisation.slug} />
            </div>
          : null }
        </div>
      </Container>
    </div>
    {/* styles */}
      <style jsx>{`
        .profile-header {
          margin-top: -2rem;
          height: 200px;
          background: ${ colors.greyMedium };
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url('${props.backgroundImage}');
          position: relative;
        }
        @media screen and (min-width: 640px) {
          .profile-header {
            height: 300px;
          }
        }
        @media screen and (min-width: 1024px) {
          .profile-header {
            height: 400px;
          }
        }
        .profile-header-details {
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1rem 0;
        }
        .profile-header-details-inner {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-left: 11rem;
        }
        h1 {
          color: ${colors.white};
          font-family: 'proxima-nova', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: 3rem;
          text-shadow: 4px 4px 8px rgba(0,0,0,0.5);
          margin-bottom: 0;
        }
        .verified {
          display: inline-block;
          margin-left: 0.75rem;
        }
        p {
          margin-bottom: 0;
          color: ${colors.white};
          text-shadow: 4px 4px 8px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
)

export default ProfileHeader