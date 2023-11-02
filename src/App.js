import { useState } from 'react'
import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'

function App() {
	const [books, setBooks] = useState([])
	const createBook = (title) => {
		const updatedBooks = [...books, { id: Math.round(Math.random() * 999), title }]
		setBooks(updatedBooks)
	}
	const deleteBookbyId = (id) => {
		const updatedBooks = books.filter((book) => {
			return book.id !== id
		})
		setBooks(updatedBooks)
	}
	const editBookbyId = (id, title) => {
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, title }
			}
			return book
		})
		setBooks(updatedBooks)
	}
	return (
		<div className="app">
			<h1>ReadingList</h1>
			<BookList books={books} onDelete={deleteBookbyId} onEdit={editBookbyId} />
			<BookCreate onSubmit={createBook} />
		</div>
	)
}
export default App
