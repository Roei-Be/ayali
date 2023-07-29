import { Route, Routes } from 'react-router-dom';

const Publications = () => {
    return (
        <Routes>
            <Route path='/' Component={MembersList} />
            <Route path='/reserch/:id' Component={MemberProfile} />
        </Routes>
    )
}

export default Publications;