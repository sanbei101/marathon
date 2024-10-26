<template>
  <n-layout-footer
    style="
      z-index: 10;
      position: fixed;
      bottom: 4rem;
      left: 55%;
      transform: translateX(-50%);
      max-width: 100vw;
      display: flex;
    ">
    <n-space align="center" justify="center" style="width: 100%; display: flex">
      <n-input v-model:value="chatMessage" placeholder="请输入消息" style="flex: 1; margin-right: 8px" />
      <n-button type="success" strong @click="prop.sendMessage">发送</n-button>
    </n-space>
  </n-layout-footer>
</template>

<script setup lang="ts">
// 消息输入框的值
// const chatMessage = ref<string>('');
const chatMessage = defineModel<string>('chatMessage', { type: String, default: '' });
// 消息提示
const prop = defineProps<{
  sendMessage: () => void;
}>();
// Pinia 状态存储

// // 发送消息逻辑
// const sendMessage = async () => {
//   if (!chatMessage.value) {
//     message.error('消息不能为空');
//     return;
//   }

//   // 将用户消息添加到右侧消息列表
//   messageStore.addMessage({ content: chatMessage.value, position: 'right' });

//   // 清空输入框
//   chatMessage.value = '';

//   // 调用 AI 回复逻辑
//   await replyMessage();
// };

// // AI 回复消息逻辑
// const replyMessage = async () => {
//   if (messageStore.messages.length === 0) {
//     message.error('无有效消息');
//     return;
//   }

//   // 添加一条初始的空白 AI 回复消息
//   const aiMessageIndex = messageStore.messages.length;
//   messageStore.addMessage({ content: 'AI 正在输入...', position: 'left' });

//   try {
//     const stream = await openai.chat.completions.create({
//       model: 'deepseek-chat',
//       messages: [
//         { role: 'system', content: '你是一个AI,回答我的问题!' },
//         { role: 'user', content: messageStore.messages[aiMessageIndex - 1].content }
//       ],
//       stream: true
//     });

//     let aiResponse = '';

//     for await (const chunk of stream) {
//       if (chunk.choices[0]?.delta?.content) {
//         aiResponse += chunk.choices[0].delta.content;
//         messageStore.updateMessageContent(aiMessageIndex, aiResponse);
//       }
//     }
//   } catch (error) {
//     message.error('AI回复失败');
//     console.error('AI 请求出错:', error);
//   }
// };
</script>
