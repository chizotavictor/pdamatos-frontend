const state = {
    data: null,
    stake: null,
    potential_win: null,
    balance: null,
    cashout: null
};
const getters = {
    getData: function(state) {
      return state.data;
    },
    getStake: function(state) {
      return state.stake;
    },
    getPotentialWin: function(state) {
      return state.potential_win;
    },
    getBalance: function(state) {
      return state.balance;
    },
    getCashout: function(state) {
      return state.cashout;
    }
};
const mutations = {
    setData: function(state, data) {
      state.data = data;
    },
    setStake: function(state, data) {
      state.stake = data;
    },
    setPotentialWin: function(state, data) {
      state.potential_win = data;
    },
    setBalance: function(state, data) {
      state.balance = data;
    },
    setCashout: function(state, data) {
      state.cashout = data;
    }
};
const actions = {
    clearResultReport: function(state) {
      state.data = {};
      state.stake = null;
      state.potential_win = null;
      state.balance = null;
      state.cashout = null;
    }
};
  
export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
};
  