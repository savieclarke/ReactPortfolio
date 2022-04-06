import React from "react"
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss"
import { featured, two, three, four, five, six } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list =[
        {
        id: "featured",
        title: "Featured",
    },
    {
        id: "web",
        title: "Web App",
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
        case "featured":
            setData(featured);
                break;
        case "two":
            setData(two);
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