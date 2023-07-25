import '../CSS/Members.css';
import { Route, Routes } from 'react-router-dom';
import MembersList from './MemebersList';
import MemberProfile from './MemberProfile';

const Members = () => {
   
    return(
        <Routes>
            <Route path='/' Component={MembersList} />
            <Route path='/profile/:id' Component={MemberProfile} />
        </Routes>
    );
}

export default Members;
                
