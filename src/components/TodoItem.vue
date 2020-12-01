<template>
  <li
      draggable
      @dragstart="onDrag"
      @dragover.prevent
      @drop="onDrop"
  >
    {{ item.message }}<button @click="remove(item.id)">x</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoItem',
  props: ['item'],
  methods: {
    ...mapActions(['remove']),
    onDrag() {
      this.$emit('onDrag', this.item.id);
    },
    onDrop() {
      this.$emit('onDrop', this.item.id);
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
  background-color: white;
  padding: 8px 16px;
  margin: 8px 0;
  border-radius: 8px;
}
button {
  margin-left: auto;
  outline: none;
  border-radius: 8px;
  border: none;
  padding: 8px;
}

button:hover {
  background-color: #ccc;
}
button:active {
  background-color: #aaa;
}

</style>
