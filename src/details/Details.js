import { useNavigate } from 'react-router-dom';
import './details.css';
import Img from '../img/Img';
import Briefing from '../briefing/Briefing';
import { useGlobalContext } from '../hooks/useContext';

function Details() {
    const navigate = useNavigate();
    const { countryData, index, lightTheme } = useGlobalContext();

    return (
        <div className='details py-3'>
            <button className={`back btn btn-sm shadow-lg mt-4 ${lightTheme ? "light-theme text-dark" : "text-light"}`}
                onClick={() => navigate('/')}
            >
                Go back
            </button>
            <div className='detail-board d-md-flex align-items-center'>
                <Img flag={countryData[index].flag}/>
                <Briefing {...countryData[index]}/>
            </div>
        </div>
    )
}

export default Details;