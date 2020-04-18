<template>
  <label>
    <input
      class="checkbox__input"
      type="checkbox"
      v-model="item.completed"
      :disabled="!editable"
    />
    <div class="checkbox__label"></div>
  </label>
</template>

<script>
export default {
  props: ['item', 'editable']
}
</script>

<style scoped>
.checkbox__label {
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-dark);
  border-radius: 2px;
  position: relative;
}
.checkbox__input {
  display: none;
}
.checkbox__input:checked + .checkbox__label:after {
  position: absolute;
  content: '';
  width: 3px;
  height: 8px;
  border-right: 2px solid var(--color-white);
  border-bottom: 2px solid var(--color-white);
  left: 50%;
  top: 16%;
  transform: translateX(-50%) rotate(45deg);
  animation: scale 200ms;
}
.checkbox__input:checked + .checkbox__label {
  background: var(--color-lightblue);
  border: 1px solid var(--color-lightblue);
}
.checkbox__input:disabled + .checkbox__label {
  width: 12px;
  height: 12px;
  background: var(--color-lightgray);
  border: 1px solid var(--color-dark);
}
.checkbox__input:disabled + .checkbox__label:after {
  width: 2px;
  height: 5px;
  top: 12%;
  border-right: 2px solid var(--color-black);
  border-bottom: 2px solid var(--color-black);
}
@keyframes scale {
  0% {
    transform: translateX(-50%) rotate(45deg) scale(0);
  }
  85% {
    transform: translateX(-50%) rotate(45deg) scale(1.08);
  }
  100% {
    transform: translateX(-50%) rotate(45deg) scale(1);
  }   
}
</style>
