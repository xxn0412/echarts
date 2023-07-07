import { createApp } from 'vue'

import axios from 'axios';

import * as echarts from 'echarts'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'

import App from './App.vue'
import menu from "./pages/menu.vue"
import index from "./pages/index.vue"
import alert from "./pages/alert.vue"
import healthy from "./pages/healthy.vue"
import environment from "./pages/environment.vue"
import device from "./pages/device.vue"
import location from "./pages/location.vue"
import service from "./pages/service.vue"
import call from "./pages/call.vue"

import {
    createRouter,
    createWebHashHistory
} from "vue-router";

const routes = [{
    path: '/',
    redirect: "/menu"
},
{
    name: 'menu',
    path: '/menu',
    component: menu
},
{
    name: 'index',
    path: '/index',
    component: index
},
{
    name: 'alert',
    path: '/alert',
    component: alert
},
{
    name: 'healthy',
    path: '/healthy',
    component: healthy
},
{
    name: 'environment',
    path: '/environment',
    component: environment
},
{
    name: 'device',
    path: '/device',
    component: device
},
{
    name: 'location',
    path: '/location',
    component: location
},
{
    name: 'service',
    path: '/service',
    component: service
},
{
    name: 'call',
    path: '/call',
    component: call
}
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

const app = createApp(App)

// vue3 给原型上挂载属性
app.config.globalProperties.$echarts = echarts;

for (const name in ElIcons) {
    app.component(name, ElIcons[name])
}
app.use(router);
app.use(ElementPlus);

app.mount('#app')