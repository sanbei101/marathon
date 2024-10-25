<template>
  <n-config-provider>
    <n-message-provider>
      <n-global-style />
      <n-layout has-sider style="height: 100vh">
        <!-- 侧边栏 -->
        <app-menu />

        <!-- 主内容区域 -->
        <n-layout>
          <!-- 头部 -->
          <chat-header />

          <!-- 聊天消息列表 -->
          <!-- <chat-message /> -->
          <MindMap />

          <!-- 底部输入框 -->
          <chat-input />
        </n-layout>
      </n-layout>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import MindMap from './components/map/MindMap.vue';
</script>
