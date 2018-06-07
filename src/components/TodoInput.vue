<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button @click="addTodo">add</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        };
    },
    methods: {
        addTodo() {
            console.log('clicked', this.newTodoItem);
            localStorage.setItem(this.newTodoItem, this.newTodoItem)
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>

</style>
