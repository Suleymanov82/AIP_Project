import { useState } from "react"

export default function Data() {

  const [items, setItems] = useState([1, 2, 3])
  const [users, setUsers] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Mike", age: 30 },
    { id: 3, name: "Kate", age: 22 }
  ])

  const addItem = () => {
    setItems([...items, items.length + 1])
  }

  const addUser = () => {
    const nextId = users.length + 1
    setUsers([...users, { id: nextId, name: `User${nextId}`, age: 20 + nextId }])
  }

  return (
    <div className="section">

      <h2>Данные</h2>

      {/* №1 */}
      <div className="task">
        <h3>Задание 1: Массив чисел</h3>
        <ul>
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <button onClick={addItem}>Добавить число</button>
      </div>

      {/* №2 */}
      <div className="task">
        <h3>Задание 2: Список пользователей</h3>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addUser}>Добавить пользователя</button>
      </div>

      {/* №3 */}
      <div className="task">
        <h3>Задание 3: Сумма элементов массива</h3>
        <p>Сумма: {items.reduce((sum, n) => sum + n, 0)}</p>
      </div>

      {/* №4 */}
      <div className="task">
        <h3>Задание 4: Фильтрация пользователей старше 25</h3>
        <ul>
          {users.filter(u => u.age > 25).map(u => <li key={u.id}>{u.name} ({u.age})</li>)}
        </ul>
      </div>

      {/* №5 */}
      <div className="task">
        <h3>Задание 5: Карта элементов</h3>
        <p>{items.map(n => n * 2).join(", ")}</p>
      </div>

      {/* №6 */}
      <div className="task">
        <h3>Задание 6: Удаление последнего элемента</h3>
        <button onClick={() => setItems(items.slice(0, -1))}>Удалить последний</button>
        <ul>
          {items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>

      {/* №7 */}
      <div className="task">
        <h3>Задание 7: Уникальные ID при добавлении</h3>
        <ul>
          {users.map(u => <li key={u.id}>{u.name} ({u.age})</li>)}
        </ul>
        <button onClick={addUser}>Добавить нового пользователя</button>
      </div>

    </div>
  )
}