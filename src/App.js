import { useState } from 'react'
import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'
function App() {
	const [books, setBooks] = useState('')
	return (
		<div>
			<BookCreate />
			<BookList />
		</div>
	)
}
export default App
