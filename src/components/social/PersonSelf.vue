<template>
  <n-card title="介绍一下你自己">
    <n-form @submit.prevent="handleSubmit">
      <!-- 性格部分 -->
      <n-form-item label="请描述您的性格">
        <n-input v-model:value="formData.personality" placeholder="请输入您的性格描述" />
      </n-form-item>

      <!-- 日常爱好部分 -->
      <n-form-item label="请选择您的日常爱好">
        <n-checkbox-group v-model:value="formData.hobbies">
          <n-checkbox value="阅读">阅读</n-checkbox>
          <n-checkbox value="运动">运动</n-checkbox>
          <n-checkbox value="旅游">旅游</n-checkbox>
          <n-checkbox value="音乐">音乐</n-checkbox>
          <n-checkbox value="电影">电影</n-checkbox>
        </n-checkbox-group>
      </n-form-item>

      <!-- 其他信息 -->
      <n-form-item label="您是否喜欢社交活动？">
        <n-radio-group v-model:value="formData.socialPreference">
          <n-radio value="like">喜欢</n-radio>
          <n-radio value="unlike">不喜欢</n-radio>
        </n-radio-group>
      </n-form-item>

      <n-form-item label="其他描述">
        <n-input type="textarea" v-model:value="formData.other" placeholder="请输入其他您想描述的内容" />
      </n-form-item>

      <!-- 提交按钮 -->
      <n-form-item>
        <n-button type="primary" @click="handleSubmit">提交</n-button>
      </n-form-item>
    </n-form>
  </n-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  personality: '',
  hobbies: [] as string[],
  socialPreference: '',
  other: ''
});

const handleSubmit = () => {
  console.log('表单数据:', formData.value);
  // 您可以在此处执行提交操作，比如发送到后端API或进一步处理数据
  alert('表单提交成功！');
};
</script>
