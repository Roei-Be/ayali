import {useState} from 'react';
import Papa from "papaparse";

const MembersDB = () => {
    const [data, setData] = useState(null);
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?output=csv", {
        download: true,
        header: true,
        complete: (results) => {
            // console.log(results);
            setData(results.data);
        }
    }) 

    return(
        <div>
            {/* {data && Array.from(data[0].Name)} */}
            <br />
            {data && data.map(x => x.Name)}
        </div>
    )
}

export default MembersDB;