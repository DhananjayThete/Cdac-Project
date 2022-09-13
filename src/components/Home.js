
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";


const data = [
    {
        image: require('../images/carousal10.jpg'),
        caption: "",
        description: ""
    },
    {
        image: require('../images/cara2.jpg'),
        caption: "",
        description: ""
    },
    {
        image: require('../images/cara1.jpg'),
        caption: "",
        description: ""
    }
]
export default function Home() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{height:'730px'}}>

            <div className='home' >
                <h1 style={{ color: "green", fontFamily: "sans-serif" }}><b>Welcome To Digital Agriculture Procurement Market</b></h1>
                <h2 style={{ color: "green" }}>We Are Happy To See You</h2>
                <div className='ThickerBox'>

                    <marquee><h1 className='marquee'>WE GUARANTEE FAIR PRICE FOR ALL PRODUCTS.!  </h1>
                    </marquee><div className="home1"></div>
                </div>

                <pre>





                </pre>
            </div>  
            <div className="carous">
            <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image" style={{width:"100%"}, {height: "570px"}}
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
            </div>            
            </div>

    )
}

