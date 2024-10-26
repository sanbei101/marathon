<template>
  <n-card title="介绍一下你自己">
    <n-form>
      <!-- 基本信息 -->
      <n-form-item label="您的年龄是？">
        <n-input-number v-model:value="formData.age" placeholder="请输入您的年龄" />
      </n-form-item>

      <n-form-item label="您的职业和工作领域是？">
        <n-input v-model:value="formData.occupation" placeholder="请输入您的职业和工作领域" />
      </n-form-item>

      <!-- 个性特征模块 -->
      <n-form-item label="请描述您的性格特点">
        <n-input v-model:value="formData.personality" placeholder="请输入您的性格特点" />
      </n-form-item>

      <n-form-item label="您认为自己在社交中属于以下哪种类型？">
        <n-radio-group v-model:value="formData.socialType">
          <n-radio value="introvert">内向</n-radio>
          <n-radio value="extrovert">外向</n-radio>
          <n-radio value="ambivert">两者皆有</n-radio>
        </n-radio-group>
      </n-form-item>

      <n-form-item label="您在沟通时是否倾向于主动还是被动？">
        <n-radio-group v-model:value="formData.communicationApproach">
          <n-radio value="active">主动</n-radio>
          <n-radio value="passive">被动</n-radio>
        </n-radio-group>
      </n-form-item>

      <n-form-item label="您的沟通风格是偏理性、感性、还是幽默？">
        <n-radio-group v-model:value="formData.communicationStyle">
          <n-radio value="rational">理性</n-radio>
          <n-radio value="emotional">感性</n-radio>
          <n-radio value="humorous">幽默</n-radio>
        </n-radio-group>
      </n-form-item>

      <!-- 兴趣爱好模块 -->
      <n-form-item label="您的主要兴趣爱好是什么？">
        <n-checkbox-group v-model:value="formData.hobbies">
          <n-checkbox value="reading">阅读</n-checkbox>
          <n-checkbox value="sports">运动</n-checkbox>
          <n-checkbox value="traveling">旅游</n-checkbox>
          <n-checkbox value="music">音乐</n-checkbox>
          <n-checkbox value="movies">电影</n-checkbox>
          <n-checkbox value="gaming">游戏</n-checkbox>
        </n-checkbox-group>
      </n-form-item>

      <n-form-item label="您最喜欢的活动或消遣方式是什么？">
        <n-input v-model:value="formData.favoriteActivity" placeholder="请输入您的喜好" />
      </n-form-item>

      <!-- 沟通偏好模块 -->
      <n-form-item label="您的日常沟通语言偏好是？">
        <n-radio-group v-model:value="formData.communicationTone">
          <n-radio value="formal">正式</n-radio>
          <n-radio value="casual">随意</n-radio>
          <n-radio value="humorous">幽默</n-radio>
          <n-radio value="professional">专业</n-radio>
        </n-radio-group>
      </n-form-item>

      <n-form-item label="您更喜欢主动分享还是倾听他人的观点？">
        <n-radio-group v-model:value="formData.sharingPreference">
          <n-radio value="sharing">主动分享</n-radio>
          <n-radio value="listening">倾听他人</n-radio>
        </n-radio-group>
      </n-form-item>

      <!-- 情绪管理与表达模块 -->
      <n-form-item label="您认为自己容易情绪外露还是内敛？">
        <n-radio-group v-model:value="formData.emotionalExpression">
          <n-radio value="outward">情绪外露</n-radio>
          <n-radio value="reserved">内敛</n-radio>
        </n-radio-group>
      </n-form-item>

      <n-form-item label="您在与人沟通时如何表达愉悦？">
        <n-input
          v-model:value="formData.happyExpression"
          placeholder="例如：笑脸表情、直接表达、幽默语言等" />
      </n-form-item>
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
  // 基本信息
  age: 25, // 默认年龄设为25岁
  occupation: '学生', // 默认职业

  // 个性特征模块
  personality: '温和', // 默认性格特点
  socialType: 'ambivert', // 默认为两者皆有（内向和外向）
  communicationApproach: 'active', // 默认为主动
  communicationStyle: 'rational', // 默认为理性
  socialPreference: 'like', // 默认社交偏好为喜欢

  // 兴趣爱好模块
  hobbies: ['阅读', '音乐'], // 默认爱好
  favoriteActivity: '散步', // 默认喜欢的活动

  // 沟通偏好模块
  communicationTone: '随意', // 默认语言偏好
  sharingPreference: 'sharing', // 默认倾向为主动分享

  // 情绪管理与表达模块
  emotionalExpression: 'outward', // 默认情绪表达方式为外露
  happyExpression: '直接表达', // 默认表达愉悦的方式

  // 其他描述
  other: '暂无其他描述' // 默认其他描述
});

const router = useRouter();
const handleSubmit = () => {
  console.log('点击了提交按钮');
  console.log('formData:', formData.value);
  // Store the form data in Pinia
  formDataStore.setFormData(formData.value);

  // Navigate to the next route without passing data via params or query
  router.push({ name: 'PersonMap' });
};
</script>
