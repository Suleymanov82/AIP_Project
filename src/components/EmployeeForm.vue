<template>
  <div style="background: #f9f9f9; padding: 15px; border: 1px solid #ccc; margin-bottom: 20px; border-radius: 8px;">
    <h4>Добавить нового работника</h4>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <input v-model="newName" placeholder="Имя" style="padding: 8px;">
      <input v-model="newSalary" type="number" placeholder="Зарплата" style="padding: 8px;">
      <input v-model="newAge" type="number" placeholder="Возраст" style="padding: 8px;">
      <button @click="submit" style="padding: 8px 15px; background: #27ae60; color: white; border: none; cursor: pointer;">
        Добавить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['add']);

const newName = ref('');
const newSalary = ref<number | null>(null);
const newAge = ref<number | null>(null);

const submit = () => {
  if (!newName.value || newSalary.value === null || newAge.value === null) {
    alert('Заполните все поля');
    return;
  }
  
  // Испускаем событие с данными формы
  emit('add', newName.value, newSalary.value, newAge.value);
  
  // Очистка формы
  newName.value = '';
  newSalary.value = null;
  newAge.value = null;
};
</script>