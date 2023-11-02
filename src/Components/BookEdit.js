import { useState } from 'react'

function BookEdit({ book, onSubmit }) {
	const [newTitle, setNewTitle] = useState(book.title)
	const handleChange = (event) => {
		setNewTitle(event.target.value)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit(book.id, newTitle)
	}
	return (
		<div>
			<form className="book-edit" onSubmit={handleSubmit}>
				<input className="input" placeholder="New Title" onChange={handleChange} value={newTitle} />
				<button className="button is-primary">Save</button>
			</form>
		</div>
	)
}
export default BookEdit
