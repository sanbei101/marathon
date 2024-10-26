<template>
  <n-gradient-text type="info" :size="32" style="font-weight: bolder"> 社交魔法屋 </n-gradient-text>

  <n-statistic :label="`遇到了${prop.MatchedUser}个匹配的灵魂`" tabular-nums>
    <template #prefix> 发现了 </template>
    <n-number-animation ref="numberAnimationInstRef" :from="0" :to="prop.MatchedUser" />
    <template #suffix> 个用户和您可能匹配 </template>
  </n-statistic>
  <n-space vertical> 花时间、花精力、花心思，愿你每一份努力都不负所望 </n-space>
  <TaroUser />
</template>

<script setup lang="ts">
import { NStatistic, NNumberAnimation } from 'naive-ui';

const prop = withDefaults(
  defineProps<{
    MatchedUser?: number;
  }>(),
  {
    MatchedUser: 9
  }
);
</script>
