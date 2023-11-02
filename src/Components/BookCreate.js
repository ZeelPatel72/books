import { useState } from 'react'
function BookCreate({ onSubmit }) {
	const [title, setTitle] = useState('')
	const handleChange = (event) => {
		setTitle(event.target.value)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit(title)
		setTitle('')
	}
	return (
		<div className="book-create">
			<h3>Add a book</h3>
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input className="input" value={title} onChange={handleChange} placeholder="Harry Potter" />
				<button className="button">Add!</button>
				{/* <p> you entered: {title}</p> */}
			</form>
		</div>
	)
}
export default BookCreate
