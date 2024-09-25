import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from './ReviewCard';


const SimpleSlider = () => {

    const [reviews , setReviews] = useState([]);
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed:5000,
        cssEase: "linear"
    };

    useEffect( () => {
         fetch('reviews.json').then(res => res.json().then(data => {setReviews(data)}))
    } , []);

    return (
      <div className="my-24">
      <Slider {...settings}>



       { reviews.map((data,i) =>
        <div key={i}>
         <ReviewCard data={data}/>
         </div>
       )}
        
    
      </Slider>
      </div>
    );
  }

export default SimpleSlider