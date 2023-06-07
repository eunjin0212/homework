<template>
  <Input />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@/components/Input.vue';

export default defineComponent({
  name: 'CardView',
  components: { Input },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
