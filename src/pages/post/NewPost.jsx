import './NewPost.css';
import {useState} from "react";
import calculateReadTime from "../../helpers/calculateReadTime.jsx";
import {Link} from "react-router-dom";
import axios from "axios";
import Input from "../../components/input/Input.jsx";


function NewPost() {
    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });
    const [submitSuccessId, setSubmitSuccessId] = useState(null);
    const [error, setError] = useState(false);


    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(false)

        console.log({
            ...formState,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(formState.content),
        });

        try {
            const response = await axios.post('http://localhost:3000/posts', {
                ...formState,
                shares: 0,
                comments: 0,
                created: new Date().toISOString(),
                readTime: calculateReadTime(formState.content),
            });
            console.log(response.data);

            console.log(`De post is succesvol aangemaakt`);
            setSubmitSuccessId(response.data.id);

        } catch (e) {
            console.error(e);
            setError(true);
        }
    }


    return (
        <section className='new-post-section outer-container'>
            <div className='inner-container'>
                {!submitSuccessId ?
                    <form className='new-post-form' onSubmit={handleSubmit}>
                        <h1>Post toevoegen</h1>
                        <Input
                            type='text'
                            name='title'
                            labelText='Titel'
                            value={formState.title}
                            onChange={handleChange}
                            required={true}
                        />
                        <Input
                            type='text'
                            name='subtitle'
                            labelText='Subtitel'
                            value={formState.subtitle}
                            onChange={handleChange}
                            required={true}
                        />
                        <Input
                            type='text'
                            name='author'
                            labelText='Naam en Achternaam'
                            value={formState.author}
                            onChange={handleChange}
                            required={true}
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
                        {error && <p className='error-message'>Er is iets misgegaan bij het versturen van het formulier. Probeer het opnieuw</p>}
                    </form>
                    : <p>De blogpost is toegevoegd! Je kunt deze <Link
                        to={`/posts/${submitSuccessId}`}>hier</Link> bekijken.</p>}
            </div>
        </section>
    );
}

export default NewPost;

//
// <label htmlFor='post-subtitle'>Subtitel</label>
// <input type='text'
//        id='subtitle-field'
//        name='subtitle'
//        value={formState.subtitle}
//        onChange={handleChange}
//        required
// />