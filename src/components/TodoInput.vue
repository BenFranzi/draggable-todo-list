<template>
  <form @submit.prevent="add(input)">
    <input type="text" v-model="input"/>
    <button type="submit">+</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoInput',
  data() {
    return {
      input: ''
    }
  },
  methods: mapActions(['add'])
}
</script>

<style scoped>
  input {
    border-radius: 8px 0 0 8px;
    border: none;
    padding: 8px 16px;
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
    border-radius: 0 8px 8px 0;
    border: none;
    padding: 8px 16px;
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
