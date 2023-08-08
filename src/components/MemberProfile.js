import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { DBContext } from '../context/DBContext';

import Github from "../assets/Github";
import Scholar from "../assets/Scholar";
import Email from "../assets/Email";
import Linkedin from "../assets/Linkedin";
import ORCID from "../assets/ORCID";
import Personal from "../assets/Personal";

import '../CSS/MemberProfile.css'

const MemberProfile = () => {

    const { darkMode } =useContext(ThemeContext);

    const {members} = useContext(DBContext);
    const [member, setMember] = useState();

    const { id } = useParams();

    useEffect(() => {
        members && setMember(members[id]);
    },[members]);

    return(
        <div className="memberWrapper">

            <Link className="back" to={"/members"}><span>See all members</span></Link>
            {member &&
            <>
                <div className="profile">
                    <div className="profileCard">
                        <div className="image"><img src={`${member.Photo ? member.Photo : "https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif"}`} alt="" /></div>
                        <div className="name">{member.Name}</div>
                        <div className="position">{member.Title}</div>
                        <br/>
                        <div className="role">{member.Role}</div>
                        <div className="shortSummary">{member.Short_Summary}</div>
                        <br/>
                        <div className="socials">
                            {member.Email.length !== 0 && <Link to={member.Email} target="_blank"><Email color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                            {member.Scholar.length !== 0 && <Link to={member.Scholar} target="_blank"><Scholar color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                            {member.Linkedin.length !== 0 && <Link to={member.Linkedin} target="_blank"><Linkedin color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                            {member.ORCID.length !== 0 && <Link to={member.ORCID} target="_blank"><ORCID color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                            {member.GitHub.length !== 0 && <Link to={member.GitHub} target="_blank"><Github color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                            {member.Personal_Page.length !== 0 && <Link to={member.Personal_Page} target="_blank"><Personal color={`${darkMode ? "rgb(187 222 251)" : "black"}`}/></Link>}
                        </div>
                    </div>
                    
                    <div className="profileContent">
                        <div className="info">{member.Long_Summary}</div>
                        
                        {member.Email && <div className="contact">
                            <h1>Contact details</h1>
                            <ul>
                                {member.Email && <li><span>Email: </span>{member.Email}</li>}
                            </ul>
                        </div>}

                        <div className="CV">
                            {member.Interests && <div className="interests">
                                <h1>Interests</h1>
                                <ul>
                                    {(member.Interests.split(";")).map((x) => {
                                        return (
                                            <li>{x}</li>
                                        )
                                    })}
                                </ul>
                            </div>}
                            {member.Education && <div className="education">
                                <h2>Education</h2>
                                <ul>
                                    <li>PhD</li>
                                    <li>MSdasdassssssssssssssssssssssssssssssssssssssssssssssdasdc</li>
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>


                {member.Scholar && <div className="publish">
                    <h1>Latest</h1>
                    <ul>
                        <li>The neuromechanical control of Caenorhabditis elegans head motor behavior in a 3D environment</li>
                        <li>The neuromechanical control of Caenorhabditis elegans head motor behavior in a 3D environment</li>
                        <li>The neuromechanical control of Caenorhabditis elegans head motor behavior in a 3D environment</li>
                    </ul>
                </div>}
            </>
            }
        </div>
    )
}

export default MemberProfile;