<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 p-2 lg:grid-cols-3 mb-10">
      <Location />
      <Rooms />
      <Delivery />
      <Price />
    </div>
    <div class="flex justify-center md:justify-end space-x-4">
      <button
        class="bg-slate-100 flex items-center space-x-2 p-3 rounded-[8px]"
      >
        <img src="@/assets/svg/location.svg" class="h-5 w-5" alt="" />
        <span class="text-sm font-semibold">Показать на карте</span>
      </button>
      <button
        class="p-3 bg-[#EB1F38] rounded-[8px] px-9 text-white text-sm font-semibold"
      >
        Показать
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Rooms from "./Rooms.vue";
import Location from "./Location.vue";
import Price from "./Price.vue";
import Delivery from "./Delivery.vue";

export default {
  components: {
    Rooms,
    Location,
    Delivery,
    Price,
  },
};
</script>
