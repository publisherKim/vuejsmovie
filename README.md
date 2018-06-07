# TodoList 남은 메서드 정리
# toggleComplete
# App.vue
# v-on:toggleItem="toggleOneItem"
# methods에 toggleOneItem 추가
# TodoList
# toggleComplete this.$emit('toggleItem', todoItem, index);
# 자식에서 올려준 todoItem을 직접 바꾸기보단 부모의 todItems를 접근해서 처리한다.
# // todoItem.completed = !todoItem.completed
# this.todoItems[index].completed = !this.todoItems[index].completed;