import { useState } from "react"

// Компонент User с props
function User({ name, age }) {
  return (
    <div>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
    </div>
  )
}

// Компонент с вложенными детьми
function Family({ children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
      <h4>Семья</h4>
      {children}
    </div>
  )
}

export default function Components() {

  const [users, setUsers] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Mike", age: 30 },
    { id: 3, name: "Kate", age: 22 }
  ])

  return (
    <div className="section">

      <h2>Компоненты</h2>

      {/* №1 ⊗ */}
      <div className="task">
        <h3>Задание 1: Вывод компонента User</h3>
        <User name="Anna" age={28} />
        <User name="Leo" age={33} />
      </div>

      {/* №2 ⊗ */}
      <div className="task">
        <h3>Задание 2: Список пользователей через map</h3>
        {users.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </div>

      {/* №3 ⊗ */}
      <div className="task">
        <h3>Задание 3: Вложенные компоненты</h3>
        <Family>
          <User name="Father" age={50} />
          <User name="Mother" age={48} />
          <User name="Child" age={20} />
        </Family>
      </div>

      {/* №4 ⊗ */}
      <div className="task">
        <h3>Задание 4: Компонент с функцией в props</h3>
        <UserWithAction name="Tom" age={35} />
      </div>

      {/* №5 ⊗ */}
      <div className="task">
        <h3>Задание 5: Динамическое добавление компонента</h3>
        <button onClick={() => setUsers([...users, { id: users.length + 1, name: `User${users.length + 1}`, age: 20 + users.length }])}>
          Добавить пользователя
        </button>
      </div>

    </div>
  )
}

// Дополнительный компонент для задания 4
function UserWithAction({ name, age }) {
  const sayHello = () => alert(`Привет, ${name}`)
  return (
    <div style={{ marginTop: "10px" }}>
      <p>{name} ({age})</p>
      <button onClick={sayHello}>Сказать привет</button>
    </div>
  )
}