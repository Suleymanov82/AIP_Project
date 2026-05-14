export default function JSX() {

  const name = "Ivan"
  const age = 25

  const num1 = 10
  const num2 = 20

  const arr = [1, 2, 3]

  const user = {
    name: "John",
    age: 30
  }

  return (
    <div className="section">

      <h2>Язык JSX</h2>

      {/* №1 */}
      <div className="task">
        <h3>Задание 1</h3>
        <p>{2 + 3}</p>
      </div>

      {/* №2 */}
      <div className="task">
        <h3>Задание 2</h3>
        <p>{num1 + num2}</p>
      </div>

      {/* №3 */}
      <div className="task">
        <h3>Задание 3</h3>
        <p>{name}</p>
      </div>

      {/* №4 */}
      <div className="task">
        <h3>Задание 4</h3>
        <p>{age}</p>
      </div>

      {/* №5 */}
      <div className="task">
        <h3>Задание 5</h3>
        <p>{name} - {age}</p>
      </div>

      {/* №6 */}
      <div className="task">
        <h3>Задание 6</h3>
        <p>{arr}</p>
      </div>

      {/* №7 */}
      <div className="task">
        <h3>Задание 7</h3>
        {arr.map((v,i) => <p key={i}>{v}</p>)}
      </div>

      {/* №8 */}
      <div className="task">
        <h3>Задание 8</h3>
        <p>{user.name}</p>
        <p>{user.age}</p>
      </div>

      {/* №9 */}
      <div className="task">
        <h3>Задание 9</h3>
        <div>
          <p>Первый</p>
          <p>Второй</p>
          <p>Третий</p>
        </div>
      </div>

      {/* №10 */}
      <div className="task">
        <h3>Задание 10</h3>
        <div>
          <h4>Заголовок</h4>
          <p>Абзац текста</p>
        </div>
      </div>

      {/* №11 */}
      <div className="task">
        <h3>Задание 11</h3>
        <p>{num1 * num2}</p>
      </div>

      {/* №12 */}
      <div className="task">
        <h3>Задание 12</h3>
        <p>{num2 - num1}</p>
      </div>

      {/* №13 */}
      <div className="task">
        <h3>Задание 13</h3>
        <p>{Math.sqrt(25)}</p>
      </div>

      {/* №14 */}
      <div className="task">
        <h3>Задание 14</h3>
        <p>{name.toUpperCase()}</p>
      </div>

      {/* №15 */}
      <div className="task">
        <h3>Задание 15</h3>
        <p>{age + 10}</p>
      </div>

    </div>
  )
}