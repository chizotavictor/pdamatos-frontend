const state = {
    user: {},
    error: {},
    isLoggedIn: false,
    token: localStorage.getItem('_key'),
}

const getters = {
    loginErrorResponse(state) {
        return state.error
    },
    getUserAuthToken: function() {
        return localStorage.getItem('_key')
    },
    getUserAuthInfo: function() {
        return localStorage.getItem('_prop')
    },
    getUserAuthLevel: function() {
        let info = JSON.parse(localStorage.getItem('_prop'));
        if(info === null) { return 0}        
        if(info.level) {
            return Number.parseInt(info.level)}
        else { return 1; }
    },
    getUserName: function() {
        let info = JSON.parse(localStorage.getItem('_prop'));
        if(info === null) { return ''}
        else { return info.username; }
    },
    isUserLoggedIn: function() {
        let key = getters.getUserAuthToken()
        let prop = getters.getUserAuthInfo()
        if(key == null || key == 'null' || key == '' || key == undefined) {
           return false;
        }
        if(prop == null || prop == 'null' || prop == '' || prop == undefined) {
            return false;
        }
        return true;
    }
}

const mutations = {
    setAuthKey(state, data) {
        state.token = data
        localStorage.setItem('_key', data)
    },
    setAuth(state, data) {
        state.user = data
        localStorage.setItem('_prop', data)
    },
    setError(state, data) {
        state.error = data
    },
    setIsLoggedIn(state, data) {
        state.isLoggedIn = data
    }
}

const actions = {}

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}

