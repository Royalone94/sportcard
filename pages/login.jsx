import React from 'react';
import { connect } from 'react-redux';
// bootstrap
import {
  Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert,
} from 'reactstrap';
import { SportscardAPI } from '../lib/sportscard-api';
import { Router } from '../routes';
import {
  setSportsCardAPI, setProfile
} from '../store';
import Page from '../layouts/Main';
import Card from '../components/global/Card';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginErrorMsg: 'Please enter username and password',
      error: false,
    };
    this.Sportscard = new SportscardAPI();
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { state, props, Sportscard } = this;
    if (!state.username || !state.password) {
      this.setState({ error: true });
      if (!state.username && state.password) {
        this.setState({ loginErrorMsg: 'Please enter username' });
      } else if (state.username && !state.password) {
        this.setState({ loginErrorMsg: 'Please enter password' });
      }
      return;
    }
    const resp = await Sportscard.login(state.username, state.password);
    if (resp.token) {
      props.reduxLogin(Sportscard);
      const prof = await Sportscard.profile()
      props.reduxSetProfile(prof)
      Router.push('/');
    }
  }


  render() {
    const { state } = this;
    return (
      <Page>
        <Container>
          <Row>
            <Col md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
              <Card padding="medium" headerTitle="Login to Sports Card">
                <Form>
                  <FormGroup>
                    <Label for="Username">Username</Label>
                    <Input
                      type="text"
                      name="Username"
                      id="Username"
                      placeholder="Enter your username"
                      onChange={event => this.setState({ username: event.target.value })}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input
                      type="password"
                      name="Password"
                      id="Password"
                      placeholder="Enter your password"
                      onChange={event => this.setState({ password: event.target.value })}
                    />
                  </FormGroup>
                  <Alert color="danger" isOpen={state.error} toggle={this.onDismiss}>
                    {state.loginErrorMsg}
                  </Alert>
                  <Button
                    block
                    color="primary"
                    onClick={this.handleClick}
                  >
                    Submit
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </Page>
    );
  }
}

function mapDispatchToProps() {
  return {
    reduxLogin: (obj) => { setSportsCardAPI(obj); },
    reduxSetProfile: (prof) => { setProfile(prof); }
  };
}

export default connect(null, mapDispatchToProps)(Login);
