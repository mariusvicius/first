<script setup>
  // import { useStorage } from '../composables/useStorage';
  //import TabTextarea from '../components/TabTextarea.vue';
  import { useCounterStore } from '../stores/counterStore';

  let counter = useCounterStore();


  // let food = useStorage('food');

  // let obj = useStorage('obj', { foo: 'bar' });

  // setTimeout(() => {
  //   food.value = '🍕';
  //   obj.value.foo = 'baz';
  // }, 2000);



</script>

<template>
  <main>
    <h1>Home</h1>
    <div>{{ counter.count }}</div>

    <button
      @click="counter.count++"
      :disabled="! counter.remaining">
      Test button ( remaining {{ counter.remaining }} )
    </button>
  </main>
</template>
