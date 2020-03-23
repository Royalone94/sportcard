import ProfileImage from './ProfileImage'
import Fragment from 'react'
import { dateYear } from '../../lib/helpers'
import { colors } from '../../styles/variables'

const Achievements = (props) => (
  <section className="career-table">
    {props.data.map((c,i) => (
      <article className="career" key={i}>
        <div className="career-image">
          <ProfileImage
            classes="medium bg-grey-light"
            image={c.team_logo.image_small ? c.team_logo.image_small : c.sport.icon} />
        </div>
        <div className="career-details">
          <h3>
            <div>{ /* team name */ c.team_name ? c.team_name + ' (' + c.sport.name + ')' : c.sport.name }</div>
            {c.date_from ? <small>{dateYear(c.date_from)}</small> : null}{c.date_to ? <small>{' - ' + dateYear(c.date_to)}</small> : <small> - current</small>}
          </h3>
          { /* description */ c.description ? <div className="career-description"><p>{c.description}</p></div> : null }
          <span className="career-country">{c.location_country.name}</span>
        </div>
      </article>
    ))}
    {/* styles */}
    <style jsx>{`
      .career-table {
       margin: 1rem;
      }
      .career {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        margin-bottom: 1rem;
      }
      .career-image {
        border-right: solid 1px ${colors.greyLight};
        margin-right: 10px;
        width: 85px;
        min-width: 85px;
      }
      .career-details {
        position: relative;
        flex-grow: 1;
      }
      .career h3 {
        font-family: 'proxima-nova', sans-serif;
        font-style: italic;
        font-weight: 700;
        font-size: 1.25rem;
      }
      .career h3 small {
        font-family: 'open-sans', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 0.875rem;
      }
      .career-description p {
        font-family: 'open-sans', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 0.875rem;
      }
      .career-description p:last-of-type {
        margin-bottom: 0;
      }
      .career-country {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-family: 'open-sans', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 0.875rem;
      }
    `}</style>
  </section>
)

export default Achievements