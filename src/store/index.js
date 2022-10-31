import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import api from '../api/custom-table';

export default new Vuex.Store({
    state: {
        users: [],
        loader: true
    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        }
    },
    actions: {
        async fetchUsers({ commit, state }) {
            try {
                const response = await api.get()
                commit('setUsers', response, true)
            }
            catch (error) {
                console.log(error)
            }
            finally {
                state.loader = false
            }
        }
    }
})