<template>
  <div>백패커 코드테스트 김은진</div>
  <CardView />
  <br />
  <InputView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputView from './InputView.vue';
import CardView from './CardView.vue';

export default defineComponent({
  name: 'HomeView',
  components: { InputView, CardView },
});
</script>
