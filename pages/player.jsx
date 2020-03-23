import {
  Container, Row, Col, Button,
} from 'reactstrap';
import { Timeline } from 'react-twitter-widgets';
import { connect } from 'react-redux';
import Page from '../layouts/Main';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileNav from '../components/profile/ProfileNav';
import ProfileImage from '../components/profile/ProfileImage';
import Card from '../components/global/Card';
import SocialList from '../components/profile/SocialList';
import ProfileTab from '../components/profile/tabs/ProfileTab';
import GameStatsTab from '../components/profile/tabs/GameStatsTab';
import AchievementsTab from '../components/profile/tabs/AchievementsTab';
import CareerTab from '../components/profile/tabs/CareerTab';
import AthleticProfileTab from '../components/profile/tabs/AthleticProfileTab';
import MediaTab from '../components/profile/tabs/MediaTab';
import ShareCard from '../components/global/ShareCard';
import { colors } from '../styles/variables';
import { sentenceCase, getAge } from '../lib/helpers';

const Player = ({
  authed, player, career, media, tab, slug, me
}) => (

  <Page>
    <ProfileHeader
      backgroundImage={
        player.cover_image.cover_image_large !== undefined ? (
          player.cover_image.cover_image_large
        ) : (
          player.sports[0].sport.default_cover_image.cover_image_large
        )
      }
      profileName={player.name}
      verified={player.verified}
      profileTagline={player.tagline}
      organisation={player.organisation_player ? player.organisation_player[0] : null}
    />
    <ProfileNav
      profileImage={player.profile_image ? player.profile_image.profile_image_large : null}
      slug={slug}
      tab={tab}
      fans={player.fans}
    />
    <Container>
      <Row>
        {/* main */}
        <Col md="7" lg="8">
          {/* render correct page tab */
            tab === 'game-stats' ? (
              <GameStatsTab player={player} authed={authed} />
            ) : tab === 'achievements' ? (
              <AchievementsTab player={player} authed={authed} />
            ) : tab === 'career' ? (
              <CareerTab has_career={player.has_career} career={career} authed={authed} />
            ) : tab === 'athletic-profile' ? (
              <AthleticProfileTab player={player} authed={authed} />
            ) : tab === 'media' ? (
              <MediaTab has_media={player.has_media} media={media} authed={authed} />
            ) : (
            /* else */
              <ProfileTab
                player={player}
                career={career}
                media={media}
                authed={authed}
              />
            )}
        </Col>

        {/* sidebar */}
        <Col md="5" lg="4">
          {/* more about */}
          <Card>
            <div className="more-header">
              <ProfileImage
                classes="medium"
                image={
                  player.profile_image ? player.profile_image.profile_image_small : null
                }
              />
              <h3 className="more-header-title">
                <span>More about</span>
                {player.name}
              </h3>
            </div>
            <table className="table more-table">
              <tbody>
                {// nickname
                  player.nickname ? (
                    <tr>
                      <td>
                        <strong>Nickname</strong>
                      </td>
                      <td>{player.nickname}</td>
                    </tr>
                  ) : null}
                {// country
                  player.location_country ? (
                    <tr>
                      <td>
                        <strong>Country</strong>
                      </td>
                      <td>{player.location_country.name}</td>
                    </tr>
                  ) : null}
                {// age
                  player.date_of_birth ? (
                    <tr>
                      <td>
                        <strong>Age</strong>
                      </td>
                      <td>{getAge(player.date_of_birth)}</td>
                    </tr>
                  ) : null}
                {// gender
                  player.gender ? (
                    <tr>
                      <td>
                        <strong>Gender</strong>
                      </td>
                      <td>{sentenceCase(player.gender)}</td>
                    </tr>
                  ) : null}
                {// height/weight attributes
                  player.attributes && player.attributes.length ? (
                    player.attributes.map(
                      (a, i) =>
                        a.attribute.name == 'Height' || a.attribute.name == 'Weight' ? (
                          <tr key={i}>
                            <td>
                              <strong>{a.attribute.name}</strong>
                            </td>
                            <td>
                              {a.value} {a.attribute.metric_name}
                            </td>
                          </tr>
                        ) : null
                    )
                  ) : null}
                {// sports
                  player.sports && player.sports.length ? (
                    <tr>
                      <td>
                        <strong>Sport{player.sports.length > 1 ? 's' : null}</strong>
                      </td>
                      <td>
                        {player.sports.map(
                          (sport, i) =>
                            player.sports.length > i + 1
                              ? sport.sport.name + ', '
                              : sport.sport.name
                        )}
                      </td>
                    </tr>
                  ) : null}
                {// teams
                  player.organisation_player && player.organisation_player.length ? (
                    <tr>
                      <td>
                        <strong>
                          Team{player.organisation_player.length > 1 ? 's' : null}
                        </strong>
                      </td>
                      <td>
                        {player.organisation_player.map(
                          (o, i) =>
                            player.organisation_player.length > i + 1
                              ? o.organisation.name + ', '
                              : o.organisation.name
                        )}
                      </td>
                    </tr>
                  ) : null}
                {// positions
                  player.positions && player.positions.length ? (
                    <tr>
                      <td>
                        <strong>Position{player.positions.length > 1 ? 's' : null}</strong>
                      </td>
                      <td>
                        {player.positions.map(
                          (p, i) =>
                            player.positions.length > i + 1
                              ? p.position + ', '
                              : p.position
                        )}
                      </td>
                    </tr>
                  ) : null}
              </tbody>
            </table>
            <Button block color="primary">
              Contact player
						</Button>
          </Card>

          {/* social media */
            player.facebook_url ||
              player.twitter_handle ||
              player.instagram_handle ||
              player.youtube_channel_url ? (
                <SocialList
                  website={player.external_website_url ? player.external_website_url : null}
                  facebook={player.facebook_url ? player.facebook_url : null}
                  twitter={player.twitter_handle ? player.twitter_handle : null}
                  instagram={player.instagram_handle ? player.instagram_handle : null}
                  youtube={player.youtube_channel_url ? player.youtube_channel_url : null}
                />
              ) : null}

          {/* twitter feed */
            player.twitter_handle ? (
              <Card>
                <Timeline
                  dataSource={{
                    sourceType: 'profile',
                    screenName: player.twitter_handle
                  }}
                  options={{
                    username: player.twitter_handle,
                    height: '400',
                    chrome: 'nofooter'
                  }}
                />
              </Card>
            ) : null}

          {/* social sharing */}
          <ShareCard />
        </Col>
      </Row>
    </Container>

    {/* style */}
    <style jsx>
      {`
        .more-header {
          padding: 1rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        h3.more-header-title {
          font-family: 'proxima-nova', sans-serif;
          font-weight: 700;
          font-style: italic;
          color: ${colors.green};
          margin: 0;
          font-size: 1.5rem;
          margin-left: 0.75rem;
        }
        h3.more-header-title span {
          font-family: 'open-sans', sans-serif;
          font-weight: 300;
          font-style: normal;
          color: ${colors.black};
          margin: 0;
          font-size: 1rem;
          display: block;
        }
        table.table.more-table {
          margin-bottom: 0;
        }
        table.table.more-table th,
        table.table.more-table td {
          padding: 0.375rem 1rem;
        }
      `}
    </style>
  </Page>
);

Player.getInitialProps = async function ({ reduxStore, query: {me, slug, tab} }) {
  let player = null;
  let playerSlug = slug;
  let SportsCardAPI = reduxStore.getState().SportsCardAPI
  if (me === 'me') {
    player = await SportsCardAPI.me();
    slug = player.slug;
  } else {
    player = await SportsCardAPI.player(slug);
  }

  // 404 handling if player not found
  if (!player || player.error) {
    const err = new Error();
    err.code = 'ENOENT'; // ENOENT is 404 - No such file or directory
    throw err;
  }

  let career = false;
  if (player.has_career === true) {
    career = await SportsCardAPI.playerCareer(slug);
  }

  let media = false;
  if (player.has_media === true) {
    media = await SportsCardAPI.playerMedia(slug);
  }

  // return
  return {
    player, career, media, tab, slug: playerSlug, me,
  };
}


export default connect()(Player);
