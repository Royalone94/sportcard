import { SportscardAPI } from '../../../lib/sportscard-api';
import { Row, Col, Button, Label, Input } from 'reactstrap';

export default class extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            date: '',
            achievement: ''
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleAchievementChange = this.handleAchievementChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
    
    handleDateChange(event) {
        this.setState({date: event.target.value});
    }
    handleAchievementChange(event) {
        this.setState({achievement: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Date: ' + this.state.date);
        alert('Achievement: ' + this.state.achievement);
        event.preventDefault();
    }

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<Row>
						<Col md="3">
                            <Label for="date">Date</Label>
							<Input type="date" name="date" value={this.state.date} onChange={this.handleDateChange} placeholder="Enter a date" />
						</Col>
						<Col md="7">
                            <Label for="achievement">Achievement</Label>
							<Input type="text" name="achievement" value={this.state.achievement} onChange={this.handleAchievementChange} placeholder="Enter an achievement" />
						</Col>
						<Col md="2">
                            <Label for="">&nbsp;</Label>
							<Button type="submit" block>Add</Button>
						</Col>
					</Row>
				</form>
			</div>
		);
	}
}
