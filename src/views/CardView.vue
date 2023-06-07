<template>
  <Card />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/Card.vue';

export default defineComponent({
  name: 'CardView',
  components: { Card },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
