import { defineStore } from 'pinia'

export const useWarehouseStore = defineStore('warehouses-store', {
  state: () => {
    return {
      // warehouses: useLocalStorage('warehouses', []),
      // deals: useLocalStorage('deals', []),
      warehouses: [],
      deals: {
        total: 0,
      },
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
      console.log(
        '>index,  likedWarehouses:',
        this.warehouses.filter((warehouse) => warehouse.liked)
      )
      return this.warehouses.filter((warehouse) => warehouse.liked)
    },

    // вычисляет общее количество deals, складывая значение свойства quantity каждого объекта deals с текущим значением total.
    numberOfDeals() {
      return this.deals
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
      const deals = this.deals
      return this.warehouses.filter(function (elem) {
        if (deals[elem.id] === undefined) return false
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
      const item = this.deals[warehouse.id]

      if (item) {
        item.quantity++
        item.price = (item.quantity * item.price) / (item.quantity - 1)
      } else {
        this.deals[warehouse.id] = { quantity: 1, price: parseFloat(warehouse.cost.replace(' ', '')) }
      }

      this.deals.total++
    },

    // переключает значение лайка на элементе с указанным ID. Если аргумент force не указан, значение лайка будет переключено на противоположное. Если указан аргумент force, то значение лайка будет установлено в соответствии с его значением
    async toggleLiked(id, force) {
      const item = this.item(id)
      console.log('> index, toggleLiked => item ', item)
      item.liked = force === undefined ? !item.liked : force
      console.log('> index, toggleLiked => item.liked', item.liked)
    },
  },
})
