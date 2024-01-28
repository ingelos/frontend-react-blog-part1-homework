
import './Overview.css';
import {useEffect, useState} from "react";
import axios from "axios";
import PostItem from "../../components/postItem/PostItem.jsx";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";


function Overview() {
        const [posts, setPosts] = useState([]);
        const [error, setError] = useState(false);

        useEffect(() => {


        async function fetchPosts() {
            setError(false);

            try {
                const response = await axios.get('http://localhost:3000/posts')
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.error(error)
                setError(true);
            }
        }

        fetchPosts();

        }, []);


    return (
        <>
            <section className='overview-section outer-container'>
                <div className='inner-container'>
                    {posts.length > 0 && (
                        <>
                    <h1>Bekijk alle {posts.length} posts op het platform</h1>
                        <ul className='post-list'>
                         {posts.map((post) => {
                             return <PostItem
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                shares={post.shares}
                                comments={post.comments}
                                author={post.author}
                                />
                         })}
                    </ul>
                        </>
                    )}
                    {error && <ErrorMessage message='Er is iets misgegaan bij het ophalen van de data. Probeer het opnieuw.' />}
                </div>
            </section>
        </>
    );
}

export default Overview;