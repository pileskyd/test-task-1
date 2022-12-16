<template>
  <div
    class="text-sm cursor-pointer flex flex-col m-2 md:m-0 relative h-[450px]"
    @focus="showOrHideDetails"
    @focusout="showOrHideDetails"
    tabindex="0"
  >
    <template v-if="house.options">
      <Badge :options="house.options" />
    </template>

    <img
      :src="house.image"
      class="transition-all h-80 origin-top duration-200"
      alt=""
      :class="{ 'h-48': detailed }"
    />

    <div
      class="flex justify-between p-2 font-semibold"
      :class="{ 'border-b mb-2': detailed }"
    >
      <span>{{ house.title }}</span>
      <span> от {{ house.flats.OneRoom.price }} млн ₽ </span>
    </div>
    <!-- Details -->
    <Details :flats="house.flats" :detailed="detailed" />

    <div class="flex justify-between items-center space-x-2">
      <span>Застройщик {{ house.developer }}</span>
      <span class="text-xs ">Сдача в {{ house.deploy.join(", ") }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import Vue from "vue";
import Details from "./Details.vue";
import Badge from "./Badge.vue";

interface house {
  developer: string;
  deploy: number[];
  title: string;
  flatsCount: number;
  image: string;
  options: { discount?: number; tranche?: boolean };
  flats: {
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
  };
}

export default Vue.extend({
  components: {
    Details,
    Badge,
  },
  props: {
    house: {
      required: true,
      type: Object as PropType<house>,
    },
  },
  data() {
    return {
      detailed: false,
    };
  },
  methods: {
    showOrHideDetails: function () {
      this.detailed = !this.detailed;
    },
  },
});
</script>
