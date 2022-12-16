<template>
  <div class="grid grid-cols-3 space-x-2 mt-4 md:mt-0 font-semibold">
    <div>
      <span class="text-[#DEDEDE] text-sm">Год сдачи</span>
      <div class="flex space-x-3 pt-3">
        <button
          @click="$store.commit('setDelivery', 1)"
          :class="{ active: $store.state.delivery == 1 }"
          class="bg-slate-100 p-2 md:p-3 px-2 md:px-4 rounded-[7px] transition"
        >
          Сдан
        </button>
        <button
          @click="$store.commit('setDelivery', 2)"
          :class="{ active: $store.state.delivery == 2 }"
          class="bg-slate-100 p-2 md:p-3 px-2 md:px-4 rounded-[7px] transition"
        >
          2023
        </button>
        <button
          @click="$store.commit('setDelivery', 3)"
          :class="{ active: $store.state.delivery == 3 }"
          class="bg-slate-100 p-2 md:p-3 px-2 md:px-4 rounded-[7px] transition"
        >
          2024
        </button>
        <button
          @click="$store.commit('setDelivery', 4)"
          :class="{ active: $store.state.delivery == 4 }"
          class="bg-slate-100 p-2 md:p-3 px-2 md:px-4 rounded-[7px] transition"
        >
          Позже
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply bg-[#EB1F38] text-white font-semibold;
}
</style>
