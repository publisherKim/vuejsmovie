# helpers refactory
```javascript
    // store.js
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        } 
    },
    // TodoList.vue
    import { mapGetters } from 'vuex';

    computed: {
        todoItems() {
            return this.$store.getters.storedTodoItems;
        }
        // or
        ...mapGetters({
            todoItems: 'storedTodoItems'
        })
    },        
```