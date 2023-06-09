<template>
  <div class="input-compoent flex">
    <div
      :class="[
        { 'bg-grey_06': disabled },
        !isDisabled ? 'border-all-positive' : 'border-all-grey_02',
      ]"
      class="input-wrapper"
    >
      <textarea
        :value="inputContent"
        type="text"
        aria-label="input"
        :maxlength="maxlength"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        @input="handleChange"
        :name="inputName"
      />
      <div
        v-if="maxlength"
        class="input-counter"
        :class="{ 'text-grey_04': disabled || readonly }"
      >
        {{ inputContent.length }} / <span>{{ maxlength - inputContent.length }}</span>
      </div>
    </div>
    <button
      :class="
        !isDisabled
          ? 'border-all-positive text-positive bg-white'
          : 'border-all-grey_02 text-grey_02 bg-grey_06'
      "
      type="button"
      v-if="!disabled && !readonly"
      @click="() => $emit('handleClick', inputContent)"
      :disabled="isDisabled"
    >
      SAVE
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'InputComponent',
  props: {
    modelValue: {
      type: String,
      default: '',
      required: true,
    },
    maxlength: {
      type: Number || undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '내용을 입력해주세요',
    },
    inputName: {
      type: String,
      default: 'input',
    },
  },
  setup(props) {
    const inputContent = ref(props.modelValue);
    function handleChange(event: Event) {
      const target = event.target as HTMLTextAreaElement;
      // 한글인 경우 maxlength를 넘음
      if (props.maxlength && target.value.length > +props.maxlength) {
        target.value = target.value.slice(0, target.value.length - 1);
      }
      inputContent.value = target.value;
    }
    return {
      inputContent,
      handleChange,
      // 입력중인 상태 이전 상태와 다르면 입력중인 것으로 간주
      // 비활성화 상태 : 입력중, 이전 값과 같은 값, 값이 없으면 비활성화
      isDisabled: computed(() => !inputContent.value || props.modelValue === inputContent.value),
    };
  },
});
</script>

<style lang="scss">
@import "@/css/extends.scss";
@import "@/css/variables.scss";

.input-compoent {
  .input-wrapper {
    width: 100%;
    height: $size94;
    overflow: hidden;
    border-radius: $size4;
    padding: $size8 $size10;
    position: relative;
    > textarea {
      border: none;
      height: 100%;
      resize: none;
      width: 100%;
      padding: 0;
      background-color: transparent;
      &:focus,
      &:focus-visible {
        outline: none;
      }
    }
    .input-counter {
      position: absolute;
      bottom: $size8;
      right: $size10;
    }
  }
  > button {
    border-radius: $size4;
    width: $size90;
    margin-left: $size6;
  }
}
</style>
