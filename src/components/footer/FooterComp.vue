<template>
  <div class="md:p-[100px] xl:px-[250px] bg-[#202124] pt-10 text-white">
    <div class="md:flex justify-between">
      <Links />
      <Contacts />
    </div>
    <div class="flex justify-between text-sm p-4 md:p-0">
      <span>Аском 2020 ©</span>
      <a href="#" class="underline"
        >Политика конфиденциальности <br />
        и пользовательское соглашение</a
      >
    </div>
  </div>
</template>

<script>
import Links from "./Links.vue";
import Contacts from "./Contacts.vue";

export default {
  components: {
    Links,
    Contacts,
  },
};
</script>
