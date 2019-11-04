import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      loadedPosts: [],
      economy: [],
      society: [],
      international: [],
      sport: []
    },
    getters: {
      loadedPosts: state => state.loadedPosts,
      economy: state => state.economy,
      society: state => state.society,
      international: state => state.international,
      sport: state => state.sport
    },
    mutations: {
      SET_POSTS(state, posts) {
        state.loadedPosts = posts;
      },
      SET_ECONOMY(state, posts) {
        state.economy = posts;
      },
      SET_SOCIETY(state, posts) {
        state.society = posts;
      },
      SET_INTERNATIONAL(state, posts) {
        state.international = posts;
      },
      SET_SPORT(state, posts) {
        state.sport = posts;
      }
    },
    actions: {
      setEconomy({commit}, posts) {
        commit('SET_ECONOMY', posts);
      },
      setSociety({commit}, posts) {
        commit("SET_SOCIETY", posts);
      },
      setInternational({commit}, posts) {
        commit("SET_INTERNATIONAL", posts);
      },
      setSport({commit}, posts) {
        commit("SET_SPORT", posts);
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("SET_POSTS", posts);
      }
    }
})
