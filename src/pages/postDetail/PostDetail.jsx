import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import formatDateString from "../../helpers/formatDateString.jsx";
import './PostDetail.css';
import {Clock, CaretLeft} from '@phosphor-icons/react';


function PostDetail() {

    const { id } = useParams();

    const {title, readTime, subtitle, author, created, content, comments, shares} = posts.find((post) => {
        return post.id.toString() === id
    })

    return (
        <>
            <section className='post-detail-section outer-container'>
                <div className='post-detail inner-container'>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>Geschreven door {author} op {formatDateString(created)}</p>
                    <span className='post-detail-read-time'>
                        <Clock color='grey' size={14}/>
                        <p> {readTime} minuten lezen</p>
                    </span>
                    <p>{content}</p>
                    <p>{comments} reacties - {shares} keer gedeeld</p>

                    <Link to='/posts' className='link-back'>
                        <CaretLeft color='#38E991' size={18}/>
                        <p>Terug naar de overzichtspagina</p>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default PostDetail;