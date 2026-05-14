export default function Keys() {

  const numbers = [10, 20, 30, 40]
  const users = [
    { id: 1, name: "Ivan" },
    { id: 2, name: "John" },
    { id: 3, name: "Kate" }
  ]

  const nested = [
    { id: 1, name: "Alice", skills: ["JS", "React"] },
    { id: 2, name: "Bob", skills: ["HTML", "CSS"] }
  ]

  return (
    <div className="section">

      <h2>Уникальные ключи (Keys)</h2>

      {/* №1 */}
      <div className="task">
        <h3>Задание 1</h3>
        <ul>
          {numbers.map((num) => <li key={num}>{num}</li>)}
        </ul>
      </div>

      {/* №2 */}
      <div className="task">
        <h3>Задание 2</h3>
        <ul>
          {users.map((u) => <li key={u.id}>{u.name}</li>)}
        </ul>
      </div>

      {/* №3 */}
      <div className="task">
        <h3>Задание 3</h3>
        {nested.map((user) => (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <ul>
              {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* №4 */}
      <div className="task">
        <h3>Задание 4</h3>
        {numbers.map((num, idx) => <p key={idx}>Элемент {num}</p>)}
      </div>

      {/* №5 */}
      <div className="task">
        <h3>Задание 5</h3>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>ID: {user.id}</p>
          </div>
        ))}
      </div>

      {/* №6 */}
      <div className="task">
        <h3>Задание 6</h3>
        <ul>
          {nested.map((user) => (
            <li key={user.id}>
              {user.name}: {user.skills.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      {/* №7 */}
      <div className="task">
        <h3>Задание 7</h3>
        {numbers.map((n) => (
          <div key={n}>
            <p>{n}² = {n * n}</p>
          </div>
        ))}
      </div>

      {/* №8 */}
      <div className="task">
        <h3>Задание 8</h3>
        {users.filter(u => u.id % 2 === 0).map(u => <p key={u.id}>{u.name}</p>)}
      </div>

      {/* №9 */}
      <div className="task">
        <h3>Задание 9</h3>
        {nested.map((u) => (
          <div key={u.id}>
            <h4>{u.name}</h4>
            <ul>
              {u.skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* №10 */}
      <div className="task">
        <h3>Задание 10</h3>
        <p>Уникальные ключи позволяют React быстро обновлять список элементов.</p>
      </div>

    </div>
  )
}