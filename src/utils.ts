import { Component } from 'vue';
import OpenAI from 'openai';

export const renderIcon = (icon: Component) => {
  return () => h(icon, null, { default: () => h(icon) });
};
export type messageType = { content: string; position: string };

export const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: 'sk-fcaee142d43347bda87e5714e0f4f016',
  dangerouslyAllowBrowser: true
});
