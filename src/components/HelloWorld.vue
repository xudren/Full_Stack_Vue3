<script setup lang="ts">
import { ref } from 'vue'
// import LoadingDemo from './Test'
import { Message } from './Test'


// import {Message} from './render_createVnode'
defineProps<{ msg: string }>()
/**
 * 
 */
const count = ref<Number>(0)
const showToast = (): void => {
  console.log(1)
  Message({ types: 'error', text: '登录失败' }, 'div')
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="showToast">是否有Toast</button>
  <!-- <LoadingDemo></LoadingDemo> -->
</template>

<style scoped>
</style>
