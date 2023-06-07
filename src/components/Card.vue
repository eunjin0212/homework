<template>
  <div class="card-compoent">
    <img :src="cardContent.product.src" :alt="cardContent.product.title" />
    <span class="card-store-name text-grey_03 font-12-400">{{ cardContent.label }} </span>
    <strong class="card-product-title text-grey_01 font-13-400">
      {{ cardContent.product.title }}
    </strong>
    <div class="card-price">
      <span class="text-negative font-15-700">
        {{ cardContent.product.hilight.toLocaleString() }}
      </span>
      <s class="text-grey_03 font-15-700">{{ cardContent.product.crossOut.toLocaleString() }}</s>
    </div>
    <div>
      <span
        v-for="rating in 5"
        :key="rating"
        class="card-product-rating"
        :class="cardContent.product.rating
        && (rating <= cardContent.product.rating)
        ? 'text-yellow_01'
        : 'text-grey_04'"
      >
        ★
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import type { PropType, Ref } from 'vue';
import type { ICardData } from '@/types/card.type';

const cardInit = {
  label: '',
  product: {
    src: '',
    title: '',
    hilight: 0,
    crossOut: 0,
    rating: 0,
    comment: '',
  },
};

export default defineComponent({
  name: 'CardComponent',
  props: {
    cardData: {
      type: Object as PropType<ICardData>,
      required: true,
      default: () => (cardInit),
    },
    type: {
      type: String as PropType<'vertical' | 'horizontal'>,
      default: 'vertical',
    },
  },
  setup(props) {
    const cardContent:Ref<ICardData> = ref(props.cardData);
    watch(() => props.cardData, (newValue: ICardData) => {
      cardContent.value = newValue;
    });
    return { cardContent };
  },
});
</script>

<style lang="scss">
.card-compoent {
  display: inline-flex;
  flex-direction: column;
}
</style>
