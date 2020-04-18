<template>
  <input
    class="input"
    type="text"
    v-model="item.title"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: ['item', 'placeholder']
}
</script>

<style scoped>
.input {
  padding: 6px 16px;
  margin: 3px 4px;
  font-size: 14px;
  border: 1px solid var(--color-lightdark);
  outline: none;
  -webkit-appearance: none;
  border-radius: 2px;
  color: var(--color-main);
}
.input:focus {
  border: 1px solid var(--color-dark);
}
</style>

