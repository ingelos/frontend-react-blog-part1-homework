import {Link, useParams} from "react-router-dom";
import formatDateString from "../../helpers/formatDateString.jsx";
import './PostDetail.css';
import {Clock} from '@phosphor-icons/react';
import {useEffect, useState} from "react";
import axios from "axios";


function PostDetail() {
    const [post, setPost] = useState([]);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {

    async function fetchPost() {
        setError(false);

        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`)
            console.log(response.data);
            setPost(response.data);
        } catch (error) {
            console.error(error)
            setError(true);
        }
    }

    fetchPost();

    }, []);

    const [deleteSuccess, setDeleteSuccess] = useState(null);

    async function deletePost() {
        setError(false)
        try {
            const response = await axios.delete(`http://localhost:3000/posts/${id}`);
            console.log(response.data, 'Het verwijderen van de blogpost is gelukt!');

            setDeleteSuccess(response.data);

        } catch (e) {
            console.error(error);
            setError(true)
        }
    }


    return (
        <>
            <section className='post-detail-section outer-container'>
                <div className='post-detail inner-container'>
                    {!deleteSuccess ?
                        <article>
                    {Object.keys(post).length > 0 && (
                        <>
                            <h1>{post.title}</h1>
                            <h2>{post.subtitle}</h2>
                            <p>Geschreven door {post.author} op {formatDateString(post.created)}</p>
                            <span className='post-detail-read-time'>
                            <Clock color='grey' size={14}/>
                            <p> {post.readTime} minuten lezen</p>
                            </span>
                            <p>{post.content}</p>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </>
                    )}
                    {error && <p>Er is iets misgegaan bij het ophalen van de data. Probeer het opnieuw</p>}
                    <button type='submit' onClick={deletePost}>Delete post</button>
                    </article>
                    : <p>De blogpost is verwijderd! Je kunt <Link to={`/posts`} className='link-back'>hier</Link> terug naar de overzichtspagina.</p>}
                </div>
            </section>
        </>
    );
}

export default PostDetail;


{/*<button type="button" onClick={fetchPost}>Haal de post op</button>*/}