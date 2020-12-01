<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';

export default {
  name: 'App',
  components: {
    TodoList
  }
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
</style>
