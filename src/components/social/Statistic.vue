<template>
  <div class="container">
    <!-- 标题 -->
    <n-gradient-text type="info" :size="36" class="title"> 社交魔法屋 </n-gradient-text>

    <!-- 统计信息 -->
    <n-statistic :label="`遇到了${prop.MatchedUser}个匹配的灵魂`" class="statistic" tabular-nums>
      <template #prefix> 发现了 </template>
      <n-number-animation
        ref="numberAnimationInstRef"
        :from="100000"
        :to="prop.MatchedUser"
        :duration="4000" />
      <template #suffix> 个用户和您可能匹配 </template>
    </n-statistic>

    <!-- 底部文本 -->
    <n-space vertical class="message">
      <transition name="fade" mode="out-in">
        <div v-if="currentMessage" :key="messageIndex">{{ currentMessage }}</div>
      </transition>
    </n-space>

    <!-- 其他组件 -->
  </div>
  <TaroUser />
</template>

<script setup lang="ts">
import { NStatistic, NNumberAnimation, NGradientText, NSpace } from 'naive-ui';

const prop = withDefaults(
  defineProps<{
    MatchedUser?: number;
  }>(),
  {
    MatchedUser: 9
  }
);
const tempMessages = [
  '正在筛选年龄相近',
  '正在筛选性格匹配',
  '正在筛选热爱探索',
  '正在筛选兴趣相投',
  '正在筛选聊天话题',
  '正在筛选沟通风格',
  '正在筛选情绪表达'
];
// 定义当前显示的消息和当前消息索引
const currentMessage = ref<string>('');
let messageIndex = 0;

// 显示下一条消息，并在最后一条消息后停止
const displayNextMessage = () => {
  if (messageIndex < tempMessages.length) {
    // 更新当前消息内容
    currentMessage.value = tempMessages[messageIndex];
    // 更新索引
    messageIndex++;
    // 如果未到最后一条消息，则继续递归调用
    setTimeout(displayNextMessage, 4000 / tempMessages.length);
  }
};

onMounted(() => {
  // 立即显示第一条消息并开始递归调用
  displayNextMessage();
});
</script>

<style scoped>
/* 容器样式 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f7fa; /* 背景色 */
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 标题样式 */
.title {
  font-weight: bolder;
  margin-bottom: 16px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

/* 统计组件样式 */
.statistic {
  font-size: 18px;
  color: #4a4a4a;
  margin-bottom: 16px;
}

/* 底部文本样式 */
.message {
  font-size: 14px;
  color: #666;
  text-align: center;
  line-height: 1.6;
  margin-top: 20px;
  padding: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
