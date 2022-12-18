<template>
  <div class="mt-10">
    <div>
      <span class="text-[#DEDEDE] text-sm">Укажите стоимость в млн ₽</span>
    </div>
    <div
      class="bg-slate-100 p-2 flex w-72 text-sm rounded-md justify-between font-semibold"
    >
      <span>от {{ from }} млн ₽</span>
      <span>до {{ to }} млн ₽</span>
    </div>
    <div class="flex">
      <input
        type="range"
        name=""
        id=""
        class="w-[140px]"
        min="3"
        max="5"
        v-model="from"
      />
      <input
        type="range"
        name=""
        id=""
        class="w-[140px]"
        min="5"
        max="7"
        v-model="to"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: 3,
      to: 7,
    };
  },
};
</script>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  height: 2px;
  background: red;
  background-repeat: no-repeat;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border-color: red;
  border: 1px solid red;
  background: white;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border-radius: 1px;
  border: none;
  background: transparent;
}
</style>
