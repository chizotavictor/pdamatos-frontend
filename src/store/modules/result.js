const state = {
  results: [],
  isGlobalLoading: false
};
const getters = {
  getResults: function(state) {
    return state.results;
  },
  getResultsLength: function(state) {
    const data = state.results;
    return Array.isArray(data) ? data.length : 0;
  },
  getGlobalLoadingStatus: function(state) {
    return state.isGlobalLoading;
  }
};
const mutations = {
  setResults: function(state, data) {
    state.results = data;
  },
  setGlobalLoadingStatus: function(state, data) {
    state.isGlobalLoading = data;
  }
};
const actions = {
  clearTickets: function(state) {
    state.results = [];
  }
};

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
};
