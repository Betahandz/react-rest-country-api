import { useGlobalContext } from '../hooks/useContext';
import './search.css';

function Search() {
    const { searchInput, updateSearch, lightTheme } = useGlobalContext();

    return(
        <form className='search py-3 py-md-5 d-md-flex align-items-center justify-content-between'>
            <div className='search-pack form-group shadow-lg'>
                <input 
                    className={`search-input w-100 rounded-2 px-3 py-2 ${lightTheme ? "light-theme" : null}`} 
                    name='country' 
                    id='country' 
                    type='text'
                    placeholder='Search for a country'
                    onChange={e => updateSearch(e)}
                    value={searchInput}
                />
            </div>
            <div className='form-group mt-4 mt-md-0 shadow-lg'>
                <select className={`search-filter px-3 py-2 rounded-2 ${lightTheme ? "light-theme" : null}`}>
                    <option className='search-opt py-3 rounded-3'>Filter By Region</option>
                    <option className='search-opt py-3'>Filter By Region</option>
                    <option className='search-opt py-3'>Filter By Region</option>
                </select>
            </div>
        </form>
    )
}

export default Search;