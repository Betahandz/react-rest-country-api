import Borders from '../borders/Borders';
import { useGlobalContext } from '../hooks/useContext';
import './briefing.css';

function Briefing({
    name,
    topLevelDomain,
    capital,
    subregion,
    region,
    population,
    nativeName,
    currencies,
    languages,
    borders
}) {
    const { lightTheme } = useGlobalContext();
    return (
        <article className={`detail-briefing p-md-4 ${lightTheme ? "light-theme text-dark" : "text-light"}`}>

            <header className='hero'>
                <h1 className='title'>{name}</h1>
            </header>

            <div className='detail-info d-md-flex align-items-start justify-contents-between'>

                <div className='left py-4 py-md-0'>
                    <p className='native'><b>Native name:</b> {nativeName}</p>
                    <p className='population'><b>Population:</b> {population}</p>
                    <p className='region'><b>Region:</b> {region}</p>
                    <p className='sub-region'><b>Sub Region:</b> {subregion}</p>
                    <p className='capital'><b>Capital:</b> {capital}</p>
                </div>

                <div className='right pb-4 pb-md-0'>
                    <p className='domain'><b>Top level domain:</b> {topLevelDomain[0]}</p>
                    <p className='currency'><b>Currencies:</b> {currencies[0].name}</p>
                    <p className='lang'><b>Languages:</b> 
                        {
                            languages.map(lang => {
                                return <span className='mx-2'>{lang.name}</span>
                            })
                        }
                    </p>
                </div>

            </div>

            <Borders border={borders} />
        </article>
    )
}

export default Briefing;