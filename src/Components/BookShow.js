import { useState } from 'react'
import BookEdit from './BookEdit'
import useBooksContext from '../hooks/use-books-context'

function BookShow({ book, onDelete, onEdit }) {
	const { deleteBookbyId } = useBooksContext()
	const [showEdit, setShowEdit] = useState(false)
	const handleClick = () => {
		deleteBookbyId(book.id)
	}
	const handleEditClick = () => {
		setShowEdit(!showEdit)
	}
	const handleSubmit = () => {
		setShowEdit(false)
	}
	let content = <h3>{book.title}</h3>
	if (showEdit) {
		content = <BookEdit book={book} onSubmit={handleSubmit} />
	}
	return (
		<div className="book-show">
			<img alt="books" src={`https://picsum.photos/seed/${book.title}/300/200`} />
			<div>{content}</div>

			<div className="actions">
				<button className="edit" onClick={handleEditClick}></button>
				<button className="delete" onClick={handleClick}></button>
			</div>
		</div>
	)
}
export default BookShow
