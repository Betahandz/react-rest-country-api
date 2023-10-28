import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/useContext';
import './country.css';

function Country({
    name,
    population,
    flags : {png, svg},
    region,
    capital,
    delay,
    update
}) {
    const { hide, updateIndex, lightTheme } = useGlobalContext();
    const navigate = useNavigate();


    return (
        <article className={`country p-0 shadow-lg ${hide ? 'disappear' : null} ${lightTheme ? "light-theme text-dark" : "text-light"}`} style={{
            transitionDelay: "."+delay+"s"
        }} onClick={() => {
            updateIndex(delay);
            navigate('/details')
            }
        }>
            <div className='country-flag'>
                <img src={svg} alt="flag" className='img-fluid' />
            </div>
            <div className='country-brief p-3'>
                <h5 className='country-title'>{name}</h5>
                <div className='country-shorts pt-2'>
                    <p className='population m-0'><b className='text-capitalize'>population:</b> {population}</p>
                    <p className='region m-0'><b className='text-capitalize'>region:</b> {region}</p>
                    <p className='capital m-0'><b className='text-capitalize'>capital:</b> {capital}</p>
                </div>
            </div>
        </article>
    )
}

export default Country;