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
    personality: '',
    hobbies: [] as string[],
    socialPreference: '',
    other: ''
  }),
  actions: {
    setFormData(data: { personality: string; hobbies: string[]; socialPreference: string; other: string }) {
      this.personality = data.personality;
      this.hobbies = data.hobbies;
      this.socialPreference = data.socialPreference;
      this.other = data.other;
    }
  }
});
