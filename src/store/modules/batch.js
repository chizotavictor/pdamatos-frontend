const state = {
    batches: [],
}
const getters = {
    getBatch: function(state) {
        return state.batches
    },
    getBatchLength: function (state) {
        const games = state.games
        return (Array.isArray(games)) ? games.length: 0
    }
}
const mutations = {
    setBatch: function(state, data) {
        state.batches = data
    }
}
const actions = {
    clearBatch: function(state) {
        state.batches = []
    }
}

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}