const state = {
    tickets: [],
    isGlobalLoading: false
}
const getters = {
    getAdminTickets: function(state) {
        return state.tickets
    },
    getAdminTicketsLength: function (state) {
        const games = state.tickets
        return (Array.isArray(games)) ? games.length: 0
    },
    getAdminGlobalLoadingStatus: function(state) {
        return state.isGlobalLoading
    }
}
const mutations = {
    setAdminTickets: function(state, data) {
        state.tickets = data
    },
    setAdminGlobalLoadingStatus: function(state, data) {
        state.isGlobalLoading = data
    }
}
const actions = {
    clearAdminTickets: function(state) {
        state.tickets = []
    }
}

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}