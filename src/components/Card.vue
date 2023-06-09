<template>
  <div
    :class="[
      cardType,
      cardType === 'vertical' ? 'inline-flex flex-column' : 'grid',
    ]"
    class="card-compoent bg-grey_07 border-all-grey_05 height-fit-content"
  >
    <img
      :src="cardData.src"
      :alt="cardData.title"
      class="card-img"
    />
    <div
      class="card-contents-wrapper inline-flex flex-column"
      :class="{ 'flex justify-evenly' : cardType === 'horizontal' }"
    >
      <span
        v-if="cardData.label"
        class="card-store-name text-grey_03 font-12-400"
      >
        {{ cardData.label }}
      </span>
      <strong
        :class="{ 'height-fit-content' : cardType === 'horizontal' }"
        class="product-title text-grey_01 font-14-500 ellipsis-1"
      >
        {{ cardData.title }}
      </strong>
      <span
        v-if="cardData.info"
        class="product-comment ellipsis-3 font-12-400"
      >
        {{ cardData.info }}
      </span>
      <div
        v-if="cardType === 'vertical'"
        class="product-price font-15-700"
      >
        <span class="text-negative">
          {{ cardData.hilight?.toLocaleString() }}
        </span>
        <s class="text-grey_03">
          {{ cardData.crossOut?.toLocaleString() }}
        </s>
      </div>
      <div
        v-if="cardData.rating || (cardData.comment && cardType === 'vertical')"
        class="card-multiple-wrapper inline-flex flex-column"
        :class="[
          cardType,
          cardType === 'vertical'
            ? 'border-top-grey_05 justify-center'
            : 'flex-row height-fit-content'
        ]"
      >
        <div
          v-if="cardData.rating"
          class="card-rating-wrapper width-fit-content"
        >
          <span
            v-for="rating in 5"
            :key="rating"
            class="product-rating"
            :class="cardData.rating && (rating <= cardData.rating)
            ? 'bg-yellow_01'
            : 'bg-grey_05'"
          >
          </span>
        </div>
        <span
          v-if="cardData.comment"
          :class="{
            'with-rating' : cardData.rating,
            'border-left-grey_05' : cardType !== 'vertical'
          }"
          class="product-comment ellipsis-1 font-12-400"
        >
          {{ cardData.comment }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { ICardData } from '@/types/card.type';

const cardInit = {
  label: '',
  src: '',
  title: '',
  hilight: '',
  crossOut: '',
  rating: 0,
  comment: '',
  author: '',
};

export default defineComponent({
  name: 'CardComponent',
  props: {
    cardData: {
      type: Object as PropType<ICardData>,
      required: true,
      default: () => (cardInit),
    },
    cardType: {
      type: String as PropType<'vertical' | 'horizontal'>,
      default: 'vertical',
    },
  },
});
</script>

<style lang="scss">
@import '@/css/extends.scss';
@import '@/css/variables.scss';

.card-compoent {
  border-radius: $size4;
  overflow: hidden;
  > .card-img {
    width: 100%;
    height: auto;
  }
  .card-contents-wrapper {
    text-align: left;
    width: 100%;
    height: 100%;
    > * {
      padding: 0 $size10;
    }
    .card-store-name {
      padding-top: $size8;
      margin-bottom: $size4;
    }
    .product-title {
      height: $size42;
    }
    .product-price {
      padding-bottom: $size8;
      overflow-wrap: break-word;
      > span {
        margin-right: $size4;
      }
      > s {
        white-space: nowrap;
      }
    }

    $size: $size15;
    .card-multiple-wrapper {
      &.vertical {
        height: 3.5rem;
      }
      .card-rating-wrapper {
        height: $size;
        display: inline-block;
        .product-rating {
          width: $size;
          height: $size;
          display: inline-block;
          border-radius: 100%;
          margin-right: $size4;

          &:last-of-type {
            margin-right: 0;
          }
        }
      }
      .with-rating {
        padding-top: $size8;
      }
      &.horizontal {
        > .product-author {
          padding-left: $size6;
          margin-left: $size6;
        }
      }
    }
  }
  &.horizontal {
    -ms-grid-columns: 40% 60%;
    grid-template-columns: 40% 60%;
    .card-contents-wrapper {
      .product-comment {
        padding: 0 0 0 $size4;
        margin-left: $size4;
      }
    }
  }
}
</style>
