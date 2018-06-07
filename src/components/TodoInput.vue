<template>
    <div class="inputBox shadow">
        <input 
            type="text" 
            v-model="newTodoItem"
            @keyup.enter="addTodo"
        >
        <span
            class="addContainer"
            @click="addTodo"
        >
            <i class="fas fa-plus addBtn"></i>
        </span>
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
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
    .header {
        color: #42b983;
    }
    .closeModalBtn {
        color: #42b983;
    }
</style>
