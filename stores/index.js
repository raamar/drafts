import { defineStore } from "pinia";

export const useWarehouseStore = defineStore("warehouses-store", {
  state: () => {
    return {
      warehouses: [],
    };
  },
  getters: {},

  actions: {
    async fetchWarehouse() {
      this.warehouses = await fetch("/api/warehouses").then((res) =>
        res.json()
      );
    },
  },
});
