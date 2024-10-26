<script setup lang="ts">
import { ref } from 'vue';
import { NButton, NModal } from 'naive-ui';
import Card from './UserCard.vue';
import { GetTaroCardByid1, TaroCard } from '@/utils';
import { useRouter } from 'vue-router';
const loading = ref<boolean>(false);
const ShowCard = ref<boolean>(false);
const showModal = ref<boolean>(false);
const selectedCards = ref<TaroCard[]>([]);

const handleCardsSelected = (selected: number[]) => {
  selectedCards.value = GetTaroCardByid1(selected);
  console.log(selectedCards.value);
  setTimeout(() => {
    showModal.value = true;
  }, 1000);
};
const router = useRouter();
const navigateToChat = () => {
  console.log('navigateToChat');
  router.push('/social');
};
</script>

<template>
  <div class="container">
    <n-button
      :loading="loading"
      type="primary"
      @click="
        () => {
          ShowCard = true;
        }
      ">
      看看有谁和你聊上了吧!
    </n-button>

    <Card @cardsSelected="handleCardsSelected" v-show="ShowCard" />
  </div>

  <n-modal
    v-if="showModal"
    v-model:show="showModal"
    preset="card"
    :title="`你选择了${selectedCards[0].name}`"
    size="huge"
    class="answer-model">
    <n-statistic tabular-nums>
      <template #prefix> 根据系统测算,您的和{{ selectedCards[0].name }}的匹配度是 </template>

      <n-number-animation ref="numberAnimationInstRef" :from="0.0" :to="24.0" :precision="2" />
      <template #suffix> %</template>
    </n-statistic>

    <n-button @click="navigateToChat"> 看看你们都聊了什么? </n-button>
  </n-modal>
</template>

<style scoped>
.container {
  margin: 1rem auto;
  max-width: 90%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

<style>
.answer-model {
  max-width: 60% !important;
}

@media (max-width: 768px) {
  .answer-model {
    max-width: 90% !important;
  }
}
</style>
