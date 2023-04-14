import BookCreate from './components/BookCreate'
import BookEdit from './components/BookEdit'
import BookList from './components/BookList'
import { useState } from "react"

function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
     setBooks([...books, {
      id: Math.round(Math.random() * 9999),
      title}])
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
        return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBook = (id, newTitle) =>{
    const updateBooks = books.map((book) => {
      if (book.id === id){
        return {...book, title: newTitle}
      }
      return book
    })
    setBooks(updateBooks)
  }

  return (
  <div className="app">
    <h1>Reading List</h1>
    <BookList books={books} onDelete={deleteBookById} onEdit={editBook} />
    <BookCreate onCreate={createBook} />
  </div>
  )
}
export default App
