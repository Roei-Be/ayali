import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DBContext } from "../context/DBContext";
import { Link } from "react-router-dom";
import Github from "../assets/Github";
import Scholar from "../assets/Scholar";
import Email from "../assets/Email";
import Linkedin from "../assets/Linkedin";
import ORCID from "../assets/ORCID";
import Personal from "../assets/Personal";

/* import { icon } from '@fortawesome/fontawesome-svg-core/import.macro' */

const MembersList = () => {

    const {darkMode} = useContext(ThemeContext);
    const { members } = useContext(DBContext);

    const [inputValue, setInputValue] = useState("");
    const [RoleValue, setRoleValue] = useState("");
    const [activeValue, setActiveValue] = useState("");

    const updateInputValue = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const setRole = (event) => {
        setRoleValue(event.target.value);
    };
    
    const setActiveTime = (event) => {
        setActiveValue(event.target.value);
    };


    return (
        <div className="membersWrapper">
            <div className="membersTitle">Lab members (Present and Past)</div>

            <div className="search">
                <div className='searchBar'><input type='text' placeholder='Search member...' onChange={updateInputValue}></input></div>
                <div className="searchRole">
                    <select onChange={setRole}>
                        <option value="">Chose Role</option>
                        <option value="Principal investigator">Principal investigator</option>
                        <option value="Lab manager">Lab manager</option>
                        <option value="Post-doctoral researcher">Post-doctoral researcher</option>
                        <option value="PhD student">PhD student</option>
                        <option value="M.Sc. student">M.Sc. student</option>
                        <option value="Project student">Project student</option>
                    </select>
                </div>
                <div className="searchActive">
                    <select onChange={setActiveTime}>
                            <option value="">All time</option>
                            <option value="Yes">Present</option>
                            <option value="No">Past</option>
                        </select>
                    </div>
            </div>
                
            <div className='membersList'>
                {members && members.map((member, i) => {
                    return (
                        (member.Name.toLowerCase().includes(inputValue.toLowerCase()) && (RoleValue === "" || member.Role === RoleValue) && (activeValue === "" || ((activeValue === "Yes" && member.End_Year === "Current") || (activeValue === "No" && member.End_Year !== "Current")))) &&
                        <div className={`${darkMode ? "memberItem memberItemDark" : "memberItem"}`}>
                            {console.log("member:" + member)}
                            <div className='img'><img src={`${member.Photo ? member.Photo : "https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif"}`} alt="" /></div>
                            <div className="content">
                                {/* <span className='name'>{member.Name}<p>&nbsp;{` (${member.Start_Year} - ${member.End_Year})`}</p></span> */}
                                <Link to={`profile/${i}`}><span className={`${darkMode ? "name nameDark" : "name"}`}>{`${member.Name} (${member.Start_Year} - ${member.End_Year})`}</span></Link>
                                <span className='info'>
                                    <div className="role">{member.Role}</div>
                                    &nbsp;
                                    <div className="socials">
                                        {member.Email.length !== 0 && <Link to={member.Email} target="_blank"><Email color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                                        {member.Scholar.length !== 0 && <Link to={member.Scholar} target="_blank"><Scholar color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                                        {member.Linkedin.length !== 0 && <Link to={member.Linkedin} target="_blank"><Linkedin color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                                        {member.ORCID.length !== 0 && <Link to={member.ORCID} target="_blank"><ORCID color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                                        {member.GitHub.length !== 0 && <Link to={member.GitHub} target="_blank"><Github color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                                        {member.Personal_Page.length !== 0 && <Link to={member.Personal_Page} target="_blank"><Personal color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                                    </div>
                                </span>  
                                <div className="interest">
                                <b style={{ opacity: member.Interests ? '1' : '0', userSelect: member.Interests ? "" : "none" }}>Interest: <>&nbsp;</></b> 
                                    {member.Interests && member.Interests.split(";").map((interest) => {
                                        return (
                                            <span>{`${interest}`},&nbsp;</span>
                                        )
                                    })}
                                </div>
                            </div>
                            <Link className={`goto ${darkMode ? "gotoDark" : ""}`} to={`profile/${i}`}><span className="material-symbols-outlined">arrow_forward_ios</span></Link>
                            {/* <Link className={`goto ${darkMode ? "gotoDark" : ""}`} to={`profile/${i}`}>❯</Link> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MembersList;