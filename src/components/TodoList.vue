<template>
  <ul class="todo">
    <Todo
      class="todo__item"
      v-for="todo of todos"
      :key="todo.id"
      :todo="todo"
      :editable="editable"
      @remove-todo="removeTodo"
    />
    <div class="todo__controls" v-if="editable">
      <Input
        :item="newTodo"
        :placeholder="'Todo'"
      />
      <Button
        :label="'create'"
        :link="true"
        @tap="createTodo"
      />
    </div>
  </ul>
</template>

<script>
import Todo from '@/components/Todo'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default {
  components: {
    Todo,
    Button,
    Input
  },
  props: ['todos', 'editable'],
  data() {
    return {
      newTodo: {
        title: ''
      }
    }
  },
  methods: {
    createTodo() {
      const todo = {
        id: Date.now(),
        title: this.newTodo.title,
        completed: false
      }
      this.$emit('create-todo', todo)
      this.newTodo.title = ''
    },
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<style scoped>
.todo__item {
  margin-bottom: 6px;
}
.todo__controls {
  margin-bottom: 24px;
  margin-left: 20px;
}
.todo__controls > button {
  margin-left: 6px;
}
</style>
