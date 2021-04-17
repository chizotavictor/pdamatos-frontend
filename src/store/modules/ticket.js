const state = {
    tickets: [],
    isGlobalLoading: false
}
const getters = {
    getTickets: function(state) {
        return state.tickets
    },
    getTicketsLength: function (state) {
        const games = state.tickets.ticketgame
        console.log(games)
        return (Array.isArray(games)) ? games.length: 0
    },
    getGlobalLoadingStatus: function(state) {
        return state.isGlobalLoading
    }
}
const mutations = {
    setTickets: function(state, data) {
        state.tickets = data
    },
    setGlobalLoadingStatus: function(state, data) {
        state.isGlobalLoading = data
    }
}
const actions = {
    clearTickets: function(state) {
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