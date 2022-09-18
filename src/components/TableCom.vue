<template>
  <div>
    <div class="table">
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Номер накладной</th>
          <th>Тип заказа</th>
          <th>Дата создания</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in tableDate" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.number }}</td>
          <td>{{ typeLang(item.type) }}</td>
          <td>{{ dateTime(item.creationDate) }}</td>
          <td @click="deleteGoods(item)">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/></svg>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import {AxiosResponse} from "axios";

@Component

export default class Table extends Vue {

  tableDate = [];

  @Watch('$store.state.search')
  getSearch(): void {
    this.axios.get('http://localhost:3000/posts', {
    }).then((response: AxiosResponse) => {
      this.tableDate = response.data.filter((item: any) => item.number.toLowerCase().indexOf(this.$store.state.search.toLowerCase()) > -1)
    });
  }

  @Watch('$store.state.sort')
  getSort(): void {
    if (this.$store.state.sort) {
      this.tableDate.sort((a: any, b: any) => {
        if (a.number > b.number) {
          return 1;
        }
        if (a.number < b.number) {
          return -1;
        }
        return 0;
      })
    }
    if (!this.$store.state.sort) {
      this.tableDate.sort((a: any, b: any) => {
        if (a.number > b.number) {
          return -1;
        }
        if (a.number < b.number) {
          return 1;
        }
        return 0;
      })
    }
  }

  @Watch('$store.state.params')
  setSeach(): void {
    if (this.$store.state.params !== '') {
      this.axios.get('http://localhost:3000/posts', {
        params: {
          type: String(this.$store.state.params)
        }
      }).then((response: AxiosResponse) => {
        this.tableDate = response.data
      });
    }
  }

  created(): void {
    this.getItems()
  }

  getItems(): void {
    this.axios.get('http://localhost:3000/posts', {}).then((response: AxiosResponse) => {
      this.tableDate = response.data
    })
  }

  dateTime(item: string): string {
    return item.slice()
  }

  deleteGoods(item: any):void {
    this.tableDate.splice(this.tableDate.indexOf(item), 1);
  }

  typeLang(item: string): string {
    if (item === 'Pickup') {
      return 'Самовывоз'
    }
    if (item === 'Delivery') {
      return 'Курьерская доставка'
    }
    if (item === 'Pick-point') {
      return 'Доставка в пункт выдачи'
    }
    return '';
  }

}
</script>

<style lang="scss">
tr {
  background-color: white;
  height: 40px;
  border-bottom: none;
}

tr:last-child {
  border-bottom: 4px solid white !important;
}

table {
  margin-left: 16px;
  width: 100%;
  border-collapse: collapse;
}

tbody > tr > td {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  color: #000000;
  padding: 5px;
  border-bottom: 1px solid #E5E5E5;
}

th:not(:last-child) {
  border-right: #E5E5E5 3px solid;
}

th {
  height: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  background: #E6E6E6;
}
</style>