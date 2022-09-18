import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Table from "@/components/TableCom.vue";
import ItemBlock from "@/components/ItemBlock.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/table',
    name: 'table',
    component: Table,
  },
  {
    path: '/item-block',
    name: 'itemBlock',
    component: ItemBlock,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
