import { useState } from "react"
import useBooksContext from "../hooks/use-books-context"
function BookEdit({ book, onSubmit }){

  const [value, setValue] = useState(book.title)
  const { editBook } = useBooksContext()

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    onSubmit()
    editBook(book.id, value)
  }
  return <form className="book-edit" onSubmit={handleSubmit}>
    <label>Title</label>
    <input className="input" onChange={handleChange} value={value}/>
    <button className="button is-primary">Save</button>
  </form>
}

export default BookEdit
