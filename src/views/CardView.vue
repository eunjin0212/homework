<template>
  <div class="cards vertical" :style="`--data-length: ${cardVerticalItems.length}`">
    <Card
      v-for="cardItem in cardVerticalItems"
      :key="cardItem.label"
      :cardData="cardItem"
      cardType="vertical"
    />
  </div>
  <div class="cards horizontal">
    <Card
      v-for="cardItem in cardHorizontalItems"
      :key="cardItem.title"
      :cardData="cardItem"
      cardType="horizontal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Card from '@/components/Card.vue';
import type { Ref } from 'vue';
import type { ICardData } from '@/types/card.type';
import { cardVerticalMockUp, cardHorizontalMockUp } from '@/mocks/cardData';

export default defineComponent({
  name: 'CardView',
  components: { Card },
  setup() {
    const cardVerticalItems:Ref<ICardData[]> = ref(cardVerticalMockUp);
    const cardHorizontalItems:Ref<ICardData[]> = ref(cardHorizontalMockUp);

    return {
      cardVerticalItems,
      cardHorizontalItems,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '@/css/extends.scss';
@import '@/css/variables.scss';

.cards {
  @extend .grid;
  $gutter: $size12;
  grid-gap: $gutter;
  &.vertical {
    $minmax: $size180, $size216;
    -ms-grid-columns: repeat(auto-fill, minmax($minmax));
    grid-template-columns: repeat(auto-fill, minmax($minmax));
    margin-bottom: $gutter;
  }
  &.horizontal {
    $minmax: $size360, $size540;
    -ms-grid-columns: repeat(auto-fill, minmax($minmax));
    grid-template-columns: repeat(auto-fill, minmax($minmax));
  }
}
</style>
