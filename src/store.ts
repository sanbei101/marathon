import { defineStore } from 'pinia';
import { messageType } from '@/utils';

export const useMessageStore = defineStore('messageStore', () => {
  const messages = ref<messageType[]>([]);

  // 添加新消息
  const addMessage = (newMessage: messageType) => {
    if (newMessage) {
      messages.value.push(newMessage);
    }
  };

  // 更新消息内容
  const updateMessageContent = (index: number, content: string) => {
    if (messages.value[index]) {
      messages.value[index].content = content;
    }
  };

  return {
    messages,
    addMessage,
    updateMessageContent
  };
});

export const useFormDataStore = defineStore('formData', {
  state: () => ({
    // 基本信息
    age: null as number | null,
    occupation: '',

    // 个性特征模块
    personality: '',
    socialType: '', // 内向、外向或两者皆有
    communicationApproach: '', // 主动或被动
    communicationStyle: '', // 理性、感性或幽默
    socialPreference: '', // 是否喜欢社交活动

    // 兴趣爱好模块
    hobbies: [] as string[], // 主要兴趣爱好
    favoriteActivity: '', // 最喜欢的活动或消遣方式

    // 沟通偏好模块
    communicationTone: '', // 日常沟通语言偏好
    sharingPreference: '', // 主动分享或倾听他人

    // 情绪管理与表达模块
    emotionalExpression: '', // 情绪外露或内敛
    happyExpression: '', // 表达愉悦的方式

    // 其他描述
    other: ''
  }),

  actions: {
    setFormData(data: {
      age: number | null;
      occupation: string;
      personality: string;
      socialType: string;
      communicationApproach: string;
      communicationStyle: string;
      socialPreference: string;
      hobbies: string[];
      favoriteActivity: string;
      communicationTone: string;
      sharingPreference: string;
      emotionalExpression: string;
      happyExpression: string;
      other: string;
    }) {
      // 基本信息
      this.age = data.age;
      this.occupation = data.occupation;

      // 个性特征模块
      this.personality = data.personality;
      this.socialType = data.socialType;
      this.communicationApproach = data.communicationApproach;
      this.communicationStyle = data.communicationStyle;
      this.socialPreference = data.socialPreference;

      // 兴趣爱好模块
      this.hobbies = data.hobbies;
      this.favoriteActivity = data.favoriteActivity;

      // 沟通偏好模块
      this.communicationTone = data.communicationTone;
      this.sharingPreference = data.sharingPreference;

      // 情绪管理与表达模块
      this.emotionalExpression = data.emotionalExpression;
      this.happyExpression = data.happyExpression;

      // 其他描述
      this.other = data.other;
    }
  }
});

// export const useChatContextStore = defineStore('chatContext', {
//   state:()=>({{
//     chatArea: '',
//     chatUser: '',
//   })
