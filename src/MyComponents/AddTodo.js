import React, { useState } from 'react'

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or Description cannot be blank")
        }
        else {
            addTodo(title, description);
            setTitle("");
            setDescription("");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a Note</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Save</button>
            </form>
        </div>
    )
}
