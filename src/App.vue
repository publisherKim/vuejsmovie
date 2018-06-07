<template>
  <div id="app">
      <todo-header></todo-header>
      <todo-input></todo-input>
      <todo-list></todo-list>
      <todo-footer v-on:clearAll="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from'./components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  methods: {
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
