import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';
import Nav from './nav/Nav';
import { useGlobalContext } from './hooks/useContext';

function App() {
    const { lightTheme } = useGlobalContext();
    return(
        <div className={`App container-fluid px-0 ${lightTheme ? "light-theme" : null}`}>
            <Nav />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/details' element={<Details />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;