import BookShow from "./BookShow"
import useBooksContext from "../hooks/use-books-context"

function BookList(){
  const { books } = useBooksContext()

  const renderedBooks = books.map((book)=> {
    return <BookShow book={book} key={book.id} />
  })
  return (
  <div>
    <div className="book-list">
      {renderedBooks}
    </div>
  </div>
)}

export default BookList
