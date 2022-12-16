import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    location: "",
    rooms: 1,
    studio: false,
    delivery: 1,
    price: 0,
  }),
  mutations: {
    setLocation(state, location: string) {
      state.location = location;
    },
    setRooms(state, rooms: number) {
      state.rooms = rooms;
    },
    setDelivery(state, delivery: number) {
      state.delivery = delivery;
    },
    setPrice(state, price: number) {
      state.price = price;
    },
    setStudio(state, action: boolean) {
      state.studio = action;
    },
  },
});
