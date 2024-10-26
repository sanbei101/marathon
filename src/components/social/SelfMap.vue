<template>
  <div class="mindmap-container">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <div class="loading-text">正在生成人物肖像...</div>
    </div>
    <mindmap v-if="showMindmap" :modelValue="mindmapData" key="mindmap"></mindmap>
    <!-- <chat-input v-model:chat-message="chatMessage" :send-message="getAIResponse" /> -->
    <n-button v-if="showMindmap" @click="navigateToStatistic">前往匹配</n-button>
  </div>
</template>

<script setup lang="ts">
import mindmap from 'vue3-mindmap';
import { openai } from '@/utils';
import { system_prompt } from './SelfMapPrompt';
import 'vue3-mindmap/dist/style.css';
import { useFormDataStore } from '@/store';
import { useRouter } from 'vue-router';

const formDataStore = useFormDataStore();

// const chatMessage = ref<string>('');
const showMindmap = ref(false);
const isLoading = ref(false);
const router = useRouter();
const navigateToStatistic = () => {
  router.push('/statistic');
};
type MindMapNode = {
  name: string;
  children?: MindMapNode[];
  left?: boolean;
};

const mindmapData = ref<MindMapNode[]>([]);

watchEffect(() => {
  if (mindmapData.value && mindmapData.value.length > 0) {
    showMindmap.value = true;
  } else {
    showMindmap.value = false;
  }
});
const age = computed(() => formDataStore.age);
const occupation = computed(() => formDataStore.occupation);
const personality = computed(() => formDataStore.personality);
const socialType = computed(() => formDataStore.socialType);
const communicationApproach = computed(() => formDataStore.communicationApproach);
const communicationStyle = computed(() => formDataStore.communicationStyle);
const socialPreference = computed(() => formDataStore.socialPreference);

const hobbies = computed(() => formDataStore.hobbies);
const favoriteActivity = computed(() => formDataStore.favoriteActivity);

const communicationTone = computed(() => formDataStore.communicationTone);
const sharingPreference = computed(() => formDataStore.sharingPreference);

const emotionalExpression = computed(() => formDataStore.emotionalExpression);
const happyExpression = computed(() => formDataStore.happyExpression);

const other = computed(() => formDataStore.other);

const getAIResponse = async () => {
  showMindmap.value = false;
  mindmapData.value = [];
  isLoading.value = true;

  const user_prompt = `用户的基本信息：
年龄：${age.value ?? '未提供'}
职业：${occupation.value || '未提供'}

个性特征：
性格特点：${personality.value || '未提供'}
社交类型：${socialType.value || '未提供'}
沟通倾向：${communicationApproach.value || '未提供'}
沟通风格：${communicationStyle.value || '未提供'}
社交偏好：${socialPreference.value || '未提供'}

兴趣爱好：
主要兴趣爱好：${hobbies.value.join(', ') || '未提供'}
最喜欢的活动：${favoriteActivity.value || '未提供'}

沟通偏好：
沟通语言偏好：${communicationTone.value || '未提供'}
分享倾向：${sharingPreference.value || '未提供'}

情绪管理与表达：
情绪表达方式：${emotionalExpression.value || '未提供'}
表达愉悦的方式：${happyExpression.value || '未提供'}

其他描述：
${other.value || '无其他描述'}
`;
  console.log('用户输入:', user_prompt);
  try {
    const stream = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: system_prompt },
        { role: 'user', content: user_prompt }
      ],
      response_format: {
        type: 'json_object'
      },
      stream: true
    });

    let responseText = '';

    for await (const chunk of stream) {
      if (chunk.choices[0]?.delta?.content) {
        responseText += chunk.choices[0].delta.content;
      }
    }
    console.log('AI回复:', responseText);
    const parsedData = JSON.parse(responseText) as MindMapNode;
    mindmapData.value = [parsedData];
  } catch (error) {
    console.error('获取AI传输流失败:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {});
watchEffect(() => {
  getAIResponse();
});
</script>

<style scoped>
.mindmap-container {
  position: relative;
  height: 100vh; /* 使整个组件占满视窗 */
}

/* 确保mindmap组件有足够的显示空间 */
:deep(.vue3-mindmap) {
  width: 100%;
  height: 600px;
  margin: 20px 0;
}

.loading-overlay {
  position: fixed; /* 改成 fixed 使其覆盖整个屏幕 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh; /* 高度改为视窗高度 */
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 20px;
  color: #666;
  font-size: 16px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
