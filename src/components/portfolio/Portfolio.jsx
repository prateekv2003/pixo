import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assests/portfolio-1.webp'
import Portfolio2 from '../../assests/portfolio-2.webp'
import Portfolio3 from '../../assests/portfolio-3.webp'
import Portfolio4 from '../../assests/portfolio-4.webp'
import Portfolio5 from '../../assests/portfolio-5.webp'
import Portfolio6 from '../../assests/portfolio-6.webp'
import Portfolio7 from '../../assests/portfolio-7.webp'
import Portfolio8 from '../../assests/portfolio-8.webp'
import Portfolio9 from '../../assests/portfolio-9.webp'
import Portfolio10 from '../../assests/portfolio-10.webp'
import Portfolio11 from '../../assests/portfolio-11.webp'
import Portfolio12 from '../../assests/portfolio-12.webp'
const Portfolio = () => {
    const data = [
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
  return (
    <section className="portfolio">
        <h1>Some of our work</h1>

        {
            data.map(({id, image, title, detailes})=>{
                return(
                    <figure key={id} className="port-item">
                        <img src={image} alt="portfolio item"/>
                        <figcaption className="port-desc">
                            <p>{title}</p>
                            <a href={detailes} className="button button-accent button-small">Project details</a>
                        </figcaption>
                    </figure>
                )
            })
        }
    </section>
  )
}

export default Portfolio