<template>
  <div class="main-card">
    <div class="card" v-for="item in tableDate" :key="item.id">
      <div class="header-card">
        <h3>{{item.id}}</h3>
        <svg @click="deleteGoods(item)" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/></svg>
      </div>
      <div class="content-cart">
        <div>
          <p class="name">Номер накладной:</p>
          <p class="name-item">{{item.number}}</p>
        </div>
        <div>
          <p class="name">Дата создания:</p>
          <p class="name-item">{{item.creationDate}}</p>
        </div>
        <div>
          <p class="name">Тип заказа:</p>
          <p class="name-item">{{typeLang(item.type)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue, Watch} from "vue-property-decorator";
import {AxiosResponse} from "axios";

@Component

export default class ItemBlock extends Vue{

  tableDate = [];

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
    if(this.$store.state.params !== '') {
      this.axios.get('http://localhost:3000/posts', {
        params: {
          type: String(this.$store.state.params)
        }
      }).then((response: AxiosResponse) => {
        this.tableDate = response.data
      });
    }
  }


  deleteGoods(item: any):void {
    this.tableDate.splice(this.tableDate.indexOf(item), 1);
  }

  created(): void {
    this.axios.get('http://localhost:3000/posts').then((response: AxiosResponse) => {
      this.tableDate = response.data
    })
  }

  typeLang(item: string): string {
    if(item === 'Pickup'){
      return 'Самовывоз'
    }
    if(item === 'Delivery'){
      return 'Курьерская доставка'
    }
    if(item === 'Pick-point') {
      return 'Доставка в пункт выдачи'
    }
    return '';
  }
}
</script>

<style lang="scss" scoped>
.name-item{
  margin: 16px 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
}
.name{
  margin: 16px 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #647A8C;
}
.content-cart{
  height: 130px;
  flex-direction: column;
  display: flex;
  background: #F6FAFB;
  div {
    display: flex;
    p{
      margin: 8px;
      flex: 1;
    }
  }
}
.main-card{
  height: 47vh;
  overflow: auto;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 4px 12px #EBEBEB;
}
.card {
  margin: 8px 8px 16px 16px;
  width: 290px;
  height: 180px;
}
.header-card{
  display: flex;
  align-items: center;
  background: rgba(237, 232, 245, 0.5);
  height: 40px;
  width: 100%;
  justify-content: space-between;
  h3 {
    margin: 16px 12px;
  }
}
</style>