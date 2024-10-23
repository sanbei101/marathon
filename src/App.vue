<template>
  <n-config-provider :theme="darkTheme">
    <n-global-style />
    <n-layout has-sider style="height: 100vh">
      <!-- 侧边栏 -->
      <app-menu />

      <n-layout>
        <n-layout-header>ChatGPT 模拟聊天界面</n-layout-header>

        <n-layout-footer>© 2024 ChatGPT Web 界面</n-layout-footer>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui';
</script>
