import { useState } from "react";
import { Link } from "react-router-dom";

const MembersList = () => {

    const members = [
        {
            name: "omer",
            education: "Post Doctoral",
            activity: "2023 - present"
        },
        {
            name: "roei",
            education: "Post Doctoral",
            activity: "2023 - present"
        },
        {
            name: "ido",
            education: "Post Doctoral",
            activity: "2023 - present"
        },
        {
            name: "noam",
            education: "Post Doctoral",
            activity: "2023 - present"
        }

    ];

     

    const [inputValue, setInputValue] = useState("");

    const updateInputValue = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }



    return (
        <div className="membersWrapper">
            <h1>Lab members (Present and Past)</h1>
            <div className='searchBar'><input type='text' placeholder='Search member...' onChange={updateInputValue}></input></div>
                
            <div className='membersList'>
                {members.map((member, i) => {
                    return (
                        member.name.includes(inputValue) &&
                        <Link to={`profile/${i}`}>
                            <div className="memberItem">
                            <div className='img'><img src="https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif" alt="" /></div>
                            <div className="content">
                                <span className='name'>{member.name}</span>
                                <span className='info'>{member.education} ● <img src="https://www.svgrepo.com/show/922/linkedin.svg" alt="" /><img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="" /> ● {member.activity}</span>
                            </div>
                        </div>
                        </Link>
                        
                    )
                }) }
            </div>
        </div>
    )
}

export default MembersList;