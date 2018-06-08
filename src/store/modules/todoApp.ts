const state: { todoItems: object[] } = {
  todoItems: []
};

const getters = {
    storedTodoItems(state: { todoItems: [object] }): [object] {
        return state.todoItems;
    }
}

const mutations = {
    addOneItem(state: {todoItems: [object]}, payload: string): void {
        const obj = { completed: false, item: payload };
        state.todoItems.push(obj);
    },
    removeOneItem(state: {todoItems: [object]}, payload: {index: number}): void {
        state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state: {todoItems: [{completed: boolean}]}, payload: {index: number}): void {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    },
    clearAllItems(state: {todoItems: object[]}): void {
        state.todoItems = [];
    }
};

export default {
    state,
    getters,
    mutations
}
