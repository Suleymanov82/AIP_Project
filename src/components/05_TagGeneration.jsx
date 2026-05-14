export default function TagGeneration() {

  const arr = [1, 2, 3, 4, 5]
  const users = [
    { id: 1, name: "Ivan", age: 25 },
    { id: 2, name: "John", age: 30 },
    { id: 3, name: "Kate", age: 22 }
  ]

  return (
    <div className="section">

      <h2>Формирование тегов</h2>

      {/* №1 */}
      <div className="task">
        <h3>Задание 1</h3>
        <ul>
          {arr.map((num) => <li key={num}>Элемент {num}</li>)}
        </ul>
      </div>

      {/* №2 */}
      <div className="task">
        <h3>Задание 2</h3>
        <ol>
          {arr.map((num) => <li key={num}>Число {num}</li>)}
        </ol>
      </div>

      {/* №3 */}
      <div className="task">
        <h3>Задание 3</h3>
        {users.map((user) => (
          <p key={user.id}>{user.name} - {user.age}</p>
        ))}
      </div>

      {/* №4 */}
      <div className="task">
        <h3>Задание 4</h3>
        <table border="1">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Возраст</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* №5 */}
      <div className="task">
        <h3>Задание 5</h3>
        {arr.map((num, index) => (
          <div key={index}>
            <p>Элемент {num}</p>
          </div>
        ))}
      </div>

      {/* №6 */}
      <div className="task">
        <h3>Задание 6</h3>
        {users.map((user) => (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <p>Возраст: {user.age}</p>
          </div>
        ))}
      </div>

      {/* №7 */}
      <div className="task">
        <h3>Задание 7</h3>
        <ul>
          {arr.filter(n => n % 2 === 0).map((n) => <li key={n}>Четное: {n}</li>)}
        </ul>
      </div>

      {/* №8 */}
      <div className="task">
        <h3>Задание 8</h3>
        <ul>
          {users.filter(u => u.age > 25).map((u) => <li key={u.id}>{u.name} ({u.age})</li>)}
        </ul>
      </div>

      {/* №9 */}
      <div className="task">
        <h3>Задание 9</h3>
        {arr.map((n) => (
          <div key={n}>
            <p>Квадрат числа {n}: {n * n}</p>
          </div>
        ))}
      </div>

      {/* №10 */}
      <div className="task">
        <h3>Задание 10</h3>
        {users.map((u) => (
          <div key={u.id}>
            <h4>{u.name}</h4>
            <p>{u.age > 25 ? "Взрослый" : "Молодой"}</p>
          </div>
        ))}
      </div>

    </div>
  )
}