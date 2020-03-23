// Connection helpers for the Sportscard API Backend
import 'isomorphic-unfetch'

import { setCookie, getCookie, removeCookie } from './cookie'

const API_ENVIRONMENTS = {
    'production': 'https://sportscard-api.techequipt.com.au',
    'default': 'https://sportscard-api.techequipt.com.au',
    // 'default': 'http://localhost:8000',
}

const API_BASE = API_ENVIRONMENTS[process.env.NODE_ENV] != undefined ? API_ENVIRONMENTS[process.env.NODE_ENV] : API_ENVIRONMENTS['default'];


export class SportscardAPI {

    constructor(ctx, token, api_base) {
        this.jwtCookieName = 'jwt'
        this.API_BASE = api_base != undefined ? api_base : API_BASE;
        this.default_headers = {
            // Set default headers for JSON APIs
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        if (ctx || token) {
            this.authToken = token != undefined ? token : getCookie(this.jwtCookieName, ctx);
        }
    }

    _get_endpoint(endpoint) {
        // Adds the base API to the endpoint
        return this.API_BASE + endpoint;
    }

    _get_headers(headers) {
        // Combine the default + auth token headers
        headers = {...headers, ...this.default_headers};

        if (this.authToken){
            headers['Authorization'] = 'JWT ' + this.authToken;
        }
        return headers
    }

    _objToQueryString(obj) {
        // Used by the _get method, turns the data dict into querystring
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    async _post(endpoint, data, headers = {}) {
        // POST the supplied data to the given endpoint
        const res = await fetch(this._get_endpoint(endpoint), {
            method: "post",
            body: JSON.stringify(data),
            headers: this._get_headers(headers),
        })
        if (res.ok === true) {
            const ret = await res.json();
            return ret
        }
        return { 'error': res.status }
    }

    async _get(endpoint, data, headers = {}) {
        const res = await fetch(this._get_endpoint(endpoint) + '?' + this._objToQueryString(data), {
            headers: this._get_headers(headers),
        })
        if (res.ok === true) {
            const ret = await res.json();
            return ret
        }
        return { 'error': res.status }
    }

    async _patch(endpoint, data, headers = {}) {
        const res = await fetch(this._get_endpoint(endpoint), {
            method: "patch",
            body: JSON.stringify(data),
            headers: this._get_headers(headers),
        })
        if (res.ok === true) {
            const ret = await res.json();
            return ret
        }
        return { 'error': res.status }
    }

    async _options(endpoint, headers = {}) {
        const res = await fetch(this._get_endpoint(endpoint), {
            method: "options",
            headers: this._get_headers(headers),
        })
        if (res.ok === true) {
            const ret = await res.json();
            return ret
        }
        return { 'error': res.status }
    }

    // Data Return Methods

    async loggedIn() {
        return this.authToken != undefined
    }

    async authorized() {
        // Checks if the supplied token  is valid and pushes the expiry if true
        if (!this.authToken) {
            return false
        }
        const endpoint = '/rest-auth/token-verify/'
        const res = await this._post(endpoint, { 'token': this.authToken })
        if (res.token != undefined) {
            setCookie(this.jwtCookieName, res.token, { expires: new Date().setFullYear(new Date().getFullYear() + 1) });
            this.authToken = res.token
            return true
        }
        return false
    }

    async login(user, pass) {
        // Authenticates a user with the REST API and returns the response
        // A successful login will have the response key "key" which is the JWT
        const endpoint = '/rest-auth/login/';
        const res = await this._post(endpoint, {'username': user, 'password': pass})
        if (res.token) {
            setCookie(this.jwtCookieName, res.token, { expires: new Date().setFullYear(new Date().getFullYear() + 1)});
            this.authToken = res.token
        }
        return res
    }

    async logout() {
        // Logout the current active user
        const endpoint = '/rest-auth/logout/'
        const res = await this._post(endpoint)
        removeCookie(this.jwtCookieName)
        return res
    }

    async profile() {
        // get's user profile of the current user
        const endpoint = '/profile/'
        const res = await this._get(endpoint)
        return res
    }

    async homepage() {
        // Gets the page "Home" from the CMS API
        const endpoint = '/content/pages/4/'
        const res = await this._get(endpoint)
        return res
    }

    async search(q) {
        // Search Players, Coaches and Organisations
        const endpoint = '/search/'
        let data = {}
        if (q) {
            data['q'] = q
        }
        const res = await this._get(endpoint, data)
        return res
    }

    async me() {
        // Get my profile
        const endpoint = '/players/me/'
        const res = await this._get(endpoint)
        return res
    }

    async player(slug) {
        // Get details of a given player by slug
        const endpoint = '/players/' + slug
        const res = await this._get(endpoint)
        return res
    }

    async playerCareer(slug) {
        // Given a player slug, retrieve their career items
        const endpoint = '/players/' + slug + '/career/'
        const res = await this._get(endpoint)
        return res
    }

    async playerMedia(slug) {
        // Given a player slug, retrieve their media items
        const endpoint = '/players/' + slug + '/media/'
        const res = await this._get(endpoint)
        return res
    }

    async players(q) {
        // Given search term q - search these players
        const endpoint = '/players/'
        let data = {}
        if (q){
            data['q'] = q
        }
        const res = await this._get(endpoint, data)
        return res
    }

    async sports(q) {
        // Given search term q - query sports
        const endpoint = '/sports/'
        let data = {}
        if (q) {
            data['q'] = q
        }
        const res = await this._get(endpoint, data)
        return res
    }

    async sport(slug, params) {
        // Given a sport slug - this will pull it's detailed data
        const endpoint = '/sports/' + slug + '/'
        const res = await this._get(endpoint, params)
        return res
    }

    async registerOptions() {
        // Gets the options on the registration form. Used to provide enum field options for select boxes
        const endpoint = '/rest-auth/registration/'
        const res = await this._options(endpoint)
        return res
    }

    async register(formData) {
        // Register the user
        const endpoint = '/rest-auth/registration/'
        const res = await this._post(endpoint, formData)
        return rest
    }

    async follow(targetUserId) {
        const endpoint = '/following/'
        const data = {'target': targetUserId}
        const res = await this._post(endpoint, data)
    }

    async feed() {
        const endpoint = '/feed/'
        const res = await this._get(endpoint)
        return res
    }

    async cheer(postId) {
        const endpoint = '/cheer/'
        data = { 'post': postId }
        const res = await this._post(endpoint)
    }
}
