import './App.css'

import ReactBasics from './components/01_ReactBasics'
import JSX from './components/02_JSX'
import Conditions from './components/03_Conditions'
import Functions from './components/04_Functions'
import TagGeneration from './components/05_TagGeneration'
import Keys from './components/06_Keys'
import States from './components/07_States'
import Forms from './components/08_Forms'
import Data from './components/09_Data'
import Components from './components/10_Components'
import Concepts from './components/11_Concepts'
import Styles from './components/12_Styles'
import Notebook from './components/Notebook' // <-- новый компонент

import { useState, useEffect } from 'react'

function App() {
  const sections = [
    { id: 'react-basics', title: 'Основной учебник', emoji: '🟢' },
    { id: 'jsx', title: 'JSX', emoji: '📘' },
    { id: 'conditions', title: 'Условия', emoji: '⚡' },
    { id: 'functions', title: 'Функции', emoji: '🔧' },
    { id: 'tag-generation', title: 'Формирование тегов', emoji: '🖋' },
    { id: 'keys', title: 'Уникальные ID', emoji: '#️⃣' },
    { id: 'states', title: 'Стейты', emoji: '🔹' },
    { id: 'forms', title: 'Формы', emoji: '📝' },
    { id: 'data', title: 'Данные', emoji: '📊' },
    { id: 'components', title: 'Компоненты', emoji: '👥' },
    { id: 'concepts', title: 'Концепции', emoji: '💡' },
    { id: 'styles', title: 'Стилизация', emoji: '🎨' },
    { id: 'notebook', title: 'Блокнот', emoji: '🗒️' } // <-- новый раздел
  ]

  const [active, setActive] = useState('react-basics')

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(section => {
        const el = document.getElementById(section.id)
        if(el) {
          const top = el.getBoundingClientRect().top
          if(top <= 150) setActive(section.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="container">
      <header className="page-header">
        <div className="page-header__text">
          <p className="eyebrow">Учебная практика по React</p>
          <h1>React Code.mu Tasks</h1>
          <p className="page-description">
            Собранный конспект с примерами по JSX, состояниям, формам, компонентам и небольшими мини-проектами.
          </p>
        </div>
        <div className="page-header__meta">
          <span>{sections.length} разделов</span>
          <span>Практика + заметки</span>
        </div>
      </header>

      <div className="main-layout">
        <div className="content">
          <div id="react-basics"><ReactBasics /></div>
          <div id="jsx"><JSX /></div>
          <div id="conditions"><Conditions /></div>
          <div id="functions"><Functions /></div>
          <div id="tag-generation"><TagGeneration /></div>
          <div id="keys"><Keys /></div>
          <div id="states"><States /></div>
          <div id="forms"><Forms /></div>
          <div id="data"><Data /></div>
          <div id="components"><Components /></div>
          <div id="concepts"><Concepts /></div>
          <div id="styles"><Styles /></div>
          <div id="notebook"><Notebook /></div> {/* <-- подключаем блокнот */}
        </div>

        <div className="sidebar">
          <h3>Навигация</h3>
          <p className="sidebar-caption">Быстрый переход по разделам курса</p>
          <ul>
            {sections.map(sec => (
              <li
                key={sec.id}
                className={active === sec.id ? 'active' : ''}
                onClick={() => scrollTo(sec.id)}
              >
                <span className="emoji">{sec.emoji}</span> {sec.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
