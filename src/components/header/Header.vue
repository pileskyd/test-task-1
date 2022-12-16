<template>
  <div class="border-b 2xl:px-[320px] flex justify-around items-center py-4">
    <div class="flex justify-between items-center space-x-2">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      class="h-8 w-8 md:hidden"
      @click="setModalVisibility"
      v-if="!isModalOpen"
      >
        <path fill="currentColor" d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z" />
      </svg>
      
      <svg v-else  @click="setModalVisibility" class="h-8 w-8 md:hidden" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"/></svg>
      <img src="@/assets/images/logo.png" alt="" />
    </div>
    <div class="flex space-x-4 text-base">
      <a href="#" class="font-semibold text-sm hidden md:block">Аренда </a>
      <a href="#" class="font-semibold text-sm hidden md:block">Продажа</a>
      <a href="#" class="font-semibold text-sm hidden md:block">Новостройки</a>
      <a href="#" class="font-semibold text-sm hidden md:block">Ипотека</a>
      <a href="#" class="font-semibold text-sm hidden md:block">Ещё</a>
    </div>
    <span class="font-semibold hover:underline">8 (423) 2-300-008</span>

    <div class="space-x-3 hidden md:flex">
      <button
        class="flex items-center justify-around bg-[#EB1F38] p-2 rounded-[4px] px-4 space-x-2 text-white"
      >
        <img src="@/assets/svg/house.svg" class="w-3.5 h-3.5" alt="" />
        <span href="#" class="text-sm font-semibold">Продать</span>
      </button>
      <button>
        <img src="@/assets/svg/versus.svg" alt="" />
      </button>
      <button>
        <img src="@/assets/svg/like.svg" alt="" />
      </button>
    </div>
    
    <template v-if="isModalOpen">
      <LinksModal  />
    </template>
    
  </div>
</template>

<script>
import LinksModal from '../modals/linksModal.vue'


export default {
  components: {
    LinksModal
  },


  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    setModalVisibility: function () {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};
</script>

<style scoped>

