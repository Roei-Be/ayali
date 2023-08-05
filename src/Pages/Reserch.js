import { Route, Routes } from 'react-router-dom';

import ReserchList from '../components/ReserchList';
import ReserchPage from '../components/ReserchPage';

import '../CSS/Reserch.css'

const Reserch = () => {
    return(
        <Routes>
            <Route path='/' Component={ReserchList} />
            <Route path='/:id' Component={ReserchPage} />
        </Routes>
    )
}
    
    export default Reserch;