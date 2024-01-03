import {NavLink} from "react-router-dom";
import './Navigation.css'
import logoMedium from '../../assets/logo-medium.png'


function Navigation() {

    return (
        <nav>
            <div className='nav-container'>
            <img src={logoMedium} alt="Company logo" id='nav-img'/>
                    <ul className='navigation-links'>
                         <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/" id='link'>Home</NavLink></li>
                         <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/posts" id='link'>Alle Posts</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/new" id='link'>Nieuwe post</NavLink></li>
                     </ul>
            </div>
        </nav>
    )
}

export default Navigation;