import { defineStore } from "pinia";

export const useStore = defineStore('store',{
    state: () => ({
      data: [
         {firstName: '', lastName: '', email: '', placing: ''}
      ],
  }),
  getters: {

  },
  actions: {
    addBooking(reservation){
      console.log(reservation);
      this.data = []
      console.log(this.data.push(reservation));
    }
  },
})