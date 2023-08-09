import { createContext, useEffect, useState } from 'react';
import Papa from "papaparse";

export const DBContext = createContext();

export const DBContextProvider = ({ children }) => {

    const [images, setImages] = useState();
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?gid=1673365678&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setImages(results.data);
                console.log(results.data);
            }
        })
    },[])

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

    const [members, setMembers] = useState(null);
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTrx5a6lcEqohu2wlApKa6DnPUmNRfYoUkRXjajieoF7PyPOrGKKQeqiROrECNHKPXAYMKZfMrLNwaB/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                results = results.data.map((item) => {
                    if (item.Photo.includes("drive.google.com/file/d/")) {
                        return {...item, Photo: `https://drive.google.com/uc?export=view&id=${item.Photo.match(/\/d\/(.*?)\/view/)[1]}`}
                        /* fetch(`https://drive.google.com/uc?export=view&id=${item.Photo.match(/\/d\/(.*?)\/view/)[1]}`)
                            .then(response => response.blob())
                            .then(blob => {
                                const reader = new FileReader();

                                reader.onload = function (e) {
                                const base64Data = e.target.result;
                                console.log("64:" + base64Data); // This is the base64-encoded image data
                                };

                                reader.readAsDataURL(blob);
                            })
                            .catch(error => {
                                console.error("Error fetching or converting image:", error);
                            }); */
                    } else {
                        return {...item}
                    }
                })
                console.log("members:" + results);
                setMembers(results);
            }
        })
    },[]);

    /* useEffect(() => {
        reserches && console.log("1:" + reserches[4].Image.match(/\/d\/(.*?)\/view/)[1]);
        reserches && console.log("2:" + reserches[4].Image.includes("https://drive.google.com/file/d/"));

    },[reserches]) */

    return (
        <DBContext.Provider value={{
            images, reserches, members
        }}>{ children }
        </DBContext.Provider>
    )
}