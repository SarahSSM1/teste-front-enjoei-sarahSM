<template>
  <header class="c-header">
      <img class="c-header__logo " :src="logo"/>
  </header>
</template>
<script>
import logo from '../assets/enjoei-logo.svg'

export default {
  data() {
      return{
          logo
      }
  }
}
</script>
<style scoped>
  .c-header {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--color-white);
      border-bottom: 1px solid var(--color-gray-2);
  }

  .c-header__logo {
      width: 30px;
      height: 30px;
      margin-top: 20px;
      margin-bottom: 20px;
  }
</style>
