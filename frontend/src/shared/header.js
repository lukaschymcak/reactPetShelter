import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pets">Find a Pet</NavLink>
            <NavLink to="/admin">Admin</NavLink>
        </nav>
    </header>
);
export default Header;
