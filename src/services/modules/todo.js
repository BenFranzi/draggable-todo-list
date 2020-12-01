import $http from '../http';

export default {
  async getAll() {
    return await $http.post('/');
  },
  async add({message, isCompleted}) {
    return await $http.post('/', {message, isCompleted});
  },
  async remove(id) {
    return await $http.delete(`/${id}`);
  }
}
