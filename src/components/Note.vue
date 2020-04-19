<template>
  <div class="note">
    <div class="note__header">
      <h2 v-if="!editable">
        {{note.title}}
      </h2>
      <Input
        class="note__input"
        v-if="editable"
        :item="note"
        :placeholder="'Title'"
      />
    </div>
    <TodoList
      class="note__todos"
      :todos="note.todos"
      :editable="editable"
      @create-todo="createTodo"
      @remove-todo="removeTodo"
    />
    <div class="note__controls" v-if="!editable">
      <Button
        :label="'edit'"
        :link="true"
        @tap="editNote"
      />
      <Button
        :label="'remove'"
        :danger="true"
        :link="true"
        @tap="showRemoveModal"
      />
    </div>
    <hr>
  </div>
</template>

<script>
import router from '@/router'
import TodoList from '@/components/TodoList'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default {
  components: {
    TodoList,
    Button,
    Input
  },
  props: ['note', 'editable'],
  methods: {
    showRemoveModal() {
      this.$modal.show('modal', {
        title: `Are you sure want to remove ${this.note.title}?`,
        callback: this.removeNote
      })
    },
    editNote() {
      router.push({path: `editor/${this.note.id}`})
    },
    removeNote() {
      this.$emit('remove-note', this.note.id)
    },
    createTodo(todo) {
      this.note.todos.push(todo)
    },
    removeTodo(id) {
      this.note.todos = this.note.todos.filter(todo => todo.id != id)
    }
  }
}
</script>

<style scoped>
.note__header {
  margin-bottom: 18px;
}
.note__input {
  text-align: center;
}
.note__todos {
  margin-bottom: 18px;
}
.note__controls {
  margin-bottom: 24px;
}
</style>
