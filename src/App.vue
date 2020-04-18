<template>
  <div>
    <router-view></router-view>
    <Modal/>
  </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  components: {
    Modal
  }
}
</script>

<style>
:root {
  --color-white: #ffffff;
  --color-main: #2c3e50;
  --color-black: #2c3e5060;
  --color-dark: #2c3e5040;
  --color-lightdark: #2c3e5010;
  --color-lightgray: #2c3e5008;
  --color-lightblue: #43accc;
  --color-lightred: #C8565C;
}
* {
  box-sizing: border-box;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-main);
  cursor: default;
  min-width: 320px;
  margin: 0;
}
hr {
  width: 36px;
}
ul {
  list-style: none;
  padding-left: 0;
  margin: 16px 0;
}
</style>
