import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

export const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setPending] = useState(false);
    const history = useHistory();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const blog = {title, body, author}
        setPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added!');
            setPending(false)
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h1>Add a new blog!</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Blog Description:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <label>Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Mario">Marion</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!isPending && <button type="submit">Submit Blog</button>}
                {isPending && <button disabled>Submitting...</button>}
            </form>
        </div>
    )
}
export default Create;
