import { useState } from 'react'
function BookCreate() {
	const [title, setTitle] = useState('')
	const handleChange = (event) => {
		setTitle(event.target.value)
	}
	return (
		<div>
			<input value={title} onChange={handleChange} placeholder="Harry Potter" />
			<p> you entered: {title}</p>
		</div>
	)
}
export default BookCreate
