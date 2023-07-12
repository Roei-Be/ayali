import '../CSS/Members.css';

const Members = () => {
    return(
        <div className="membersWrapper">
            <h1>Lab members (Present and Past)</h1>
            <div className='searchBar'><input type='text' placeholder='Search member...'></input></div>
            
            <div className='membersList'>
                <div className="memberItem">
                    <div className='img'><img src="https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif" alt="" /></div>
                    <div className="content">
                        <span className='name'>Omer Yuval</span>
                        <span className='info'>Post Doctoral ● <img src="https://www.svgrepo.com/show/922/linkedin.svg" alt="" /><img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="" /> ● 2023-present</span>
                    </div>
                </div>
                <div className="memberItem">
                    <div className='img'><img src="https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif" alt="" /></div>
                    <div className="content">
                        <span className='name'>Omer Yuval</span>
                        <span className='info'>Post Doctoral ● <img src="https://www.svgrepo.com/show/922/linkedin.svg" alt="" /><img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="" /> ● 2023-present</span>
                    </div>
                </div>
                <div className="memberItem">
                    <div className='img'><img src="https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif" alt="" /></div>
                    <div className="content">
                        <span className='name'>Omer Yuval</span>
                        <span className='info'>Post Doctoral ● <img src="https://www.svgrepo.com/show/922/linkedin.svg" alt="" /><img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="" /> ● 2023-present</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Members;