import React from 'react';
import Router from 'next/router'
import { SportscardAPI } from '../lib/sportscard-api'
import Page from '../layouts/Main'
import Card from '../components/global/Card'
import { getCookie } from '../lib/cookie'


// bootstrap
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormFeedback, Alert } from 'reactstrap';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log(props)
        this.Sportscard = new SportscardAPI(null, props.authToken)
    }

    static async getInitialProps(context) {
        const Sportscard = new SportscardAPI(context);
        const formOptions = await Sportscard.registerOptions()
        const sportOptions = await Sportscard.sports()
        const authToken = getCookie(Sportscard.jwtCookieName, context)
        return { formOptions, sportOptions, authToken }
    }

    async handleClick() {
        // TODO: Handle post via Sportscard.register
        console.log('handleClick')
    }

    render() {
        return (
            <Page>
                <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                            <Card padding="medium" headerTitle="Sign up to create your SportsCard">
                                <Form>
                                    <FormGroup>
                                        <Label for="profile_type">I am a</Label>
                                        <Input type="select" name="profile_type" id="profile_type" placeholder="Select your profile type" >
                                            {this.props.formOptions.actions.POST.profile_type.choices.map(((e, key) => {
                                                return <option key={key} value={e.value}>{e.display_name}</option>
                                            }))}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="Name">Name</Label>
                                        <Input
                                            type="text"
                                            name="Name"
                                            id="Name"
                                            placeholder="Your Name"
                                            onChange={(event) => this.setState({ name: event.target.value })} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="sport">My primary sport is:</Label>
                                        <Input type="select" name="sport" id="sport" placeholder="Select your primary sport" >
                                            {this.props.sportOptions.results.map(((e, key) => {
                                                return <option key={key} value={e.slug}>{e.name}</option>
                                            }))}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="Username">Username</Label>
                                        <Input
                                            type="text"
                                            name="Username"
                                            id="Username"
                                            placeholder="Enter your username"
                                            onChange={(event) => this.setState({ username: event.target.value })} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="Password">Password</Label>
                                        <Input
                                            type="password"
                                            name="password1"
                                            id="password1"
                                            placeholder="Enter your password"
                                            onChange={(event) => this.setState({ password1: event.target.value })} />
                                        <Label for="Password">Confirm Password</Label>
                                        <Input
                                            type="password"
                                            name="password2"
                                            id="password2"
                                            placeholder="Enter your password"
                                            onChange={(event) => this.setState({ password2: event.target.value })} />
                                    </FormGroup>
                                    <Button
                                        block
                                        color="primary"
                                        onClick={this.handleClick}>Join Now</Button>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Page>
        )
    }

}
