import React from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import useFetch from './useFetch';

export const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data, loading, error } = useFetch('http://localhost:8000/blogs/' + id);
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Author:&ensp;{data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    )
}
