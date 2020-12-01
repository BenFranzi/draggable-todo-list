import $http from '../http';

export default {
  async login({username, password}) {
    return await $http.post('/auth', {username, password});
  }
}
