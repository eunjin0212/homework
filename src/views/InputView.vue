<template>
  <Input v-model="inputItem" />
  <Input v-model="inputMaxlengthItem" :maxlength="10" @handleClick="handleClick" />
  <Input v-model="inputDisableItem" :maxlength="500" disabled placeholder="disable" />
  <Input v-model="inputReadonlyItem" :maxlength="500" readonly placeholder="readonly" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Input from '@/components/Input.vue';

export default defineComponent({
  name: 'CardView',
  components: { Input },
  setup() {
    const inputItem = ref('최대값 없을 경우 & 초기값이 있을 수 있는 경우');
    const inputMaxlengthItem = ref('일이삼사오육칠팔구십');
    const inputDisableItem = ref('');
    const inputReadonlyItem = ref('');

    function handleClick(val: string) {
      console.log(val);
    }
    return {
      inputItem,
      inputMaxlengthItem,
      inputDisableItem,
      inputReadonlyItem,

      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped></style>
