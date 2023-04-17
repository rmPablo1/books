import { createContext, useState } from "react"
import axios from "axios"

const BooksContext = createContext()

function Provider({children}) {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books")
    setBooks(response.data)
  }

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title
    })
    setBooks([...books, response.data])
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
        return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBook = async (id, newTitle) =>{

    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title: newTitle
    })
    console.log(response)

    const updateBooks = books.map((book) => {
      if (book.id === id){
        return { ...book, ...response.data }
      }
      return book
    })

    setBooks(updateBooks)
  }

  const valueToShare = {
    books,
    deleteBookById,
    editBook,
    createBook,
    fetchBooks
  }
  return <BooksContext.Provider value={valueToShare}>
    {children}
  </BooksContext.Provider>
}

export { Provider }
export default BooksContext
