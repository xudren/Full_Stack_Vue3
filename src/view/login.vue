<template>
  <loginPage></loginPage>
</template>
<script lang="ts" setup>
  import { defineAsyncComponent } from "vue"
  const loginPage = defineAsyncComponent(()=>import('../components/login/loginPage.vue'))
</script>
<style lang="scss">

</style> 