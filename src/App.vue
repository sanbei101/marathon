<template>
  <n-config-provider>
    <n-layout has-sider style="height: 100vh">
      <!-- 侧边栏 -->
      <n-layout-sider :width="80" bordered>
        <n-menu :options="menuOptions" mode="vertical" />
      </n-layout-sider>

      <n-layout>
        <n-layout-header>ChatGPT 模拟聊天界面</n-layout-header>

        <n-layout-footer>© 2024 ChatGPT Web 界面</n-layout-footer>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NIcon, type MenuOption } from 'naive-ui';
import { HomeOutline, SettingsOutline } from '@vicons/ionicons5';
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};

const menuOptions: MenuOption[] = [
  {
    key: 'home',
    icon: renderIcon(HomeOutline)
  },
  {
    key: 'settings',
    icon: renderIcon(SettingsOutline)
  }
];
</script>
