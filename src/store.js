import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
        selected: [],
        history: [],
	},
	mutations: {
        add(state, position) {
            state.history.push(position);
            state.selected.push(position);
        },
        remove(state, position) {
            const index = state.selected.indexOf(position);
            if (index !== -1) state.selected.splice(index, 1);
        },
        clearSelected(state) {
            state.selected = [];
        },
        clearHistory(state) {
            state.history = [];
        },
	},
	actions: {
        select(store, payload) {
            if (payload.selected) {
                store.commit('add', payload.position);
            } else {
                store.commit('remove', payload.position);
            }
        },
        clearSelected(store) {
            store.commit('clearSelected');
        },
        clearHistory(store) {
            store.commit('clearHistory');
        },
	},
});
