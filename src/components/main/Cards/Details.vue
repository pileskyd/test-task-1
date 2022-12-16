<template>
  <div
    class="scale-0 transition-all"
    v-show="detailed"
    :class="{ 'border-b scale-100 duration-1000 ': detailed }"
  >
    <span class="text-red-500">375 квартир в продаже</span>
    <div class="flex space-x-4 my-2 whitespace-nowrap text-xs">
      <div class="flex flex-col">
        <span>1-комнатная</span>
        <span>2-комнатная</span>
        <span>3-комнатная</span>
      </div>

      <div class="flex flex-col">
        <span class="text-gray-400"
          >{{ flats.OneRoom.squareEng }}м<sup>2</sup></span
        >
        <span class="text-gray-400"
          >{{ flats.TwoRoom.squareEng }}м<sup>2</sup></span
        >
        <span class="text-gray-400"
          >{{ flats.ThreeRoom.squareEng }}м<sup>2</sup></span
        >
      </div>

      <div class="flex flex-col">
        <span>от {{ flats.OneRoom.price }} млн ₽</span>
        <span>от {{ flats.TwoRoom.price }} млн ₽</span>
        <span>от {{ flats.ThreeRoom.price }} млн ₽</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

interface flats {
  OneRoom: {
    squareEng: number;
    price: number;
  };
  TwoRoom: {
    squareEng: number;
    price: number;
  };
  ThreeRoom: {
    squareEng: number;
    price: number;
  };
}

export default Vue.extend({
  props: {
    detailed: {
      required: true,
      type: Boolean,
    },
    flats: {
      required: true,
      type: Object as PropType<flats>,
    },
  },
});
</script>
