<template>
  <Card :cardData="cardItem" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Card from '@/components/Card.vue';
import type { Ref } from 'vue';
import type { ICardData } from '@/types/card.type';

export default defineComponent({
  name: 'CardView',
  components: { Card },
  setup() {
    const cardItem:Ref<ICardData> = ref({
      label: '보리네',
      product: {
        src: '',
        title: '강아지가 좋아하는 수제 간식',
        hilight: 8900,
        crossOut: 12900,
        rating: 4,
        comment: '저희집 강아지가 정말 좋아해요!',
      },
    });
    return {
      cardItem,
    };
  },
});
</script>
<style lang="scss" scoped></style>
