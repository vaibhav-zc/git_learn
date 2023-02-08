import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const baseUrl = 'https://my-json-server.typicode.com/vaibhav-zc/lang-trans-vuex/';

console.log('vuex init')

let modules = {
  App: {
    namespaced: true,
    state: {
      langdata: {
        title: 'default title',
        description: 'default desc'
      },
    },
    getters: {
      filldata: function (state) {
        console.log('filldata getter', state.langdata);
        return state.langdata;
      }
    },
    mutations: {
      nameXYZ: function (state, data) {
        console.log('nameXYZ mutation', state, data)
        return state.langdata = data;
      },

    },
    actions: {
      getdata: (context, lang) => {
        console.log('getdata action')
        return fetch('https://my-json-server.typicode.com/vaibhav-zc/lang-trans-vuex/' + lang).then(res => res.json()).then(res => {
          console.log('data', res)
          context.commit('nameXYZ', res)
          return res;
        })
      }

    }
  }
}

export default new Vuex.Store({
  modules
})
