<template>
  <div class="container">
    <!-- 标题 -->
    <n-gradient-text type="info" :size="36" class="title"> 社交魔法屋 </n-gradient-text>

    <!-- 统计信息 -->
    <n-statistic :label="`遇到了${prop.MatchedUser}个匹配的灵魂`" class="statistic" tabular-nums>
      <template #prefix> 发现了 </template>
      <n-number-animation ref="numberAnimationInstRef" :from="0" :to="prop.MatchedUser" />
      <template #suffix> 个用户和您可能匹配 </template>
    </n-statistic>

    <!-- 底部文本 -->
    <n-space vertical class="message"> 花时间、花精力、花心思，愿你每一份努力都不负所望 </n-space>

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
</style>
