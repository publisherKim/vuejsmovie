<template>
  <div id="app">
      <todo-header></todo-header>
      <todo-input v-on:addTodoItem="addOneItem"></todo-input>
      <todo-list
        :propsData="todoItems"
        v-on:removeItem="removeOneItem"
      ></todo-list>
      <todo-footer></todo-footer>
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
  created() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  data() {
    return {
      todoItems: []
    };
  },
  methods: {
    addOneItem(todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      // console.log(todoItem);
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);      
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
