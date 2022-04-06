import React, { useEffect, useRef } from "react"
import "./intro.scss"
import { init } from 'ityped'
import { saveAs } from "file-saver";


export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            strings: ["Full Stack Developer"],
        })



        
    },[])

    const saveFile = () => {
        saveAs("./assets/resume.pdf",
          "resume.pdf"
         )};




    return(
        <><div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/scn.png" alt="Savannah Clarke smiling" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Savannah Clarke</h1>
                    <h3 ref={textRef}> </h3>
                </div>
            </div>


        </div><div>
                <button onClick={saveFile}>My Resume</button>
            </div></>

    )


}