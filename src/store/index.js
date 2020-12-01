import Vue from 'vue'
import Vuex from 'vuex'
import todo from '@/store/modules/todo';
import auth from '@/store/modules/auth';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    todo
  }
})
