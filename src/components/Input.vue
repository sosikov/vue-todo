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
  font-size: 16px;
  border: none;
  border-bottom: 1px solid var(--color-lightdark);
  outline: none;
  -webkit-appearance: none;
  color: var(--color-main);
}
.input:focus {
  border: none;
  border-bottom: 1px solid var(--color-dark);
}
</style>

