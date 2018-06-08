const addOneItem = (state, payload) => {
    const obj = { completed: false, item: payload };
    localStorage.setItem(payload, JSON.stringify(obj));
    state.todoItems.push(obj);
};
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
};
const toggleOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

};
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }