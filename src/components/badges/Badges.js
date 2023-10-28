import { useGlobalContext } from '../../hooks/useContext';
import './badges.css';

function Badges({ text }) {
    const { lightTheme } = useGlobalContext();
    return (
        <span className={`badges badge px-3 py-2 me-4 shadow-lg ${lightTheme ? "light-theme text-dark" : "text-light"}`}>
            <p className='m-0'>{text}</p>
        </span>
    )
}

export default Badges;