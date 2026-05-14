import { useState } from "react"

export default function Forms() {

  const [text, setText] = useState("")
  const [textarea, setTextarea] = useState("")
  const [checked, setChecked] = useState(false)
  const [radio, setRadio] = useState("")
  const [select, setSelect] = useState("option1")

  return (
    <div className="section">

      <h2>Формы</h2>

      {/* №1 */}
      <div className="task">
        <h3>Задание 1: Input текст</h3>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <p>Вы ввели: {text}</p>
      </div>

      {/* №2 */}
      <div className="task">
        <h3>Задание 2: Textarea</h3>
        <textarea
          value={textarea}
          onChange={e => setTextarea(e.target.value)}
        ></textarea>
        <p>{textarea}</p>
      </div>

      {/* №3 */}
      <div className="task">
        <h3>Задание 3: Checkbox</h3>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        {checked && <p>Checkbox активен</p>}
      </div>

      {/* №4 */}
      <div className="task">
        <h3>Задание 4: Radio</h3>
        <label>
          <input
            type="radio"
            value="option1"
            checked={radio === "option1"}
            onChange={e => setRadio(e.target.value)}
          /> Option 1
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={radio === "option2"}
            onChange={e => setRadio(e.target.value)}
          /> Option 2
        </label>
        <p>Выбрано: {radio}</p>
      </div>

      {/* №5 */}
      <div className="task">
        <h3>Задание 5: Select</h3>
        <select value={select} onChange={e => setSelect(e.target.value)}>
          <option value="option1">Опция 1</option>
          <option value="option2">Опция 2</option>
          <option value="option3">Опция 3</option>
        </select>
        <p>Вы выбрали: {select}</p>
      </div>

      {/* №6 */}
      <div className="task">
        <h3>Задание 6: Input + Button</h3>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={() => alert(`Вы ввели: ${text}`)}>Показать</button>
      </div>

      {/* №7 */}
      <div className="task">
        <h3>Задание 7: Toggle Checkbox</h3>
        <button onClick={() => setChecked(!checked)}>Toggle Checkbox</button>
        {checked && <p>Checkbox включен</p>}
      </div>

      {/* №8 */}
      <div className="task">
        <h3>Задание 8: Сочетание Input + Radio + Checkbox</h3>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        /> Checkbox
        <label>
          <input
            type="radio"
            value="r1"
            checked={radio === "r1"}
            onChange={e => setRadio(e.target.value)}
          /> R1
        </label>
        <label>
          <input
            type="radio"
            value="r2"
            checked={radio === "r2"}
            onChange={e => setRadio(e.target.value)}
          /> R2
        </label>
        <p>Input: {text}</p>
        <p>Checkbox: {checked ? "Да" : "Нет"}</p>
        <p>Radio: {radio}</p>
      </div>

      {/* №9 */}
      <div className="task">
        <h3>Задание 9: Сброс значений формы</h3>
        <button onClick={() => {
          setText("")
          setTextarea("")
          setChecked(false)
          setRadio("")
          setSelect("option1")
        }}>Сбросить</button>
      </div>

      {/* №10 */}
      <div className="task">
        <h3>Задание 10: Вывод всех значений формы</h3>
        <p>Text: {text}</p>
        <p>Textarea: {textarea}</p>
        <p>Checkbox: {checked ? "Да" : "Нет"}</p>
        <p>Radio: {radio}</p>
        <p>Select: {select}</p>
      </div>

    </div>
  )
}