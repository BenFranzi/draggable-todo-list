<template>
  <form @submit.prevent="login({username, password})">
    <input placeholder="email" type="text" v-model="username"/>
    <input placeholder="password" type="text" v-model="password"/>
    <button type="submit">login</button>
  </form>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: mapActions({login: 'auth/login'})
}
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    border-radius: 8px;
    border: none;
    padding: 8px 16px;
    margin: 8px 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    background-color: #fff;
    outline: none;
  }

  input:focus {
    background-color: #fafafa;
  }

  button {
    border-radius: 8px;
    border: none;
    padding: 8px 16px;
    margin: 8px 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    background-color: mediumpurple;
    color: #fff;
    outline: none;
  }

  button:active {
    background-color: rebeccapurple;
  }
</style>
