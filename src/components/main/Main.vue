<template>
  <div class="2xl:px-[380px] p-2 md:px-[50px] mb-[200px]">
    <div
      class="md:pt-[100px] text-3xl pt-5 pb-5 md:text-5xl font-semibold md:mb-[100px]"
    >
      Каталог новостроек
    </div>
    <Form />
    <Cards />
  </div>
</template>

<script>
import Form from "./Form/Form.vue";
import Cards from "./Cards/Cards.vue";
import LinksModal from "../modals/linksModal.vue";

export default {
  components: {
    Form,
    Cards,
    LinksModal,
  },
};
</script>

<style scoped></style>
