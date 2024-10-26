import { createRouter, createMemoryHistory } from 'vue-router';

const MindMap = () => import('@/components/map/MindMap.vue');
const TaroCard = () => import('@/components/taro/TaroCard.vue');
const Chat = () => import('@/components/chat/ChatMessage.vue');
const routes = [
  {
    path: '/',
    name: 'Home',
    component: TaroCard
  },
  {
    path: '/mind-map',
    name: 'MindMap',
    component: MindMap
  },
  {
    path: '/taro-card',
    name: 'TaroCard',
    component: TaroCard
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

export default router;
