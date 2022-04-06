import React from "react"
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss"
import { employeeTracker, hive, quiz, schedule, regex, six, pwgsc } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("employeeTracker");
    const [data, setData] = useState([]);

    const list =[
        {
        id: "employeeTracker",
        title: "Employee Tracker",
    },
    {
        id: "hive",
        title: "Hive App",
    },
       { 
           id: "quiz",
        title: "Quiz App",
    },
    {
        id: "schedule",
        title: "Schedule App",
    },
    {
        id: "pwgsc",
        title: "Password Generator",
    },
    {
        id: "regex",
        title: "Regex Tutorial",
    },
       
    ];

useEffect(() => {

    switch (selected) {
        case "employeeTracker":
            setData(employeeTracker);
                break;
        case "hive":
            setData(hive);
                break;
        case "quiz":
            setData(quiz);
                break;
        case "schedule":
            setData(schedule);
                break;
        case "pwgsc":
            setData(pwgsc);
                break;
        case "regex":
            setData(regex);
            break;
            default: 
    }
}, [selected]);


    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList
                     title={item.title}
                      active={selected === item.id} 
                      setSelected={setSelected}
                      id={item.id}
                      />
                ))}
            </ul>
            <div className="container">
                {data.map (data => (
                 <div className="item">
                 <img 
                 src={data.img} 
                 alt=""/>
                 <h3>{data.title}</h3>
             </div>   
                ))}
                
                
              
            </div>

        </div>

    )


}