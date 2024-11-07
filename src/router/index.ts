import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import index from '@/pages/index.vue';
import RadioGroup from '@/pages/RadioGroup.vue';
import Select from '@/pages/Select.vue';
import Skeleton from '@/pages/Skeleton.vue';
import Slider from '@/pages/Slider.vue';
import Switch from '@/pages/Switch.vue';
import TanStackTable from '@/pages/TanStackTable.vue';
import UserInfo from '@/pages/UserInfo.vue';


const routes: Array<RouteRecordRaw> = [
  { path: '/', component: index, name: 'index' },
  { path: '/RadioGroup', component: RadioGroup, name: 'RadioGroup' },
  { path: '/Select', component: Select, name: 'Select' },
  { path: '/Skeleton', component: Skeleton, name: 'Skeleton' },
  { path: '/Slider', component: Slider, name: 'Slider' },
  { path: '/Switch', component: Switch, name: 'Switch' },
  { path: '/TanStackTable', component: TanStackTable, name: 'TanStackTable' },
  { path: '/UserInfo', component: UserInfo, name: 'UserInfo' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
