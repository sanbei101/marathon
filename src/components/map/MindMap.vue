<template>
  <mindmap v-model="data"></mindmap>
</template>

<script setup lang="ts">
import mindmap from 'vue3-mindmap';
import 'vue3-mindmap/dist/style.css';

const data = ref([
  {
    name: '如何学习D3',
    children: [
      {
        name: '预备知识',
        children: [{ name: 'HTML & CSS' }, { name: 'JavaScript' }]
      },
      {
        name: '安装',
        children: [{ name: '折叠节点' }]
      },
      { name: '进阶', left: true }
    ]
  }
]);
</script>
