import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assests/portfolio-1.jpg'
import Portfolio2 from '../../assests/portfolio-2.jpg'
import Portfolio3 from '../../assests/portfolio-3.jpg'
import Portfolio4 from '../../assests/portfolio-4.jpg'
import Portfolio5 from '../../assests/portfolio-5.jpg'
import Portfolio6 from '../../assests/portfolio-6.jpg'
import Portfolio7 from '../../assests/portfolio-7.jpg'
import Portfolio8 from '../../assests/portfolio-8.jpg'
import Portfolio9 from '../../assests/portfolio-9.jpg'
import Portfolio10 from '../../assests/portfolio-10.jpg'
import Portfolio11 from '../../assests/portfolio-11.jpg'
import Portfolio12 from '../../assests/portfolio-12.jpg'
import { convert_image } from './Convert'
import { hello } from './Convert'
import { useEffect } from 'react'
const Portfolio = () => {
    let data = [
        {
            id : 1,
            image: Portfolio1,
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 2,
            image: Portfolio2,
            title: "Project Title",
            detailes: "#"
        },

        {
            id : 3,
            image: Portfolio3,
            title: "Project Title",
            detailes: "#"
        }, 
        {
            id : 4,
            image: Portfolio4,
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 5,
            image: Portfolio5,
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 6,
            image: Portfolio6,
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 7,
            image: Portfolio7,
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 8,
            image: Portfolio8,
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 9,
            image: Portfolio9,
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 10,
            image: Portfolio10,
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 11,
            image: Portfolio11,
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 12,
            image: Portfolio12,
            title: "Project Title",
            detailes: "#"
        },
    ]

    useEffect(
        () => {
            for (let i = 0; i < data.length; i++) {
                convert_image(data[i].image, i);
            }
        }
    );

  return (
    <section className="portfolio">
        <h1>Some of our work</h1>

        {
            data.map(({id, image, title, details})=>{
                return(
                    <figure key={id} className="port-item">
                        <img src={image} className="port_img" alt="portfolio item"/>
                        <figcaption className="port-desc">
                            <p>{title}</p>
                            <a href={details} className="button button-accent button-small">Project details</a>
                        </figcaption>
                    </figure>
                )
            })
            
        }
    </section>
  )
}

export default Portfolio