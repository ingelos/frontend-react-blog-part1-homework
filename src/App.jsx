import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Overview from './pages/overview/Overview.jsx';
import NewPost from './pages/post/NewPost.jsx';
import NotFound from './pages/notFound/NotFound';
import Navigation from "./components/navigation/Navigation.jsx";
import PostDetail from './pages/postDetail/PostDetail.jsx'

function App() {

    return (
        <>
            <section className='main outer-container'>
            <Navigation/>
                <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<NewPost/>}/>
                <Route path="/posts" element={<Overview/>}/>
                <Route path="/posts/:id" element={<PostDetail/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
                </main>
            </section>
            <footer>
                Blogventure © 2023 - ontwikkeld voor NOVI Hogeschool
            </footer>
        </>
    )
}

export default App
