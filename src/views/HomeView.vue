<script setup>
  import TheWelcome from '../components/TheWelcome.vue';
  import { useFlash } from '../composables/useFlash';

  const { flash } = useFlash();
</script>

<template>
  <main>
    <button @click="flash('Home page', 'This is a flash message')">Click Me</button>
    <TheWelcome />
  </main>
</template>
