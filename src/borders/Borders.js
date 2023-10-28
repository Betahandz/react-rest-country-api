import Badges from '../components/badges/Badges';
import { useGlobalContext } from '../hooks/useContext';
import './borders.css';

function Borders({border}) {
    const { lightTheme } = useGlobalContext();
    return (
        <div className={`borders d-md-flex align-items-center mt-md-3 ${lightTheme ? "light-theme text-dark" : "text-light"}`}>
            <h6 className='title'>Border Countries:</h6>
            <div className='border-countries d-flex align-items-center ms-md-3'>
                { 
                    border ? border.map(boundary => {
                        return <Badges key={boundary} text={boundary}/>
                    }) : <Badges text={'no registered border'} />
                }
            </div>
        </div>
    )
}

export default Borders;