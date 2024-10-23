<template>
  <div class="chat-container flex flex-col p-5 max-w-[80%] m-auto">
    <div v-for="(message, index) in messages" :key="index" class="mt-3">
      <ChatBubble :content="message.content" :position="message.position" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChatBubble from './ChatBubble.vue'; // 引入气泡组件

// 定义消息数组,每条消息包含内容和气泡位置
const messages = ref([
  { content: '你好!这是一个AI气泡演示。', position: 'left' },
  {
    content: '**AI:** 这是一段AI生成的markdown文本,可以使用**加粗**,也可以使用*斜体*。',
    position: 'right'
  },
  { content: 'Markdown-it 是一个非常强大的库,它允许将 markdown 转换为 HTML。', position: 'left' },
  { content: '_聊天功能实现得非常棒!_', position: 'right' }
]);
</script>
