<template>
  <div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
    
    <!-- Режим просмотра -->
    <div v-if="!isEdit">
      <strong>{{ name }}</strong> 
      <span style="color: #555;">(Возраст: {{ age }}, Зарплата: {{ salary }})</span>
      
      <!-- Кнопки действий -->
      <button @click="startEdit" style="margin-left: 10px; background: #3498db; color: white; border: none; padding: 4px 8px; cursor: pointer;">
        Редактировать
      </button>
      <button @click="$emit('remove', id)" style="margin-left: 5px; background: #e74c3c; color: white; border: none; padding: 4px 8px; cursor: pointer;">
        Удалить
      </button>
      
      <!-- Задание на передачу функций (для демонстрации) -->
      <button @click="handleLogName" style="margin-left: 5px; font-size: 0.8em;">
        Лог имени (через проп-функцию)
      </button>
      <button @click="handleLogDetails" style="margin-left: 5px; font-size: 0.8em;">
        Лог деталей (через проп-функцию)
      </button>
    </div>

    <!-- Режим редактирования -->
    <div v-else>
      <input v-model="localName" placeholder="Имя" style="padding: 4px;">
      <input v-model="localSalary" type="number" placeholder="ЗП" style="padding: 4px; width: 60px;">
      <input v-model="localAge" type="number" placeholder="Возраст" style="padding: 4px; width: 40px;">
      
      <button @click="saveChanges" style="margin-left: 10px; background: #27ae60; color: white; border: none; padding: 4px 8px; cursor: pointer;">
        Сохранить
      </button>
      <button @click="cancelEdit" style="margin-left: 5px; background: #95a5a6; color: white; border: none; padding: 4px 8px; cursor: pointer;">
        Отмена
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

// --- Пропсы (Задания: передача данных, типов, массивов) ---
const props = defineProps({
  id: Number,
  name: String,
  salary: Number,
  age: Number,
  // Для заданий с передачей функций
  onLogName: Function,
  onLogDetails: Function,
  // Для задания с передачей массива (просто для примера вывода)
  skills: Array
});

// --- События (Задания: испускание событий, удаление, изменение) ---
const emit = defineEmits(['remove', 'change']);

// --- Локальное состояние для редактирования ---
const isEdit = ref(false);
const localName = ref(props.name);
const localSalary = ref(props.salary);
const localAge = ref(props.age);

// --- Методы ---
const startEdit = () => {
  // Сбрасываем локальные значения к текущим пропсам при начале редактирования
  localName.value = props.name;
  localSalary.value = props.salary;
  localAge.value = props.age;
  isEdit.value = true;
};

const cancelEdit = () => {
  isEdit.value = false;
};

const saveChanges = () => {
  // Испускаем событие изменения с новыми данными
  emit('change', props.id, localName.value, localSalary.value, localAge.value);
  isEdit.value = false;
};

// Обработчики для кнопок с переданными функциями
const handleLogName = () => {
  if (props.onLogName) props.onLogName(props.name);
};

const handleLogDetails = () => {
  if (props.onLogDetails) props.onLogDetails(props.name, props.salary);
};
</script>