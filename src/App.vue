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
  margin: 30px 0 0;
}
hr {
  width: 36px;
  height: 1px;
  border: none;
  background: var(--color-black);
  margin: 0 auto;
}
h1, h2 {
  margin: 0;
  line-height: 1;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
