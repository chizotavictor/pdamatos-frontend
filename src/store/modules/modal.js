const state = {
    visibility: false
}
const getters = {
    getModalVisibility: function(state) {
        return state.visibility;
    }
}
const mutations = {
    setModalVisibility: function(state, data) {
        state.visibility = data
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