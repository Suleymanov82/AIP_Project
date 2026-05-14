import { useState } from "react"

// Компонент Child для поднятия состояния
function Child({ value, setValue }) {
  return (
    <button onClick={() => setValue(value + 1)}>
      Увеличить значение: {value}
    </button>
  )
}

// Компонент Display для отображения
function Display({ value }) {
  return <p>Текущее значение: {value}</p>
}

export default function Concepts() {

  const [value, setValue] = useState(0)

  // Пример динамического списка
  const [users, setUsers] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Mike", age: 30 }
  ])

  const addUser = () => {
    const nextId = users.length + 1
    setUsers([...users, { id: nextId, name: `User${nextId}`, age: 20 + nextId }])
  }

  return (
    <div className="section">

      <h2>Концепции</h2>

      {/* №1 */}
      <div className="task">
        <h3>Задание 1: Подъём состояния</h3>
        <Display value={value}/>
        <Child value={value} setValue={setValue}/>
      </div>

      {/* №2 */}
      <div className="task">
        <h3>Задание 2: Передача данных через props</h3>
        {users.map(u => <User key={u.id} name={u.name} age={u.age} />)}
        <button onClick={addUser}>Добавить пользователя</button>
      </div>

      {/* №3 */}
      <div className="task">
        <h3>Задание 3: Вычисления внутри компонента</h3>
        <p>Сумма возрастов: {users.reduce((sum, u) => sum + u.age, 0)}</p>
      </div>

      {/* №4 */}
      <div className="task">
        <h3>Задание 4: Фильтрация пользователей</h3>
        <ul>
          {users.filter(u => u.age > 25).map(u => <li key={u.id}>{u.name} ({u.age})</li>)}
        </ul>
      </div>

    </div>
  )
}

// Компонент User используется внутри этого раздела
function User({ name, age }) {
  return (
    <div style={{ marginTop: "5px" }}>
      <p>{name} ({age})</p>
    </div>
  )
}