const state = {
    games: [],
    directs: [],
    time: [],
    game_points: []
}
const getters = {
    getAvailableGames: function(state) {
        return state.games;
    },
    getGameDirects: function(state) {
        return state.directs
    },
    getGameTime: function(state) {
        return state.time
    },
    getGamePoint: function(state) {
        return state.game_points
    }
}
const mutations = {
    setAvailableGames: function(state, data) {
        state.games = data.data.games
    },
    setGameDirect: function(state, data) {
        state.directs = data.data.directs
    },
    setGameTime: function(state, data) {
        state.time = data.data.times
    },
    setGamePoint: function(state, data) {
        state.game_points = data.data.points.ptoption
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