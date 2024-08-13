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
    path: "/LISTEVENT",
    name: "listEvent",
    component: ListEvent,
  },
  {
    path: "/REQUESTITEM",
    name: "requestItem",
    component: RequestItem,
  },
  {
    path: "/ADDITEM",
    name: "addItem",
    component: AddItem,
  },
  {
    path: "/LISTREQUEST",
    name: "listRequest",
    component: ListRequest,
  },
  {
    path: "/RETURNITEM",
    name: "returnItem",
    component: ReturnItem,
  },
  {
    path: "/DEPOSEITEM",
    name: "deposeItem",
    component: DeposeItem,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;