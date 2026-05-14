import { useState } from "react"

export default function Functions() {

  const [num, setNum] = useState(5)
  const [text, setText] = useState("")

  // простая функция alert
  function showHello() {
    alert("Hello React!")
  }

  // функция с аргументом
  function showNumber(n) {
    alert(`Число: ${n}`)
  }

  // функция для изменения текста
  function handleTextChange(e) {
    setText(e.target.value)
  }

  // функция для увеличения числа
  function increment() {
    setNum(num + 1)
  }

  // функция для уменьшения числа
  function decrement() {
    setNum(num - 1)
  }

  return (
    <div className="section">

      <h2>Функции</h2>

      {/* №1 */}
      <div className="task">
        <h3>Задание 1</h3>
        <button onClick={showHello}>Показать сообщение</button>
      </div>

      {/* №2 */}
      <div className="task">
        <h3>Задание 2</h3>
        <button onClick={() => showNumber(10)}>Показать число 10</button>
        <button onClick={() => showNumber(42)}>Показать число 42</button>
      </div>

      {/* №3 */}
      <div className="task">
        <h3>Задание 3</h3>
        <p>Число: {num}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

      {/* №4 */}
      <div className="task">
        <h3>Задание 4</h3>
        <input 
          type="text" 
          value={text} 
          onChange={handleTextChange} 
          placeholder="Введите текст"
        />
        <p>Вы ввели: {text}</p>
      </div>

      {/* №5 */}
      <div className="task">
        <h3>Задание 5</h3>
        <button onClick={() => alert(`Длина текста: ${text.length}`)}>
          Показать длину текста
        </button>
      </div>

      {/* №6 */}
      <div className="task">
        <h3>Задание 6</h3>
        <p>Удвоенное число: {num * 2}</p>
      </div>

      {/* №7 */}
      <div className="task">
        <h3>Задание 7</h3>
        <button onClick={() => setNum(num + 5)}>+5</button>
        <button onClick={() => setNum(num - 5)}>-5</button>
      </div>

      {/* №8 */}
      <div className="task">
        <h3>Задание 8</h3>
        <button onClick={() => alert(num % 2 === 0 ? "Четное" : "Нечетное")}>
          Четность числа
        </button>
      </div>

    </div>
  )
}