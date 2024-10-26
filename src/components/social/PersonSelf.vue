<template>
  <n-card title="介绍一下你自己">
    <n-form>
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
        <n-button type="primary" @click="handleSubmit">生成数字肖像</n-button>
      </n-form-item>
    </n-form>
  </n-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useFormDataStore } from '@/store';
const formDataStore = useFormDataStore();
const formData = ref({
  personality: '',
  hobbies: [] as string[],
  socialPreference: '',
  other: ''
});
const router = useRouter();
const handleSubmit = () => {
  console.log('点击了提交按钮');
  // Store the form data in Pinia
  formDataStore.setFormData(formData.value);

  // Navigate to the next route without passing data via params or query
  router.push({ name: 'PersonMap' });
};
</script>
