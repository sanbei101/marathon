<template>
  <div class="chat-container flex flex-col p-5 max-w-[80%] m-auto">
    <div v-for="(message, index) in messages" :key="index" class="mt-3">
      <ChatBubble :content="message.content" :position="message.position" />
    </div>

    <!-- <chat-input :send-message="sendMessage" v-model:chat-message="chatMessage" /> -->
  </div>
</template>

<script setup lang="ts">
import ChatBubble from '@/components/chat/ChatBubble.vue';
import { useChatContextStore, useFormDataStore, useMessageStore } from '@/store';
let index: number = 0;
const userData = useFormDataStore();
const chatContext = useChatContextStore();
const MyContext = userData.getFormattedData();
const HerContext = chatContext.getHerContext;

const messageStore = useMessageStore();

const messages = messageStore.messages;

const message = useMessage();
import { openai } from '@/utils';
import { getSystemPrompt } from './chatPrompt';
const nextMessage = ref<boolean>(true);
const replyMessage = async () => {
  if (messageStore.messages.length === 0) {
    message.error('无有效消息');
    return;
  }

  // 添加一条初始的空白 AI 回复消息
  const aiMessageIndex = messageStore.messages.length;
  messageStore.addMessage({ content: 'AI 正在输入...', position: 'left' });

  try {
    const stream = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: getSystemPrompt(MyContext, HerContext) },
        { role: 'user', content: messageStore.messages[aiMessageIndex - 1].content }
      ],
      stream: true
    });

    let aiResponse = '';

    for await (const chunk of stream) {
      if (chunk.choices[0]?.delta?.content) {
        aiResponse += chunk.choices[0].delta.content;
        messageStore.updateMessageContent(aiMessageIndex, aiResponse);
      }
    }
  } catch (error) {
    message.error('AI回复失败');
    console.error('AI 请求出错:', error);
  } finally {
    setTimeout(() => {
      nextMessage.value = true;
    }, 500);
  }
};

const candidateMessage: string[] = ['在吗,吃了没', '下午去看电影吗', '晚上出去玩吗'];
const sendMessage = async () => {
  if (!nextMessage.value) {
    return;
  }
  const length = candidateMessage.length;
  if (index >= length) {
    return;
  }
  messageStore.addMessage({ content: candidateMessage[index], position: 'right' });
  index++;
  nextMessage.value = false;

  await replyMessage();
};
// 发送消息逻辑
onMounted(() => {
  sendMessage();
});
watchEffect(() => {
  if (nextMessage.value) {
    sendMessage();
  }
});
</script>
