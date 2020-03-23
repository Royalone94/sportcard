import Card from '../../global/Card'
import Career from '../Career'

const CareerTab = (props) => (
    <div className="profile-career">

      {/* career */
      props.has_career && (props.career != false) ?
      <Card
        headerTitle='Career'>
        <Career data={props.career.results} />
      </Card>
      : null }

    </div>
)

export default CareerTab