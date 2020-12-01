const TOKEN_KEY = 'token';

export default {
  get() {
    return localStorage.getItem(TOKEN_KEY);
  },
  set(token) {
    return localStorage.setItem(TOKEN_KEY, token);
  },
  remove() {
    return localStorage.removeItem(TOKEN_KEY);
  }
}
