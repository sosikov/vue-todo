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
    <span v-if="!editable">
      {{todo.title}}
    </span>
    <div v-if="editable">
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
  margin-right: 4px;
}
.todo--done > span {
  text-decoration: line-through;
}
</style>
