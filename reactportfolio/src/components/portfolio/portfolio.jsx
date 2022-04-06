import React from "react"
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss"
import { employeeTracker, hive, three, four, five, six } from "../../data";

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
           id: "mobile",
        title: "Mobile App",
    },
    {
        id: "design",
        title: "Design",
    },
    {
        id: "content",
        title: "content",
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
        case "three":
            setData(three);
                break;
        case "four":
            setData(four);
                break;
        case "five":
            setData(five);
                break;
        case "six":
            setData(six);
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