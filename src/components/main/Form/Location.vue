<template>
  <div class="">
    <div>
      <span class="text-[#DEDEDE] text-sm">Выберите локацию</span>
    </div>
    <div>
      <input
        @input="setLocation"
        v-model="location"
        type="text"
        placeholder="Введите район или улицу..."
        class="w-64 p-3 bg-slate-100 rounded-md text-sm outline-slate-300 mt-3 placeholder-black font-medium"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: "",
    };
  },
  methods: {
    setLocation: function () {
      this.$store.commit("setLocation", this.location);
    },
  },
};
</script>
