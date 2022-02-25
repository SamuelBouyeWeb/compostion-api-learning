<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <button @click="increment">
      Count is {{ count }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const count = ref(0);

function increment() {
  count.value += 1;
}

onMounted(() => {
  console.log(`The initial count is ${count.value} `);
});

const props = defineProps(['msg']);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
