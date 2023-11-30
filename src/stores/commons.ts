import { defineStore } from 'pinia';
import { IProduct } from '@/types/product';

export const useCommonsStore = defineStore('commonsStore', {
  state: () => ({
    cart: 0 as number
  }),
  actions: {
    addItem(num: number) {
      this.cart += num
      console.log(this.cart)
    },
    removeItem(){
      this.cart = 0
    }
  }
})