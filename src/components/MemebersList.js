import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";


const MembersList = () => {
    
    const [members, setMembers] = useState(null);
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                console.log(results);
                setMembers(results.data);
            }
        })
    },[]);

    const [inputValue, setInputValue] = useState("");

    const updateInputValue = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }



    return (
        <div className="membersWrapper">
            <h1>Lab members (Present and Past)</h1>
            <div className="search">
                <div className='searchBar'><input type='text' placeholder='Search member...' onChange={updateInputValue}></input></div>
                <div className="searchTitle"></div>
                <div className="searchActive"></div>
            </div>
                
            <div className='membersList'>
                {members && members.map((member, i) => {
                    return (
                        member.Name.toLowerCase().includes(inputValue.toLowerCase()) &&
                        <Link to={`profile/${i}`}>
                            <div className="memberItem">
                                <div className='img'><img src="https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif" alt="" /></div>
                                <div className="content">
                                    <span className='name'>{member.Name}</span>
                                    <span className='info'>
                                        {member.Role} 
                                        ● 
                                        <img src="https://www.svgrepo.com/show/922/linkedin.svg" alt="" />
                                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="" /> 
                                        ● 
                                        {member.Start_Year} - {member.End_Year}</span>
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