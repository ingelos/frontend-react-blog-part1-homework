import './NewPost.css';
import {useState} from "react";
import calculateReadTime from "../../helpers/calculateReadTime.jsx";
import {useNavigate} from "react-router-dom";


function NewPost() {
    const [formState, setFormState] = useState({
            title: '',
            subtitle: '',
            author: '',
            content: '',
        });

    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/posts');

        console.log({
            ...formState,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(formState.content),
        });

        console.log(`De post is succesvol aangemaakt`)
    }


    return (
        <>
            <section className='new-post-section outer-container'>
            <div className='inner-container'>
            <form className='new-post-form' onSubmit={handleSubmit}>
                <h1>Post toevoegen</h1>
                    <label htmlFor='post-title'>Titel</label>
                    <input type='text'
                           id='title-field'
                           name='title'
                           value={formState.title}
                           onChange={handleChange}
                           required
                    />
                    <label htmlFor='post-subtitle'>Subtitel</label>
                    <input type='text'
                           id='subtitle-field'
                           name='subtitle'
                           value={formState.subtitle}
                           onChange={handleChange}
                           required
                    />
                    <label htmlFor='post-author'>Auteur</label>
                    <input type='text'
                           id='author-field'
                           name='author'
                           value={formState.author}
                           onChange={handleChange}
                           required
                    />
                    <label htmlFor='post-content'>Bericht</label>
                    <textarea
                           id='content-field'
                           name='content'
                           rows='10'
                           cols='20'
                           minLength={300}
                           maxLength={2000}
                           value={formState.content}
                           onChange={handleChange}
                           required
                    ></textarea>
                <button type='submit'>Toevoegen</button>
                </form>
            </div>
            </section>
        </>
    );
}

export default NewPost;