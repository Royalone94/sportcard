import Card from '../../global/Card'
import Achievements from '../Achievements'
import EditProfile from '../edit/EditProfile'

const AchievementsTab = (props) => (
	<div className="profile-achievements">
		{/* edit */}
		{props.authed == true ? (
            <Card 
                headerTitle="Add a new achievement" 
                headerClass="white" 
                padding="medium">
				<EditProfile view="achievement" />
			</Card>
		) : null}

		{/* achievements */
		props.player.achievements && props.player.achievements.length ? (
			<Card headerTitle="Achievements">
				<Achievements data={props.player.achievements} />
			</Card>
		) : null}
	</div>
);

export default AchievementsTab;
