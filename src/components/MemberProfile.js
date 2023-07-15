import { Link } from 'react-router-dom';
import '../CSS/MemberProfile.css'

const MemberProfile = () => {
    return(
        <div className="memberWrapper">

            <Link className="back" to={"/members"}><span>See all members</span></Link>
            
            <div className="profile">
                <div className="profileCard">
                    <div className="image"><img src="http://wormlab.eu/author/omer-yuval/avatar_hu3305bfdd1faa3576bef0c963d68a5db5_10675403_270x270_fill_q75_lanczos_center.jpg" alt="" /></div>
                    <div className="name">Omer Yuval</div>
                    <div className="position">Post Doctoral</div>
                </div>
                
                <div className="profileContent">
                    <div className="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ratione autem voluptate ad quasi saepe officia nesciunt, doloribus cum quis, doloremque amet ea expedita error omnis aut iure libero perferendis delectus nisi quae magnam consequuntur voluptatum. Mollitia obcaecati itaque harum quos voluptatum, laudantium eius nihil officiis corporis! Tempora itaque eveniet, assumenda labore aperiam voluptas, ullam minus commodi rem saepe id! Officiis recusandae molestias ullam sed! Eius iure distinctio magnam esse officiis natus deserunt architecto! Reiciendis vitae officia perferendis consequatur repellendus temporibus, rerum totam. Provident quisquam soluta doloremque fugit quia tempore perferendis amet molestiae repudiandae neque. Minus necessitatibus adipisci aliquid dolorem.</div>
                    
                    <div className="contact">
                        <h1>Contact details</h1>
                        <ul>
                            <li>Email: omer@gmail.com</li>
                        </ul>
                    </div>

                    <div className="CV">
                        <div className="interests">
                            <h1>Interests</h1>
                            <ul>
                                <li>3D computer vision</li>
                                <li>Machine Learningsssssssssssssssssssssss</li>
                            </ul>
                        </div>
                        <div className="education">
                            <h2>Education</h2>
                            <ul>
                                <li>PhD</li>
                                <li>MSdasdassssssssssssssssssssssssssssssssssssssssssssssdasdc</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="publish">
                <h1>Latest</h1>
                <ul>
                    <li>The neuromechanical control of Caenorhabditis elegans head motor behavior in a 3D environment</li>
                    <li>The neuromechanical control of Caenorhabditis elegans head motor behavior in a 3D environment</li>
                    <li>The neuromechanical control of Caenorhabditis elegans head motor behavior in a 3D environment</li>
                </ul>
            </div>
        </div>
    )
}

export default MemberProfile;