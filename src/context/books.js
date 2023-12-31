import { createContext, useCallback, useState } from 'react'
import axios from 'axios'

const BooksContext = createContext()

function Provider({ children }) {
	const [books, setBooks] = useState([])
	const fetchBooks = useCallback(async () => {
		const response = await axios.get('http://localhost:3001/books')
		setBooks(response.data)
	}, [])

	const createBook = async (title) => {
		const response = await axios.post('http://localhost:3001/books', { title })
		const updatedBooks = [...books, response.data]
		setBooks(updatedBooks)
	}
	const deleteBookbyId = async (id) => {
		const response = await axios.delete(`http://localhost:3001/books/${id}`)
		console.log(response)
		const updatedBooks = books.filter((book) => {
			return book.id !== id
		})
		setBooks(updatedBooks)
	}
	const editBookbyId = async (id, title) => {
		const response = await axios.put(`http://localhost:3001/books/${id}`, { title })
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, ...response.data }
			}
			return book
		})
		setBooks(updatedBooks)
	}
	const valueToShare = {
		books,
		deleteBookbyId,
		editBookbyId,
		fetchBooks,
		createBook,
	}
	return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>
}

export { Provider }
export default BooksContext
