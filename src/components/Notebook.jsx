import { useState } from "react"

export default function Notebook() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Первая заметка", content: "Это текст первой заметки" },
    { id: 2, title: "Вторая заметка", content: "Это текст второй заметки" },
  ])
  const [selectedId, setSelectedId] = useState(notes[0].id)
  const [newTitle, setNewTitle] = useState("")
  const [search, setSearch] = useState("")

  const selectedNote = notes.find(n => n.id === selectedId)

  const addNote = () => {
    if(newTitle.trim() === "") return
    const newNote = { id: Date.now(), title: newTitle, content: "" }
    setNotes([newNote, ...notes])
    setSelectedId(newNote.id)
    setNewTitle("")
  }

  const deleteNote = (id) => {
    const updated = notes.filter(n => n.id !== id)
    setNotes(updated)
    if(id === selectedId && updated.length > 0) setSelectedId(updated[0].id)
  }

  const updateContent = (e) => {
    setNotes(notes.map(n => n.id === selectedId ? { ...n, content: e.target.value } : n))
  }

  const filteredNotes = notes.filter(n => n.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="section notebook-section">
      <h2>Проект Блокнот</h2>
      <div className="notebook-container">

        {/* Левая панель: список заметок */}
        <div className="notes-menu">
          <input
            type="text"
            placeholder="Поиск..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <ul>
            {filteredNotes.map(note => (
              <li
                key={note.id}
                className={note.id === selectedId ? "active" : ""}
                onClick={() => setSelectedId(note.id)}
              >
                {note.title}
                <button onClick={(e)=>{e.stopPropagation(); deleteNote(note.id)}}>❌</button>
              </li>
            ))}
          </ul>

          <input
            type="text"
            placeholder="Новая заметка"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
          <button onClick={addNote}>Добавить</button>
        </div>

        {/* Правая панель: textarea */}
        <div className="note-editor">
          {selectedNote ? (
            <textarea
              value={selectedNote.content}
              onChange={updateContent}
              placeholder="Введите текст заметки..."
            />
          ) : (
            <p>Выберите заметку</p>
          )}
        </div>

      </div>
    </div>
  )
}