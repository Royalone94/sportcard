import React from 'react';
import { Router } from '../routes'
import { connect } from 'react-redux'
import { actionTypes } from '../store'
import { SportscardAPI } from '../lib/sportscard-api'

// Logout doesn't have to be a page, but I made it this way to keep
// consistency in the header component links.
class Logout extends React.Component {
    componentDidMount() {
        new SportscardAPI(null, this.props.jwt).logout()
        this.props.reduxLogout()
        Router.pushRoute('/login')
        return {};
    }
    render() {
        return null;
    }
}

function mapStateToProps(state) {
    return { jwt: state.jwt }
}

function mapDispatchToProps(dispatch) {
    return { reduxLogout: () => {dispatch(actionTypes.LOGOUT)} }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout)
