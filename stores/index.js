import { defineStore } from 'pinia'

export const useWarehouseStore = defineStore('warehouses-store', {
  state: () => {
    return {
      // warehouses: useLocalStorage('warehouses', []),
      // deals: useLocalStorage('deals', []),
      warehouses: [],
      deals: [],
      liked: {},
      names: '',
    }
  },
  getters: {
    // находит элемент в массиве warehouses по заданному идентификатору id.
    item() {
      return (id) => this.warehouses.find((warehouse) => warehouse.id === id)
    },

    // возвращает массив складов, которые отмечены как "понравившиеся". В данном случае фильтрация происходит по полю liked в объектах массива warehouses.
    likedWarehouses() {
      return this.warehouses.filter((warehouse) => this.liked[warehouse.id])
    },

    // вычисляет общее количество deals, складывая значение свойства quantity каждого объекта deals с текущим значением total.
    numberOfDeals() {
      return this.deals.reduce((total, item) => {
        return total + item.quantity
      }, 0)
    },

    // фильтрации списка на странице Склад по имени.
    searchNameOnWarehouses() {
      let search = this.names
      return this.warehouses.filter(function (elem) {
        if (search === '') return true
        else return elem.name.indexOf(search) > -1
      })
    },

    // фильтрации списка на странице Сделки по имени.
    searchNameOnDeals() {
      let search = this.names
      return this.deals.filter(function (elem) {
        if (search === '') return true
        else return elem.name.indexOf(search) > -1
      })
    },

    // фильтрации списка на странице Избранное по имени.
    searchNameOnFavourites() {
      let search = this.names
      return this.likedWarehouses.filter(function (elem) {
        if (search === '') return true
        else return elem.name.indexOf(search) > -1
      })
    },
  },

  actions: {
    // извлекает список складов из веб-API. Возвращает объекты из этой коллекции и сохраняет их в переменной warehouses.
    async fetchWarehouse() {
      this.warehouses = await fetch('/api/warehouses').then((res) => res.json())
      console.log('> index, fetchWarehouse => this.warehouses ', this.warehouses)
    },

    // добавляет товар в корзину. Проверяет, есть ли уже такой же товар в корзине. Если да, то количество этого товара увеличивается, иначе товар добавляется с количеством 1.
    async addToDeals(warehouse) {
      const item = this.deals.find((p) => p.id === warehouse.id)

      if (item) {
        item.quantity++
      } else {
        this.deals.push({ ...warehouse, quantity: 1 })
      }
    },

    // переключает значение лайка на элементе с указанным ID. Если аргумент force не указан, значение лайка будет переключено на противоположное. Если указан аргумент force, то значение лайка будет установлено в соответствии с его значением
    async toggleLiked(id, force) {
      this.liked[id] = force === undefined ? !this.liked[id] : force
    },
  },
})
