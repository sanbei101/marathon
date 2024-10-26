import { getActivePinia } from 'pinia';
import { useChatContextStore, useFormDataStore } from '@/store';

export const getSystemPrompt = (): string => {
  const pinia = getActivePinia();
  if (!pinia) throw new Error('Pinia instance is not active');

  const userData = useFormDataStore(pinia);
  const chatContext = useChatContextStore(pinia);

  return `
    以下是你的基本信息：
    ${userData.getFormattedData()}
    
    当前对话场景：
    - 聊天对象：${chatContext.getChatUser}
    - 聊天地点：${chatContext.getChatArea}
    - 聊天角色的性格：${chatContext.getChatCharacter}      
    请基于上述场景,流畅且自然地展开对话,并表达出对方AI的独特个性。`;
};
