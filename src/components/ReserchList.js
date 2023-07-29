import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Papa from "papaparse";

import '../CSS/ReserchList.css';

const ReserchList = () => {

    const [reserches, setReserches] = useState();
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=1610881085&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setReserches(results.data);
                console.log(results.data);
            }
        })
    },[]);

    return (
        <div className="reserchListWrapper">
            {reserches && reserches.map((reserch,i) => {
                return (
                    <Link to={`${i}`}>
                        <div className="listItem">
                            <div className="reserchImg">
                                <img src={reserch.Image ? reserch.Image : "https://static.wixstatic.com/media/56112d_677557a98a2d402a8c096058b3a639cf~mv2.jpg/v1/fill/w_414,h_299,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/locusts3_JPG.jpg"} alt="" />
                            </div>
                            <div className="reserchPreviewContent">
                                <span className="title">{reserch.Title}</span>
                                {reserch.Topic && <span className="topic">{reserch.Topic}</span>}
                                <br />
                                <span className="caption">{reserch.Caption}</span>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ReserchList;