<template>
  <button
    class="button"
    :class="{'button--danger': danger, 'button--link': link}"
    @click="handleClick"
  >
    {{label}}
  </button>
</template>

<script>
export default {
  props: ['label', 'link', 'danger'],
  methods: {
    handleClick() {
      this.$emit('tap')
    }
  }
}
</script>

<style scoped>
.button {
  padding: 6px 16px;
  margin: 4px;
  min-width: 54px;
  outline: none;
  border: 1px solid var(--color-main);
  border-radius: 2px;
  font-size: 14px;
  color: var(--color-main);
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.16s;
  background: var(--color-white);
}
.button:hover {
  background: var(--color-main);
  color: var(--color-white);
  transition: all 0.16s;
}
.button:active {
  transform: scale(0.96);
  transition: all 0.16s;
}
.button--danger {
  color: var(--color-lightred);
  border: 1px solid var(--color-lightred);
}
.button--danger:hover {
  background: var(--color-lightred);
  color: var(--color-white);
}
.button--link {
  border: none;
  padding: 0;
}
.button--link:active {
  transform: unset;
}
.button--link:hover {
  background-color: var(--color-white);
  text-decoration: underline;
  color: var(--color-main);
}
.button--danger.button--link:hover {
  color: var(--color-lightred);
}
</style>
