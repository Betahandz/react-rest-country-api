import Country from '../components/country/Country';
import { useGlobalContext } from '../hooks/useContext';
import Search from '../search/Search';
import './home.css';

function Home() {
    const { countryData } = useGlobalContext();

    return(
        <div className='home'>
            <Search />
            <div className='display-country container'>
                {
                    countryData.map((country, countryIndex) => {
                    return (
                        <Country
                            key={countryIndex}
                            {...country}
                            delay={countryIndex}
                        />
                    )  
                    })
                }
            </div>
        </div>
    )
}

export default Home;