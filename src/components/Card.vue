<template>
  <div
    :class="cardType"
    class="card-compoent bg-grey_05 border-all-grey_04"
  >
    <figure>
      <img
        :src="cardContent.src"
        :alt="cardContent.title"
        class="card-img"
      />
    </figure>
    <div class="card-contents-wrapper">
      <span
        v-if="cardContent.label"
        class="card-store-name text-grey_03 font-12-400"
      >
        {{ cardContent.label }}
      </span>
      <strong
        class="product-title text-grey_01 font-14-500 ellipsis-1"
      >
        {{ cardContent.title }}
      </strong>
      <span
        v-if="cardContent.info"
        class="product-comment ellipsis-3 font-12-400"
      >
        {{ cardContent.info }}
      </span>
      <div
        v-if="cardType === 'vertical'"
        class="product-price font-15-700"
      >
        <span class="text-negative">
          {{ cardContent.hilight?.toLocaleString() }}
        </span>
        <s class="text-grey_03">
          {{ cardContent.crossOut?.toLocaleString() }}
        </s>
      </div>
      <div
        v-if="cardContent.rating || (cardContent.comment && cardType === 'vertical')"
        class="card-multiple-wrapper"
        :class="[
          cardType,
          {'border-top-grey_04': cardType === 'vertical'}
        ]"
      >
        <div
          v-if="cardContent.rating"
          class="card-rating-wrapper"
        >
          <span
            v-for="rating in 5"
            :key="rating"
            class="product-rating"
            :class="cardContent.rating && (rating <= cardContent.rating)
            ? 'bg-yellow_01'
            : 'bg-grey_04'"
          >
          </span>
        </div>
        <span
          v-if="cardContent.comment"
          :class="{
            'with-rating' : cardContent.rating,
            'border-left-grey_04' : cardType !== 'vertical'
          }"
          class="product-comment ellipsis-1 font-12-400"
        >
          {{ cardContent.comment }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
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
  setup(props) {
    const cardContent = ref(props.cardData);
    watch(() => props.cardData, (newValue) => {
      cardContent.value = newValue;
    });
    return { cardContent };
  },
});
</script>

<style lang="scss">
@import '@/css/extends.scss';
@import '@/css/variables.scss';

.card-compoent {
  @extend .height-fit-content;
  border-radius: $size4;
  overflow: hidden;
  > figure {
    margin: 0;
    @extend .inline-flex;
    @extend .justify-center;
    @extend .items-center;
    > .card-img {
      width: 100%;
      height: auto;
    }
  }
  .card-contents-wrapper {
    @extend .inline-flex;
    @extend .flex-column;
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
      height: 3.5rem;
      @extend .inline-flex;
      @extend .flex-column;
      .card-rating-wrapper {
        @extend .width-fit-content;
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
      &.vertical {
        @extend .justify-center;
      }
      &.horizontal {
        @extend .flex-row;
        @extend .height-fit-content;
        > .product-author {
          padding-left: $size6;
          margin-left: $size6;
        }
      }
    }
  }

  &.vertical {
    @extend .inline-flex;
    @extend .flex-column;
  }
  &.horizontal {
    @extend .grid;
    -ms-grid-columns: 40% 60%;
    grid-template-columns: 40% 60%;
    .card-contents-wrapper {
      @extend .flex;
      @extend .flex-column;
      @extend .justify-evenly;
      .product-title {
        @extend .height-fit-content;
      }
      .product-comment {
        padding: 0 0 0 $size4;
        margin-left: $size4;
      }
    }
  }
}
</style>
