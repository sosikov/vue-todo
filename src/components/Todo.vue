<template>
  <li
    class="todo"
    :class="{'todo--done': todo.completed}"
  >
    <Checkbox
      class="todo__checkbox"
      :item="todo"
      :editable="editable"
    />
    <span class="todo__title" v-if="!editable">
      {{todo.title}}
    </span>
    <div class="todo__controls" v-if="editable">
      <Input :item="todo"/>
      <Button
        :label="'remove'"
        :danger="true"
        :link="true"
        @tap="removeTodo"
      />
    </div>
  </li>
</template>

<script>
import Button from '@/components/Button'
import Input from '@/components/Input'
import Checkbox from '@/components/Checkbox'

export default {
  components: {
    Button,
    Input,
    Checkbox
  },
  props: ['todo', 'editable'],
  methods: {
    removeTodo() {
      this.$emit('remove-todo', this.todo.id)
    }
  }
}
</script>

<style scoped>
.todo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo__checkbox {
  margin-right: 6px;
}
.todo__controls > button {
  margin-left: 6px;
}
.todo--done > .todo__title {
  text-decoration: line-through;
}
</style>
