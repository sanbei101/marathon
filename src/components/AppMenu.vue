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
import { RouterLink } from 'vue-router';
const collapsed = ref<boolean>(false);

const menuOptions: MenuOption[] = [
  {
    key: 'MindMap',
    label: () =>
      h(RouterLink, {
        to: {
          name: 'MindMap'
        }
      }),
    icon: renderIcon(HomeOutline)
  },
  {
    key: 'TaroCard',
    label: () =>
      h(RouterLink, {
        to: {
          name: 'TaroCard'
        }
      }),
    icon: renderIcon(SettingsOutline)
  },
  {
    key: 'Chat',
    label: () =>
      h(RouterLink, {
        to: {
          name: 'Statisic'
        }
      }),
    icon: renderIcon(InfiniteOutline)
  }
];
</script>
