import App, { Container } from 'next/app'
import React, { Fragment } from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { SportscardAPI } from '../lib/sportscard-api';
import { actionTypes } from '../store'
import Nav from '../components/global/Nav'


class SportscardApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        // Add a sportscard context aware API object into redux
        const SC = new SportscardAPI(ctx)
        ctx.reduxStore.dispatch({
            type: actionTypes.SETAPI,
            obj: SC
        })
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Container>
                <Provider store={reduxStore}>
                    <React.Fragment>
                        <Nav />
                        <Component {...pageProps} />
                    </React.Fragment>
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(SportscardApp)
