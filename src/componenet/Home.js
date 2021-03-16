import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(function () {
        return (
            fetch('http://localhost:8000/blogss')
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch data from the resources!!!')
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setLoading(false);
                })
                .catch(function(err){
                    setError(err.message);
                    setLoading(false);
                })
        );
    })

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}
export default Home;