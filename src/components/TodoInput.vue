<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>

        <modal v-if="showModal" @close="showModal = false">
            <h3 class="header" slot="header">warn!
                <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
            </h3>
            <h3 slot="body">typing something is required</h3>
        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal';

export default {
    components: {
        Modal
    },
    data() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== '') {
                const text = this.newTodoItem.trim();
                this.$store.commit('addOneItem', text);
                this.clearInput();
            } else {
                this.showModal = true;
            }
        },
        clearInput() {
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