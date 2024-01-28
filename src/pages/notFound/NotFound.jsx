import {Link} from "react-router-dom";


function NotFound() {

    return (
        <>
            <h2>Oops... This page does not exist</h2>
            <p>Take me back to the <Link to='/'>Home page.</Link></p>
        </>
    );
}

export default NotFound;