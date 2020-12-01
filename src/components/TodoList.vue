<template>
  <div>
    <ul>
      <TodoItem
          v-for="item in getItems"
          :key="item.id"
          :item="item"
          @onDrag="setDragging"
          @onDrop="handleDrop"
      />
    </ul>
    <TodoInput/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TodoItem from '@/components/TodoItem';
import TodoInput from '@/components/TodoInput';

export default {
  components: {
    TodoInput,
    TodoItem
  },
  data() {
    return {
      draggedId: null
    }
  },
  computed: mapGetters(['getItems']),
  methods: {
    ...mapActions(['setPosition']),
    setDragging(id) {
      this.draggedId = id;
    },
    handleDrop(id) {
      this.setPosition({draggedId: this.draggedId, droppedId: id});
      this.draggedId = null;
    }
  }
}
</script>

<style scoped>

  div {
    max-width: 365px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>
