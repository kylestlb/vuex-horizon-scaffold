import Vue from 'vue'
import Vuex from 'vuex'
import { SUBMIT_THING, UPDATE_THINGS } from './mutation-types.js'

Vue.use(Vuex)

const state = {
    things: []
}

const mutations = {
    [SUBMIT_THING] (state, thing) {
        console.log('INSIDE SUBMIT_THING MUTATION')
    },
    [UPDATE_THINGS] (state, things) {
        console.log('inside update things')
        state.things = things
    }
}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    mutations
})
