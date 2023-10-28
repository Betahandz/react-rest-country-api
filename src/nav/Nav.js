import { useGlobalContext } from '../hooks/useContext';
import './nav.css';

function Nav() {
    const { lightTheme, theme } = useGlobalContext();
    
    return <nav className={`nav container-fluid py-3 ${lightTheme ? "text-dark light-theme" : "text-light"}`}>
        <div className='container d-flex align-items-center justify-content-between'>
            <p className='nav-title my-0'><b>Where in the world?</b></p>
            <button className={`theme-toggle btn btn-sm ${lightTheme ? "text-dark" : "text-light"}`} onClick={theme}>
                Dark Mode
            </button>
        </div>
    </nav>
}

export default Nav;