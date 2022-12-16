<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 mt-10 gap-5">
    <template v-for="house in houses">
      <Card :house="house" />
    </template>
  </div>
</template>

<script>
import image from "@/assets/images/flat.png";
import Card from "./Card.vue";

export default {
  data() {
    return {
      houses: [
        {
          developer: "«ДВ Контракшен»",
          deploy: [2023, 2024],
          title: "Южный",
          flatsCount: 375,
          image,
          options: { tranche: true },
          flats: {
            OneRoom: {
              squareEng: 24,
              price: 3.7,
            },
            TwoRoom: {
              squareEng: 44.2,
              price: 5.2,
            },
            ThreeRoom: {
              squareEng: 68,
              price: 7.2,
            },
          },
        },

        {
          developer: "«ПИК»",
          deploy: [2023, 2024],
          title: "Босфорский парк",
          flatsCount: 375,
          image,
          options: { discount: 10 },
          flats: {
            OneRoom: {
              squareEng: 24,
              price: 4.5,
            },
            TwoRoom: {
              squareEng: 44.2,
              price: 4.7,
            },
            ThreeRoom: {
              squareEng: 68,
              price: 7.2,
            },
          },
        },
        {
          developer: "ГК «Жилкапинвест»",
          deploy: [2023, 2024],
          title: "Видный",
          flatsCount: 375,
          image,
          flats: {
            OneRoom: {
              squareEng: 24,
              price: 5.95,
            },
            TwoRoom: {
              squareEng: 44.2,
              price: 6.4,
            },
            ThreeRoom: {
              squareEng: 68,
              price: 7.2,
            },
          },
        },
        {
          developer: "ГК «Жилкапинвест»",
          deploy: [2023, 2024],
          title: "Видный",
          flatsCount: 375,
          image,
          flats: {
            OneRoom: {
              squareEng: 24,
              price: 5.95,
            },
            TwoRoom: {
              squareEng: 44.2,
              price: 6.4,
            },
            ThreeRoom: {
              squareEng: 68,
              price: 7.2,
            },
          },
        },
        {
          developer: "ГК «Жилкапинвест»",
          deploy: [2023, 2024],
          title: "Видный",
          flatsCount: 375,
          image,
          options: {
            discount: 10,
          },
          flats: {
            OneRoom: {
              squareEng: 24,
              price: 5.95,
            },
            TwoRoom: {
              squareEng: 44.2,
              price: 6.4,
            },
            ThreeRoom: {
              squareEng: 68,
              price: 7.2,
            },
          },
        },
        {
          developer: "«Солнечная долина»",
          deploy: [2023, 2024],
          title: "Золотая долина",
          flatsCount: 375,
          image,
          flats: {
            OneRoom: {
              squareEng: 24,
              price: 4.31,
            },
            TwoRoom: {
              squareEng: 44.2,
              price: 5.5,
            },
            ThreeRoom: {
              squareEng: 68,
              price: 7.2,
            },
          },
        },
      ],
    };
  },
  components: { Card },
};
</script>
