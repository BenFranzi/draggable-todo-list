const state = {
  items: [
      {id: '1', message: 'one', isCompleted: false},
    {id: '2', message: 'two', isCompleted: false},
    {id: '3', message: 'three', isCompleted: false},
    {id: '4', message: 'four', isCompleted: false},
    {id: '5', message: 'five', isCompleted: false},
  ] // {id: string, message: string, isCompleted: boolean}
};

const getters = {
  getItems: state => state.items
};

const actions = {
  add: ({commit}, message) => {
    const item = {
      id: Math.random().toString(36).substr(2, 9),
      message,
      isCompleted: false,
    };
    commit('add', item);
  },
  remove: ({commit}, id) => {
    commit('remove', id);
  },
  setStatus: ({commit}, {id, status}) => {
    commit('setStatus', {id, status});
  },
  setPosition: ({commit}, {draggedId, droppedId}) => {
    commit('setPosition', {draggedId, droppedId})
  }
};

const mutations = {
  add: (state, item) => {
    state.items.push(item);
  },
  remove: (state, id) => {
    state.items = state.items.filter(item => item.id !== id);
  },
  setStatus: (state, {id, status}) => {
    const index = state.items.findIndex(item => item.id === id);
    if (index > -1) {
      state.items[index].status = status;
    }
  },
  setPosition: (state, {draggedId, droppedId}) => {
    const draggedIndex = state.items.findIndex(item => item.id === draggedId);
    const droppedIndex = state.items.findIndex(item => item.id === droppedId);
    if (draggedIndex > -1 && droppedIndex > -1) {
      const item = state.items[draggedIndex];
      state.items.splice(draggedIndex, 1);
      state.items.splice(droppedIndex, 0, item);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
