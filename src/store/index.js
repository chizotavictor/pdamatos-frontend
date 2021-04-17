import { createLogger, createStore } from 'vuex'
import auth from './modules/auth'
import ticket from './modules/ticket'
import game from './modules/game'
import modal from './modules/modal'
import batch from './modules/batch'

const debug = process.env.NODE_ENV !== 'production'
const store = createStore({
    modules: {
        auth,
        ticket,
        game,
        modal,
        batch
    },
    strict: debug,
    plugins: debug ? [createLogger] : []
})

export default store