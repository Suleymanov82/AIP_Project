export default function Conditions() {

  const age = 20
  const isAdmin = true
  const num = 5

  return (
    <div className="section">

      <h2>Условия</h2>

      {/* №1 */}
      <div className="task">
        <h3>Задание 1</h3>
        {age >= 18 ? <p>Доступ разрешен</p> : <p>Нет доступа</p>}
      </div>

      {/* №2 */}
      <div className="task">
        <h3>Задание 2</h3>
        {isAdmin && <p>Администратор</p>}
        {!isAdmin && <p>Пользователь</p>}
      </div>

      {/* №3 */}
      <div className="task">
        <h3>Задание 3</h3>
        {num % 2 === 0 ? <p>Четное число</p> : <p>Нечетное число</p>}
      </div>

      {/* №4 */}
      <div className="task">
        <h3>Задание 4</h3>
        {age < 18 ? <p>Молодой</p> : age < 30 ? <p>Взрослый</p> : <p>Зрелый</p>}
      </div>

      {/* №5 */}
      <div className="task">
        <h3>Задание 5</h3>
        {isAdmin ? <p>Вы админ</p> : <p>Вы гость</p>}
      </div>

      {/* №6 */}
      <div className="task">
        <h3>Задание 6</h3>
        {age >= 18 && isAdmin && <p>Совершеннолетний админ</p>}
        {!(age >= 18 && isAdmin) && <p>Не соответствует условию</p>}
      </div>

      {/* №7 */}
      <div className="task">
        <h3>Задание 7</h3>
        {age >= 18 ? (
          <div>
            <p>Доступ есть</p>
            <p>Возраст: {age}</p>
          </div>
        ) : (
          <p>Доступ запрещен</p>
        )}
      </div>

      {/* №8 */}
      <div className="task">
        <h3>Задание 8</h3>
        <p>{isAdmin ? "Админ" : "Пользователь"}</p>
      </div>

      {/* №9 */}
      <div className="task">
        <h3>Задание 9</h3>
        {num > 0 && <p>Положительное число</p>}
        {num < 0 && <p>Отрицательное число</p>}
      </div>

      {/* №10 */}
      <div className="task">
        <h3>Задание 10</h3>
        {num === 5 ? <p>Число равно 5</p> : <p>Число не равно 5</p>}
      </div>

    </div>
  )
}