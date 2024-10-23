<template>
  <n-config-provider :theme="darkTheme">
    <n-global-style />
    <n-layout has-sider style="height: 100vh">
      <!-- AppMenu -->
      <app-menu />

      <n-layout>
        <chat-header />

        <chat-input />
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui';
</script>
