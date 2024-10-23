<template>
  <n-layout-sider
    :width="120"
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="80"
    v-model:collapsed="collapsed">
    <n-flex vertical align="center">
      <n-button strong secondary circle type="success" style="margin-top: 1rem">
        <n-icon :size="30" :depth="2">
          <InfiniteOutline />
        </n-icon>
      </n-button>
      <n-divider />
      <n-menu
        :options="menuOptions"
        mode="vertical"
        :collapsed="collapsed"
        :collapsed-width="80"
        :collapsed-icon-size="20" />
    </n-flex>
  </n-layout-sider>
</template>

<script setup lang="ts">
import { NIcon, type MenuOption } from 'naive-ui';
import { HomeOutline, SettingsOutline, InfiniteOutline } from '@vicons/ionicons5';
import { renderIcon } from '@/utils';

const collapsed = ref<boolean>(false);

const menuOptions: MenuOption[] = [
  {
    key: 'home',
    label: '首页',
    icon: renderIcon(HomeOutline)
  },
  {
    key: 'settings',
    label: '设置',
    icon: renderIcon(SettingsOutline)
  }
];
</script>
