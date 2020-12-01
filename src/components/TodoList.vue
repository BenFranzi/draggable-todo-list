<template>
  <div>
    <ul>
      <transition-group name="todos">
        <TodoItem
            v-for="item in getItems"
            :key="item.id"
            :item="item"
            @onDrag="setDragging"
            @onDrop="handleDrop"
        />
      </transition-group>
    </ul>
    <TodoInput/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TodoItem from '@/components/TodoItem';
import TodoInput from '@/components/TodoInput';

export default {
  name: 'TodoList',
  components: {
    TodoInput,
    TodoItem
  },
  data() {
    return {
      draggedId: null
    }
  },
  computed: mapGetters({getItems: 'todo/getItems'}),
  methods: {
    ...mapActions({setPosition: 'todo/setPosition'}),
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

.todos-move {
  transition: transform .2s;
}


</style>
