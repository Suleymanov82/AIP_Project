import { useState } from "react"

export default function States() {

  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)
  const [text, setText] = useState("")
  const [checked, setChecked] = useState(false)

  const arr = [1, 2, 3]

  return (
    <div className="section">

      <h2>Стейты (useState)</h2>

      {/* №1 */}
      <div className="task">
        <h3>Задание 1</h3>
        <p>Счётчик: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>

      {/* №2 */}
      <div className="task">
        <h3>Задание 2</h3>
        <p>Toggle видимости:</p>
        <button onClick={() => setVisible(!visible)}>Toggle</button>
        {visible && <p>Текст видим</p>}
      </div>

      {/* №3 */}
      <div className="task">
        <h3>Задание 3</h3>
        <p>Input text:</p>
        <input value={text} onChange={e => setText(e.target.value)} />
        <p>{text}</p>
      </div>

      {/* №4 */}
      <div className="task">
        <h3>Задание 4</h3>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        {checked && <p>Checkbox активен</p>}
      </div>

      {/* №5 */}
      <div className="task">
        <h3>Задание 5</h3>
        <ul>
          {arr.map((n, idx) => <li key={idx}>{n * count}</li>)}
        </ul>
      </div>

      {/* №6 */}
      <div className="task">
        <h3>Задание 6</h3>
        <p>Строковый state: {text.toUpperCase()}</p>
      </div>

      {/* №7 */}
      <div className="task">
        <h3>Задание 7</h3>
        <p>Toggle и булево значение: {visible ? "Да" : "Нет"}</p>
      </div>

      {/* №8 */}
      <div className="task">
        <h3>Задание 8</h3>
        <p>Кнопки для изменения count:</p>
        <button onClick={() => setCount(count + 5)}>+5</button>
        <button onClick={() => setCount(count - 5)}>-5</button>
      </div>

      {/* №9 */}
      <div className="task">
        <h3>Задание 9</h3>
        <p>Список с динамическим state:</p>
        {arr.map(n => <p key={n}>Элемент {n} x {count} = {n * count}</p>)}
      </div>

      {/* №10 */}
      <div className="task">
        <h3>Задание 10</h3>
        <p>Input + state + вывод:</p>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <p>Вы ввели: {text}</p>
      </div>

    </div>
  )
}