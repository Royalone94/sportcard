// Redux Store.
// Primary use at this stage is to store the authenticated state and a global (context aware)
// SportscardAPI object

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
    authed: false,
    jwt: '',
    SportsCardAPI: false,
    profile: null
}

export const actionTypes = {
    LOGOUT: 'LOGOUT',
    LOGIN: 'LOGIN',
    SETAPI: 'SETAPI',
    SETPROFILE: 'SETPROFILE'
}


export const loginAction = (jwt) => dispatch => {
    return dispatch({
        type: actionTypes.LOGIN,
        authed: true,
        jwt
    })
}

export const setSportsCardAPI = (obj) => dispatch => {
    return dispatch({
        type: actionTypes.SETAPI,
        obj
    })
}

export const setProfile = (prof) => dispatch => {
    return dispatch({
        type: actionTypes.SETPROFILE,
        prof
    })
}


// REDUCERS
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGOUT:
            return Object.assign({}, state, initialState)
        case actionTypes.LOGIN:
            return Object.assign({}, state, {
                authed: action.authed,
                jwt: action.jwt
            })
        case actionTypes.SETAPI:
            return Object.assign({}, state, {
                SportsCardAPI: action.obj,
                jwt: action.obj.authToken,
                authed: action.obj.authToken != undefined
            })
        case actionTypes.SETPROFILE:
            return Object.assign({}, state, {
                profile: action.profile,
            })
        default: return state
    }
}

// ACTIONS
export function initializeStore(initialState = initialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}