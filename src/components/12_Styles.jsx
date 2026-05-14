export default function Styles() {

  return (
    <div className="section">

      <h2>Стилизация</h2>

      {/* №1 ⊗ jsrtPmJxInr */}
      <div className="task">
        <h3>Задание 1: Цвет текста и фона</h3>
        <p style={{ color: "blue", backgroundColor: "#eef" }}>Синий текст на светлом фоне</p>
      </div>

      {/* №2 ⊗ jsrtPmJxInr */}
      <div className="task">
        <h3>Задание 2: Кнопка с hover</h3>
        <button className="hover-btn">Наведи на меня</button>
      </div>

      {/* №3 ⊗ jsrtPmJxInr */}
      <div className="task">
        <h3>Задание 3: Карточка с тенью</h3>
        <div className="card">
          <h4>Карточка</h4>
          <p>Текст внутри карточки</p>
        </div>
      </div>

      {/* №4 ⊗ jsrtPmJxInr */}
      <div className="task">
        <h3>Задание 4: Стилизация таблицы</h3>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Возраст</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Kate</td>
              <td>22</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}