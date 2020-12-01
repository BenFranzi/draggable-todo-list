<template>
  <div id="app">
    <button v-if="isLoggedIn" class="logout" @click="logout">logout</button>
    <h1>Todo List</h1>
    <TodoList v-if="isLoggedIn"/>
    <Login v-else/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import { mapActions, mapGetters } from 'vuex';
import Login from '@/components/Login';

export default {
  name: 'App',
  components: {
    Login,
    TodoList
  },
  computed: mapGetters({isLoggedIn: 'auth/isLoggedIn'}),
  methods: mapActions({logout: 'auth/logout'})
}
</script>

<style>
body {
  background-color: #eeede6;
  display: grid;
  place-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logout {
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px;
  background-color: transparent;
  border: none;
  outline: none;
}
.logout:hover {
  color: dodgerblue;
  text-decoration: underline;
}

</style>
