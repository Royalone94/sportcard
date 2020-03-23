import { colors, mediaQueries } from '../../styles/variables'
import SubNav from '../global/SubNav'
import ProfileImage from '../profile/ProfileImage'
import { Link } from '../../routes'
import { Button } from 'reactstrap'

const PlayerNav = (props) => (
    <SubNav>
      <div className="left">
        { props.profileImage ?
        <ProfileImage
          classes="xlarge shadow anchor-bottom"
          image={props.profileImage} />
        : null }
      </div>
      <div className="right">
        <div className="links">
          <Link route='player-details' params={{ slug: props.slug}} scroll={false} prefetch>
            <a className={!props.tab ? "selected" : props.tab}>SportsCard</a>
          </Link>
          <Link route='player-tab' params={{ slug: props.slug, tab: 'game-stats'}} scroll={false} prefetch>
            <a className={props.tab == "game-stats" ? "selected" : null}>Game Stats</a>
          </Link>
          <Link route='player-tab' params={{ slug: props.slug, tab: 'achievements' }} scroll={false} prefetch>
            <a className={props.tab == "achievements" ? "selected" : null}>Achievements</a>
          </Link>
          <Link route='player-tab' params={{ slug: props.slug, tab: 'career' }} scroll={false} prefetch>
            <a className={props.tab == "career" ? "selected" : null}>Career</a>
          </Link>
          <Link route='player-tab' params={{ slug: props.slug, tab: 'athletic-profile'}} scroll={false} prefetch>
            <a className={props.tab == "athletic-profile" ? "selected" : null}>Athletic Profile</a>
          </Link>
          <Link route='player-tab' params={{ slug: props.slug, tab: 'media'}} scroll={false} prefetch>
            <a className={props.tab == "media" ? "selected" : null}>Media</a>
          </Link>
        </div>
        <div className="fans">
          {props.fans} fan{props.fans > 1 ? "s" : null}
          <Button color="primary" size="sm">Follow</Button>
        </div>
      </div>
      {/* styles */}
      <style jsx>{`
        a {
          color: ${ colors.black };
          font-family: 'proxima-nova', sans-serif;
          font-weight: 700;
          font-style: italic;
          text-decoration: none;
          padding: 0.375rem 0.75rem;
          border-radius: 3px;
          margin-left: 2px;
        }
        a:hover, a:focus {
          text-decoration: none;
          background-color: ${ colors.greyLight };
        }
        a.selected {
          color: ${ colors.white };
          background-color: ${ colors.green };
          box-shadow: 0 2px 4px rgba(34,34,34,0.4);
        }
        .right {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-grow: 1;
          padding-left: 1rem;
        }
        .fans {
          margin-left: 2rem;
        }
        @media ${mediaQueries.mediumDown} {
          .left {
            width: 60px;
          }
          .links {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </SubNav>
)

export default PlayerNav