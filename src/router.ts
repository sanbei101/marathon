import { createRouter, createMemoryHistory } from 'vue-router';
import SocialMessage from './components/social/SocialMessage.vue';
const TaroUser = () => import('@/components/chat/TaroUser.vue');
const Statisic = () => import('@/components/social/Statistic.vue');
const MindMap = () => import('@/components/map/MindMap.vue');
// const TaroCard = () => import('@/components/taro/TaroCard.vue');
const Chat = () => import('@/components/chat/ChatMessage.vue');
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Statisic
  },
  {
    path: '/mind-map',
    name: 'MindMap',
    component: MindMap
  },
  {
    path: '/taro-card',
    name: 'TaroCard',
    component: TaroUser
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/social',
    name: 'social',
    component: SocialMessage
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

export default router;
