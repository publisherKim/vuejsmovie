<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in propsData" :key="todoItem.item" class="shadow">
                <i :class="{checkBtnCompleted: todoItem.completed}" class="fas fa-check checkBtn" @click="toggleComplete(todoItem, index)"></i>
                <span :class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
                <span @click="removeTodo(todoItem, index)" class="removeBtn">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['propsData'],
    methods: {
        removeTodo(todoItem, index) {
            this.$emit('removeItem', todoItem, index);
        },
        toggleComplete(todoItem, index) {
            this.$emit('toggleItem', todoItem, index);
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 60px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 55px;
        color: #62acde;
        margin-right: 5px;
    }
    .checkBtnCompleted {
        color: #b3adad;
    }
    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
</style>
