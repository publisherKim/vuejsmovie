# TodoInput
# v-on 이벤트 내려주기
# 하위 컴포넌트에서 발생시킨 이벤트 이름 = '현재 컴포넌트의 메서드명'
# App.vue addOneItem 하위 컴포넌트에서 발생시킨 이벤트 처리하기
# this.$emit('이벤트이름', 인자1, 인자2 ...)
# App.vue
# <todo-input v-on:addTodoItem="addOneItem"></todo-input>
# addOneItem(todoItem) {}
# addTodo() { this.$emit('addTodoItem', this.newTodoItem); }