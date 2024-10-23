import { Component } from 'vue';

export const renderIcon = (icon: Component) => {
  return () => h(icon, null, { default: () => h(icon) });
};
