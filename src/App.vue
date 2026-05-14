<script>
import Employee from './components/Employee.vue'

export default {
  name: 'App',
  components: { Employee },
  data() {
    const today = new Date();
    return {
      // существующие свойства
      name: 'john',
      surn: 'simit',
      text: 'page',
      href: 'page.html',
      num: 5,
      num1: 1,
      num2: 2,
      num3: 3,
      arr1: ['x', 'y', 'z'],
      arr2: [1, 2, 3],
      obj: { x: 1, y: 2, z: 3 },
      cost: 100,
      amount: 3,
      visible: true,
      hidden: false,
      paragraphVisible: false,
      visibleItems: [false, false, false],
      isAdmin: true,
      day: 'понедельник',
      age: 25,
      showGroup: true,
      showVShow: true,
      items: [1, 2, 3, 4, 5],
      users: {
        user1: '100$',
        user2: '200$',
        user3: '300$'
      },
      groupItems: [1, 2, 3],
      mixedItems: [1, -2, 3, -4, 5],
      usersWithId: [
        { id: 1, name: 'name1', surn: 'surn1' },
        { id: 2, name: 'name2', surn: 'surn2' },
        { id: 3, name: 'name3', surn: 'surn3' }
      ],
      reactiveArray: ['a', 'b', 'c', 'd', 'e'],
      cssClasses: 'active valid',
      cssClassObj: {
        done: true,
        selected: false
      },
      visibilityClassObj: {
        hidden: true
      },
      isValid: true,
      isDisabled: true,
      inputText1: '',
      inputText2: '',
      inputNumber: 0,
      rootNum: 0,
      rootResult: 0,
      numA: 0,
      numB: 0,
      sumResult: 0,
      textA: '',
      textB: '',
      fullNameInput: '',
      surname: '',
      name: '',
      patronymic: '',
      taText: '',
      taWords: '',
      wordsArray: [],
      checkboxChecked: false,
      languages: [],
      nativeLanguage: '',
      selectedCity: '',
      // Данные для заданий с select
      weekdays: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      selectedWeekday: 'Понедельник',
      days: Array.from({ length: 31 }, (_, i) => i + 1),
      months: Array.from({ length: 12 }, (_, i) => i + 1),
      years: Array.from({ length: 21 }, (_, i) => 2000 + i),
      selectedDay: today.getDate(),
      selectedMonth: today.getMonth() + 1,
      selectedYear: today.getFullYear(),
      
      // НОВЫЕ СВОЙСТВА для задания
      empName: 'Сергей',
      empSalary: 120000,
      empAge: 32
    }
  },
  computed: {
    price() {
      return this.cost * this.amount;
    }
  },
  methods: {
    getWeekDay(num) {
      const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
      return days[num - 1];
    },
    showCurrentWeekDay() {
      const date = new Date();
      let dayNum = date.getDay();
      if (dayNum === 0) dayNum = 7;
      const dayName = this.getWeekDay(dayNum);
      alert(`Сегодня ${dayName}`);
    },
    showCurrentDate() {
      alert(new Date());
    },
    showSum() {
      alert(this.num1 + this.num2);
    },
    showSquare(num) {
      alert(`Квадрат числа ${num} = ${num * num}`);
    },
    changeText(newValue) {
      this.text = newValue;
    },
    increaseCost() {
      this.cost += 10;
    },
    handleLinkClick() {
      alert('Клик по ссылке (переход предотвращён)');
    },
    handleOnceClick() {
      alert('Это сообщение появится только один раз!');
    },
    toggleItem(index) {
      this.visibleItems[index] = !this.visibleItems[index];
    },
    nextDay() {
      const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
      const currentIndex = days.indexOf(this.day);
      const nextIndex = (currentIndex + 1) % days.length;
      this.day = days[nextIndex];
    },
    increaseAge() {
      this.age++;
    },
    decreaseAge() {
      this.age--;
    },
    addItem() {
      this.reactiveArray.push('new');
    },
    removeFirst() {
      this.reactiveArray.shift();
    },
    removeLast() {
      this.reactiveArray.pop();
    },
    removeSecondLast() {
      if (this.reactiveArray.length >= 2) {
        this.reactiveArray.splice(this.reactiveArray.length - 2, 1);
      }
    },
    sortArray() {
      this.reactiveArray.sort();
    },
    reverseArray() {
      this.reactiveArray.reverse();
    },
    calcRoot() {
      this.rootResult = Math.sqrt(this.rootNum);
    },
    calculateSum() {
      this.sumResult = this.numA + this.numB;
    },
    swapTexts() {
      [this.textA, this.textB] = [this.textB, this.textA];
    },
    splitFullName() {
      const parts = this.fullNameInput.trim().split(' ');
      this.surname = parts[0] || '';
      this.name = parts[1] || '';
      this.patronymic = parts[2] || '';
    },
    splitWords() {
      if (this.taWords.trim() === '') {
        this.wordsArray = [];
      } else {
        this.wordsArray = this.taWords.trim().split(/\s+/);
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>Vue.js приложение</h1>
    <p>Это мой первый компонент Vue!</p>
    <div>{{ name }}</div>
    <div>{{ surn }}</div>
    <a :href="href">{{ text }}</a>

    <!-- Задание №1: квадрат num -->
    <div>Квадрат числа {{ num }} = {{ num * num }}</div>

    <!-- Задание №2: сумма num1, num2, num3 -->
    <div>Сумма чисел {{ num1 }}, {{ num2 }}, {{ num3 }} = {{ num1 + num2 + num3 }}</div>

    <!-- Задание с массивами №1: каждый элемент arr1 в отдельном абзаце -->
    <p>{{ arr1[0] }}</p>
    <p>{{ arr1[1] }}</p>
    <p>{{ arr1[2] }}</p>

    <!-- Задание с массивами №2: сумма элементов arr2 -->
    <div>Сумма элементов массива [{{ arr2[0] }}, {{ arr2[1] }}, {{ arr2[2] }}] = {{ arr2[0] + arr2[1] + arr2[2] }}</div>

    <!-- Задание с объектом №1: сумма элементов объекта -->
    <div>Сумма элементов объекта { x: {{ obj.x }}, y: {{ obj.y }}, z: {{ obj.z }} } = {{ obj.x + obj.y + obj.z }}</div>

    <!-- Задание №1 по событиям: кнопка с выводом даты по клику -->
    <button @click="showCurrentDate">Показать дату (клик)</button>

    <!-- Задание №2 по событиям: кнопка с выводом даты по наведению -->
    <button @mouseenter="showCurrentDate">Показать дату (наведение)</button>

    <!-- Задание №1 из "Работа с data внутри методов": кнопка для суммы чисел -->
    <button @click="showSum">Показать сумму чисел (клик)</button>

    <!-- Кнопка для вывода текущего дня недели -->
    <button @click="showCurrentWeekDay">Показать текущий день недели</button>

    <!-- Кнопки для квадратов чисел (задание с параметрами) -->
    <button @click="showSquare(2)">Квадрат числа 2</button>
    <button @click="showSquare(3)">Квадрат числа 3</button>

    <!-- Задания на реактивность: вывод text и кнопки для изменения -->
    <p>Текущее значение свойства text: {{ text }}</p>
    <button @click="changeText('первое новое значение')">Изменить текст на "первое новое значение"</button>
    <button @click="changeText('второе новое значение')">Изменить текст на "второе новое значение"</button>

    <!-- Элементы для вычисляемого свойства price -->
    <div>
      <p>Цена за единицу: {{ cost }} руб.</p>
      <p>Количество: {{ amount }} шт.</p>
      <p>Полная стоимость (вычисляемое свойство price): {{ price }} руб.</p>
      <button @click="increaseCost">Увеличить цену на 10</button>
    </div>

    <!-- Задания с модификаторами событий -->
    <hr>
    <h3>Задания с модификаторами событий</h3>
    <a href="https://example.com" @click.prevent="handleLinkClick">Ссылка с предотвращением перехода</a>
    <br>
    <button @click.once="handleOnceClick">Кнопка, которая сработает только один раз</button>

    <!-- Задание с v-if -->
    <hr>
    <h3>Задание с v-if</h3>
    <p v-if="visible">Этот абзац виден, когда visible = true</p>
    <p v-if="!visible">Этот абзац виден, когда visible = false</p>
    <button @click="visible = !visible">Переключить visible (сейчас {{ visible }})</button>

    <!-- Задание на инвертирование условия -->
    <hr>
    <h3>Инвертирование условия (v-if="!hidden")</h3>
    <p v-if="!hidden">Этот абзац виден, когда hidden = false (инвертированное условие)</p>
    <button @click="hidden = !hidden">Переключить hidden (сейчас {{ hidden }})</button>

    <!-- Реактивное условие (показ/скрытие абзаца) -->
    <hr>
    <h3>Реактивное условие (показ/скрытие абзаца)</h3>
    <p v-if="paragraphVisible">Этот абзац управляется кнопками ниже.</p>

    <!-- Задание №1 и №2: кнопки показа и скрытия (обе видны всегда) -->
    <button @click="paragraphVisible = true">Показать абзац</button>
    <button @click="paragraphVisible = false">Скрыть абзац</button>

    <!-- Задание №3: только одна кнопка в зависимости от состояния -->
    <div style="margin-top: 10px;">
      <strong>Задание №3 (только одна кнопка):</strong><br>
      <button v-if="!paragraphVisible" @click="paragraphVisible = true">Показать абзац</button>
      <button v-if="paragraphVisible" @click="paragraphVisible = false">Скрыть абзац</button>
    </div>

    <!-- Тогглинг трёх абзацев с динамическим текстом кнопок -->
    <hr>
    <h3>Тогглинг трёх абзацев с динамическим текстом кнопок</h3>
    <p v-if="visibleItems[0]">Первый абзац (индекс 0)</p>
    <p v-if="visibleItems[1]">Второй абзац (индекс 1)</p>
    <p v-if="visibleItems[2]">Третий абзац (индекс 2)</p>
    <button @click="toggleItem(0)">{{ visibleItems[0] ? 'hide' : 'show' }}</button>
    <button @click="toggleItem(1)">{{ visibleItems[1] ? 'hide' : 'show' }}</button>
    <button @click="toggleItem(2)">{{ visibleItems[2] ? 'hide' : 'show' }}</button>

    <!-- Директива v-if / v-else с isAdmin -->
    <hr>
    <h3>Директива v-if / v-else (isAdmin)</h3>
    <p v-if="isAdmin">Вы администратор</p>
    <p v-else>Вы не администратор</p>
    <button @click="isAdmin = !isAdmin">Переключить isAdmin (сейчас {{ isAdmin }})</button>

    <!-- Отображение текущего дня недели (v-if с несколькими условиями) -->
    <hr>
    <h3>Задание: отображение текущего дня недели (свойство day)</h3>
    <p v-if="day === 'понедельник'">Понедельник</p>
    <p v-if="day === 'вторник'">Вторник</p>
    <p v-if="day === 'среда'">Среда</p>
    <p v-if="day === 'четверг'">Четверг</p>
    <p v-if="day === 'пятница'">Пятница</p>
    <p v-if="day === 'суббота'">Суббота</p>
    <p v-if="day === 'воскресенье'">Воскресенье</p>
    <p>Текущее значение day: {{ day }}</p>
    <button @click="nextDay">Следующий день</button>

    <!-- v-else-if для возраста -->
    <hr>
    <h3>Задание: классификация по возрасту (v-else-if)</h3>
    <p v-if="age < 18">подросток</p>
    <p v-else-if="age >= 18 && age <= 25">молодой человек</p>
    <p v-else>мужчина</p>
    <p>Текущий возраст: {{ age }}</p>
    <button @click="decreaseAge">-1</button>
    <button @click="increaseAge">+1</button>

    <!-- группа абзацев, скрываемая по кнопке (с использованием template) -->
    <hr>
    <h3>Задание: скрыть группу абзацев</h3>
    <template v-if="showGroup">
      <p>Первый абзац группы</p>
      <p>Второй абзац группы</p>
      <p>Третий абзац группы</p>
    </template>
    <button @click="showGroup = false">Скрыть абзацы</button>
    <button @click="showGroup = true">Показать абзацы</button>

    <!-- директива v-show -->
    <hr>
    <h3>Задание: директива v-show</h3>
    <p v-show="showVShow">Этот абзац управляется через v-show. Он всегда в DOM, но скрывается через CSS.</p>
    <button @click="showVShow = !showVShow">
      {{ showVShow ? 'Скрыть' : 'Показать' }} абзац (v-show)
    </button>

    <!-- Ответы на теоретические вопросы -->
    <div style="margin-top: 20px; background: #f0f0f0; padding: 10px;">
      <h4>Ответы на вопросы:</h4>
      <p><strong>№2. Отличие v-show от v-if:</strong> v-show всегда рендерит элемент и управляет его видимостью через CSS (display), а v-if условно рендерит элемент: если условие ложно, элемент не попадает в DOM.</p>
      <p><strong>№3. Когда использовать v-show, а когда v-if:</strong> v-show лучше использовать при частых переключениях, т.к. переключение дешевле (просто меняется CSS). v-if лучше при редких переключениях или когда условие изначально ложно, чтобы избежать лишнего рендера. Также v-if позволяет использовать v-else-if/v-else и работает с template.</p>
      <p><strong>№4. Ограничения v-show:</strong> v-show нельзя использовать на элементе template, не поддерживает v-else, и всегда оставляет элемент в DOM (может повлиять на семантику или стили).</p>
    </div>

    <!-- Задания с v-for (массивы) -->
    <hr>
    <h3>Задания с v-for (массивы)</h3>

    <!-- №1: вывести каждый элемент в div -->
    <div><strong>№1:</strong> Элементы массива items:</div>
    <div v-for="(item, index) in items" :key="index">
      {{ item }}
    </div>

    <!-- №2: вывести квадрат каждого элемента в div -->
    <div style="margin-top: 10px;"><strong>№2:</strong> Квадраты элементов:</div>
    <div v-for="(item, index) in items" :key="'sq' + index">
      Квадрат {{ item }} = {{ item * item }}
    </div>

    <!-- №3: вывести элементы в виде списка ul -->
    <div style="margin-top: 10px;"><strong>№3:</strong> Список ul:</div>
    <ul>
      <li v-for="(item, index) in items" :key="'li' + index">
        {{ item }}
      </li>
    </ul>

    <!-- ключи массива arr1 в виде ul -->
    <hr>
    <h3>Задание: ключи массива arr1 в виде ul</h3>
    <ul>
      <li v-for="(elem, key) in arr1" :key="key">{{ key }}</li>
    </ul>

    <!-- перебор объектов (users) -->
    <hr>
    <h3>Задания с перебором объектов (users)</h3>

    <!-- №1: только значения -->
    <div><strong>№1:</strong> Только значения:</div>
    <ul>
      <li v-for="(value, key) in users" :key="key">{{ value }}</li>
    </ul>

    <!-- №2: ключ - значение -->
    <div><strong>№2:</strong> Ключ - значение:</div>
    <ul>
      <li v-for="(value, key) in users" :key="key">{{ key }} - {{ value }}</li>
    </ul>

    <!-- №3: ключ - значение - индекс (с 0) -->
    <div><strong>№3:</strong> Ключ - значение - индекс (с 0):</div>
    <ul>
      <li v-for="(value, key, index) in users" :key="key">{{ key }} - {{ value }} - {{ index }}</li>
    </ul>

    <!-- №4: ключ - значение - индекс (с 1) -->
    <div><strong>№4:</strong> Ключ - значение - индекс (с 1):</div>
    <ul>
      <li v-for="(value, key, index) in users" :key="key">{{ key }} - {{ value }} - {{ index + 1 }}</li>
    </ul>

    <!-- Перебор группы тегов -->
    <hr>
    <h3>Задания с перебором группы тегов</h3>

    <!-- №1: для каждого элемента отдельный div с двумя p -->
    <div><strong>№1:</strong> Каждый элемент в отдельном div:</div>
    <div v-for="(item, index) in groupItems" :key="'group1' + index" style="border:1px solid #ccc; margin:5px; padding:5px;">
      <p>{{ item }}</p>
      <p class="divider" style="border-top:1px dashed #999;"></p>
    </div>

    <!-- №2: один ul с чередующимися li -->
    <div><strong>№2:</strong> Один список ul с разделителями:</div>
    <ul>
      <template v-for="(item, index) in groupItems" :key="'group2' + index">
        <li>{{ item }}</li>
        <li class="divider" style="list-style-type: none; border-bottom:1px dashed #999;"></li>
      </template>
    </ul>

    <!-- Цикл в диапазоне (30 абзацев) -->
    <hr>
    <h3>Задание: 30 абзацев с числами от 1 до 30</h3>
    <p v-for="n in 30" :key="n">{{ n }}</p>

    <!-- Условия в циклах (только положительные элементы) -->
    <hr>
    <h3>Задание: только положительные элементы массива mixedItems</h3>
    <ul>
      <template v-for="(item, index) in mixedItems" :key="index">
        <li v-if="item > 0">{{ item }}</li>
      </template>
    </ul>

    <!-- Атрибут key (перебор массива объектов) -->
    <hr>
    <h3>Атрибут key (перебор массива объектов)</h3>
    <p v-for="user in usersWithId" :key="user.id">
      {{ user.name }} {{ user.surn }}
    </p>

    <!-- Реактивность массивов (задания 1-6) -->
    <hr>
    <h3>Задания на реактивность массивов</h3>
    <ul>
      <li v-for="(item, index) in reactiveArray" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItem">Добавить элемент в конец</button>
    <button @click="removeFirst">Удалить первый</button>
    <button @click="removeLast">Удалить последний</button>
    <button @click="removeSecondLast">Удалить предпоследний</button>
    <button @click="sortArray">Сортировать</button>
    <button @click="reverseArray">Обратный порядок</button>

    <!-- Атрибут class (строка) -->
    <hr>
    <h3>Задание: атрибут class из свойства cssClasses</h3>
    <p :class="cssClasses">Этот абзац получает классы из свойства cssClasses: "{{ cssClasses }}"</p>

    <!-- Объект с CSS классами (done/selected) -->
    <hr>
    <h3>Задание: объект с CSS классами (done/selected)</h3>
    <p :class="cssClassObj">Этот абзац получает классы из объекта cssClassObj: {{ cssClassObj }}</p>
    <button @click="cssClassObj.done = !cssClassObj.done">Toggle done</button>
    <button @click="cssClassObj.selected = !cssClassObj.selected">Toggle selected</button>

    <!-- Реактивность объекта с CSS классами (скрытие/показ) -->
    <hr>
    <h3>Задание: объект с CSS классом hidden (скрытие/показ)</h3>
    <p :class="visibilityClassObj">Этот текст скрывается через класс hidden (сейчас hidden = {{ visibilityClassObj.hidden }})</p>
    <button @click="visibilityClassObj.hidden = false">Показать элемент</button>
    <button @click="visibilityClassObj.hidden = true">Скрыть элемент</button>
    <button @click="visibilityClassObj.hidden = !visibilityClassObj.hidden">Тоггл (показать/скрыть)</button>

    <!-- inline объект с CSS классами -->
    <hr>
    <h3>Задание: inline объект с CSS классами</h3>
    <p :class="{ active: true, valid: false }">
      Текст с inline объектом классов: active = true, valid = false
    </p>
    <p>Ожидается: класс "active" должен примениться, класс "valid" — нет.</p>

    <!-- динамические классы от isValid и isDisabled -->
    <hr>
    <h3>Задание: динамические классы от isValid и isDisabled</h3>
    <p :class="{ valid: isValid, disabled: isDisabled }">
      Этот абзац получает классы valid ({{ isValid }}) и disabled ({{ isDisabled }})
    </p>
    <button @click="isValid = !isValid">Toggle isValid</button>
    <button @click="isDisabled = !isDisabled">Toggle isDisabled</button>

    <!-- стилизация через атрибут style -->
    <hr>
    <h3>Задание: стилизация через атрибут style</h3>

    <!-- №1: зеленый текст, желтый фон -->
    <p :style="{ color: 'green', backgroundColor: 'yellow' }">
      Абзац №1: зеленый текст на желтом фоне.
    </p>

    <!-- №2: жирный и курсивный -->
    <p :style="{ fontWeight: 'bold', fontStyle: 'italic' }">
      Абзац №2: жирный и курсивный текст.
    </p>

    <!-- Двусторонняя привязка данных к инпутам (v-model) -->
    <hr>
    <h3>Задания с инпутами (v-model)</h3>

    <!-- №1: простой вывод -->
    <div>
      <label for="input1">№1: Введите текст:</label><br>
      <input id="input1" v-model="inputText1" placeholder="Введите что-нибудь">
      <p>Вы ввели: {{ inputText1 }}</p>
    </div>

    <!-- №2: верхний регистр -->
    <div style="margin-top: 10px;">
      <label for="input2">№2: Введите текст (верхний регистр):</label><br>
      <input id="input2" v-model="inputText2" placeholder="Введите что-нибудь">
      <p>Вы ввели в верхнем регистре: {{ inputText2.toUpperCase() }}</p>
    </div>

    <!-- №3: квадрат числа -->
    <div style="margin-top: 10px;">
      <label for="input3">№3: Введите число:</label><br>
      <input id="input3" type="number" v-model.number="inputNumber" placeholder="Введите число">
      <p>Квадрат числа {{ inputNumber }} = {{ inputNumber * inputNumber }}</p>
    </div>

    <!-- НОВЫЕ ЗАДАНИЯ: получение данных по событию -->
    <hr>
    <h3>Новые задания (получение данных по событию)</h3>

    <!-- №1: квадратный корень -->
    <div>
      <label for="rootNum">№1: Введите число для вычисления квадратного корня:</label><br>
      <input id="rootNum" type="number" v-model.number="rootNum" placeholder="Число">
      <button @click="calcRoot">Вычислить корень</button>
      <p>Квадратный корень: {{ rootResult }}</p>
    </div>

    <!-- №2: сумма двух чисел -->
    <div style="margin-top: 10px;">
      <h4>№2: Сумма двух чисел</h4>
      <label>Число A: <input type="number" v-model.number="numA" placeholder="Число A"></label><br>
      <label>Число B: <input type="number" v-model.number="numB" placeholder="Число B"></label><br>
      <button @click="calculateSum">Вычислить сумму</button>
      <p>Сумма: {{ sumResult }}</p>
    </div>

    <!-- №3: обмен текста в двух инпутах -->
    <div style="margin-top: 10px;">
      <h4>№3: Обмен текста</h4>
      <label>Инпут A: <input v-model="textA" placeholder="Текст A"></label><br>
      <label>Инпут B: <input v-model="textB" placeholder="Текст B"></label><br>
      <button @click="swapTexts">Обменять</button>
      <p>Инпут A: {{ textA }}, Инпут B: {{ textB }}</p>
    </div>

    <!-- №4: разделение ФИО -->
    <div style="margin-top: 10px;">
      <h4>№4: Разделение ФИО</h4>
      <label>Введите ФИО через пробел: <input v-model="fullNameInput" placeholder="Иванов Иван Иванович" style="width: 300px;"></label><br>
      <button @click="splitFullName">Разделить</button>
      <p>Фамилия: {{ surname }}</p>
      <p>Имя: {{ name }}</p>
      <p>Отчество: {{ patronymic }}</p>
    </div>

    <!-- НОВЫЕ ЗАДАНИЯ: работа с textarea -->
    <hr>
    <h3>Задания с textarea</h3>

    <!-- №1: отображение в абзаце -->
    <div>
      <label for="ta1">№1: Введите текст в textarea:</label><br>
      <textarea id="ta1" v-model="taText" rows="3" cols="50" placeholder="Введите текст..."></textarea>
      <p>Введённый текст: {{ taText }}</p>
    </div>

    <!-- №2: разбивка на слова и вывод списком -->
    <div style="margin-top: 10px;">
      <label for="ta2">№2: Введите текст для разбивки на слова:</label><br>
      <textarea id="ta2" v-model="taWords" rows="3" cols="50" placeholder="Введите несколько слов через пробел..."></textarea><br>
      <button @click="splitWords">Разбить на слова</button>
      <ul>
        <li v-for="(word, index) in wordsArray" :key="index">{{ word }}</li>
      </ul>
    </div>

    <!-- ЗАДАНИЕ С CHECKBOX (v-if) -->
    <hr>
    <h3>Задание с checkbox (v-if)</h3>
    <div>
      <input type="checkbox" v-model="checkboxChecked" id="checkbox1">
      <label for="checkbox1">Отметить, чтобы показать абзац</label>
      <p v-if="checkboxChecked">Этот абзац виден, когда checkbox отмечен.</p>
    </div>

    <!-- НОВОЕ ЗАДАНИЕ: массив значений checkbox (языки) -->
    <hr>
    <h3>Задание: какие языки вы знаете? (массив чекбоксов)</h3>
    <div>
      <label><input type="checkbox" v-model="languages" value="Английский"> Английский</label><br>
      <label><input type="checkbox" v-model="languages" value="Немецкий"> Немецкий</label><br>
      <label><input type="checkbox" v-model="languages" value="Французский"> Французский</label><br>
      <label><input type="checkbox" v-model="languages" value="Испанский"> Испанский</label><br>
      <label><input type="checkbox" v-model="languages" value="Китайский"> Китайский</label><br>
      <label><input type="checkbox" v-model="languages" value="Другой"> Другой</label>
    </div>
    <p>Выбранные языки:</p>
    <ul>
      <li v-for="(lang, index) in languages" :key="index">{{ lang }}</li>
    </ul>

    <!-- НОВОЕ ЗАДАНИЕ: radio для родного языка -->
    <hr>
    <h3>Задания с radio</h3>

    <!-- №1: выбор родного языка -->
    <div>
      <p><strong>№1:</strong> Какой язык для вас родной?</p>
      <label><input type="radio" v-model="nativeLanguage" value="Русский"> Русский</label><br>
      <label><input type="radio" v-model="nativeLanguage" value="Английский"> Английский</label><br>
      <label><input type="radio" v-model="nativeLanguage" value="Немецкий"> Немецкий</label><br>
      <p>Вы выбрали: {{ nativeLanguage }}</p>
    </div>

    <!-- №2: отображение фразы на выбранном языке -->
    <div style="margin-top: 10px;">
      <p><strong>№2:</strong> Фраза на выбранном языке:</p>
      <p v-if="nativeLanguage === 'Русский'">Привет, мир!</p>
      <p v-if="nativeLanguage === 'Английский'">Hello, world!</p>
      <p v-if="nativeLanguage === 'Немецкий'">Hallo, Welt!</p>
    </div>

    <!-- НОВОЕ ЗАДАНИЕ: select для выбора города -->
    <hr>
    <h3>Задание: выбор города (select)</h3>
    <div>
      <p><strong>№1:</strong> В каком городе вы живете?</p>
      <select v-model="selectedCity">
        <option value="" disabled>Выберите город</option>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Новосибирск">Новосибирск</option>
        <option value="Екатеринбург">Екатеринбург</option>
        <option value="Казань">Казань</option>
      </select>
      <p>Вы выбрали город: {{ selectedCity }}</p>
    </div>

    <!-- НОВЫЕ ЗАДАНИЯ: формирование select в цикле (дни недели, дата) -->
    <hr>
    <h3>Задания: формирование select в цикле</h3>

    <!-- №1: выбор дня недели -->
    <div>
      <p><strong>№1:</strong> Выберите день недели:</p>
      <select v-model="selectedWeekday">
        <option v-for="day in weekdays" :key="day">{{ day }}</option>
      </select>
      <p>Выбран день: {{ selectedWeekday }}</p>
    </div>

    <!-- №2 и №3: выбор дня, месяца, года (с текущей датой по умолчанию) -->
    <div style="margin-top: 10px;">
      <p><strong>№2 и №3:</strong> Выберите дату (по умолчанию текущая):</p>
      <label>День: 
        <select v-model="selectedDay">
          <option v-for="day in days" :key="day">{{ day }}</option>
        </select>
      </label>
      <label>Месяц: 
        <select v-model="selectedMonth">
          <option v-for="month in months" :key="month">{{ month }}</option>
        </select>
      </label>
      <label>Год: 
        <select v-model="selectedYear">
          <option v-for="year in years" :key="year">{{ year }}</option>
        </select>
      </label>
      <p>Выбрана дата: {{ selectedDay }}.{{ selectedMonth }}.{{ selectedYear }}</p>
    </div>

    <!-- Подключение компонента Employee с пропсами (предыдущие задания) -->
    <hr>
    <h3>Задания №1 и №2: Компонент Employee с пропсами</h3>
    <Employee name="Иван" surname="Петров" :age="30" />
    <Employee name="Мария" surname="Иванова" :age="25" />
    <Employee name="Алексей" surname="Сидоров" :age="35" />

    <!-- НОВОЕ ЗАДАНИЕ: передача данных из свойств data в компонент Employee -->
    <hr>
    <h3>Задание: Передача имени, зарплаты и возраста из data</h3>
    <Employee :name="empName" :surname="empSalary" :age="empAge" />

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

/* Стилизация тегов компонента (задание №1) */
p {
  color: red;
}

/* Стиль для класса hidden (скрытие элемента) */
p.hidden {
  display: none;
}

/* Стили для демонстрации классов */
.active {
  font-weight: bold;
  color: blue;
}
.valid {
  font-weight: bold;
  color: green;
}
.disabled {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>