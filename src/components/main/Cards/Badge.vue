<template>
  <div
    class="bg-slate-100 absolute top-0 left-0 m-2 p-1 px-2 rounded-xl"
    v-if="options.discount"
  >
    Скидка {{ options.discount }}%
  </div>
  <div
    class="bg-slate-100 absolute top-0 left-0 m-2 p-1 px-2 rounded-xl"
    v-else-if="options.tranche"
  >
    Ипотека траншами
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

interface options {
  discount?: number;
  tranche?: boolean;
}

export default {
  props: {
    options: {
      required: true,
      type: Object as PropType<options>,
    },
  },
};
</script>
