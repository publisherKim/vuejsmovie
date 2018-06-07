# helpers mapMutations
```javascript
    // store.js

    // TodoList.vue
    import { mapGetters, mapMutations } from 'vuex';

    // methods
    methods: {
        ...mapMutations({
            removeTodo: 'removeOneItem', toggleComplete: 'toggleOneItem'
        })
    }
    // template
    @click="toggleComplete({todoItem, index})"
    @click="removeTodo({todoItem, index})"
  
```