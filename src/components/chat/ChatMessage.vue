<template>
  <div class="chat-container flex flex-col p-5 max-w-[80%] m-auto">
    <div v-for="(message, index) in messages" :key="index" class="mt-3">
      <ChatBubble :content="message.content" :position="message.position" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from '@/components/chat/ChatBubble.vue';
import { useMessageStore } from '@/store';

const messageStore = useMessageStore();

const messages = messageStore.messages;
</script>
