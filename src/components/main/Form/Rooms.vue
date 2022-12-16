<template>
  <div class="">
    <span class="text-[#DEDEDE] text-sm">Количество комнат</span>
    <div class="flex">
      <button
        @click="$store.commit('setRooms', 1)"
        :class="{ isActive: $store.state.rooms == 1 }"
        class="bg-slate-100 mt-3 p-3 mx-2 rounded-md w-10 h-10 flex items-center justify-center font-semibold transition"
      >
        1
      </button>
      <button
        @click="$store.commit('setRooms', 2)"
        :class="{ isActive: $store.state.rooms == 2 }"
        class="bg-slate-100 mt-3 p-3 mx-2 rounded-md w-10 h-10 flex items-center justify-center font-semibold transition"
      >
        2
      </button>
      <button
        @click="$store.commit('setRooms', 3)"
        :class="{ isActive: $store.state.rooms == 3 }"
        class="bg-slate-100 mt-3 p-3 mx-2 rounded-md w-10 h-10 flex items-center justify-center font-semibold transition"
      >
        3
      </button>
      <button
        @click="$store.commit('setRooms', 4)"
        :class="{ isActive: $store.state.rooms == 4 }"
        class="bg-slate-100 mt-3 p-3 mx-2 rounded-md w-10 h-10 flex items-center justify-center font-semibold transition"
      >
        4
      </button>
      <button
        @click="$store.commit('setRooms', 5)"
        :class="{ isActive: $store.state.rooms == 5 }"
        class="bg-slate-100 mt-3 p-3 mx-2 rounded-md w-10 h-10 flex items-center justify-center font-semibold transition"
      >
        5+
      </button>
    </div>
    <div class="flex items-center space-x-2 m-2">
      <input type="checkbox" v-model="studio" @change="selectStudio" class="w-5 h-5" />
      <label for="">Студия</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      studio: false,
    };
  },
  methods: {
    selectRoom: function () {
      this.active = value;
    },
    selectStudio: function() {
      this.$store.commit('setStudio', this.studio)
    }
  },
};
</script>

<style scoped>
.isActive {
  @apply bg-[#EB1F38] text-white;
}
</style>
