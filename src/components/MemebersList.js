import { useContext, useEffect, useState } from "react";
import { DBContext } from "../context/DBContext";
import { Link } from "react-router-dom";
import Papa from "papaparse";

const MembersList = () => {

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
            <h1>Lab members (Present and Past)</h1>

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
                        <Link to={`profile/${i}`}>
                            <div className="memberItem">
                                <div className='img'><img src={`${member.Photo ? member.Photo : "https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif"}`} alt="" /></div>
                                <div className="content">
                                    {/* <span className='name'>{member.Name}<p>&nbsp;{` (${member.Start_Year} - ${member.End_Year})`}</p></span> */}
                                    <span className='name'>{`${member.Name} (${member.Start_Year} - ${member.End_Year})`}</span>
                                    <span className='info'>
                                        {member.Role}
                                        <div className="socials">
                                            {member.Email.length !== 0 && <div><Link to={member.Email} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></Link></div>}
                                            {member.Scholar.length !== 0 && <div><Link to={member.Scholar} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg></Link></div>}
                                            {member.Linkedin.length !== 0 && <div><Link to={member.Linkedin} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></Link></div>}
                                            {member.ORCID.length !== 0 && <div><Link to={member.ORCID} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M294.75 188.19h-45.92V342h47.47c67.62 0 83.12-51.34 83.12-76.91 0-41.64-26.54-76.9-84.67-76.9zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-80.79 360.76h-29.84v-207.5h29.84zm-14.92-231.14a19.57 19.57 0 1 1 19.57-19.57 19.64 19.64 0 0 1-19.57 19.57zM300 369h-81V161.26h80.6c76.73 0 110.44 54.83 110.44 103.85C410 318.39 368.38 369 300 369z"/></svg></Link></div>}
                                            {member.GitHub.length !== 0 && <div><Link to={member.GitHub} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg></Link></div>}
                                            {member.Personal_Page.length !== 0 && <div><Link to={member.Personal_Page} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg></Link></div>}
                                        </div>
                                    </span>
                                    {member.Interests &&
                                        <div className="interest">
                                            <b>Interest:</b> &nbsp;
                                            {member.Interests.split(";").map((interest) => {
                                                return (
                                                    <span>{`${interest}`},&nbsp;</span>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                            </div>
                        </Link> 
                    )
                })}
            </div>
        </div>
    )
}

export default MembersList;