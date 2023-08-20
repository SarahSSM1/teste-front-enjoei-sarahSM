<template>
  <header class="header">
      <img class="logo__enjoei" :src="logo"/>
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
 .logo__enjoei {
   width: 35px;
   height: 35px;
   margin-top: 20px;
   margin-bottom: 20px;
  }
  .header {
   width: 100%;
   align-items: center;
   display: flex;
   flex-direction: column;
   border-bottom: 1px solid var(--color-gray-2);
   background-color: var(--color-white);
  }

</style>
