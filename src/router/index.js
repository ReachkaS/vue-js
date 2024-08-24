import { createWebHistory, createRouter } from "vue-router";
import homepage from "@/views/home.vue";
import ListEvent from "@/views/listEvent.vue";
import RequestItem from "@/views/requestItem.vue";  
import AddItem from "@/views/addItem.vue";
import ListRequest from "@/views/listRequest.vue";
import ReturnItem from "@/views/returnItem.vue";
import DeposeItem from "@/views/deposeItem.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: homepage,
  },
  {
    path: "/listEvent",
    name: "listEvent",
    component: ListEvent,
  },
  {
    path: "/listEvent/requestItem",
    name: "requestItem",
    component: RequestItem,
  },
  {
    path: "/listEvent/listRequest/addItem",
    name: "addItem",
    component: AddItem,
  },
  {
    path: "/listEvent/listRequest",
    name: "listRequest",
    component: ListRequest,
  },
  {
    path: "/listEvent/listRequest/returnItem",
    name: "returnItem",
    component: ReturnItem,
  },
  {
    path: "/listEvent/listRequest/deposeItem",
    name: "deposeItem",
    component: DeposeItem,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;