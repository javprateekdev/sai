import Slider from "react-slick";
import React from 'react'
import videos from "./Data";
import ReactPlayer from 'react-player/lazy'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewBhajan = () => {
 
  var settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows:true
  };


  return (
    <div style={{marginTop:"50px"}}>
     <div style={{fontSize:'25px',textAlign:'center',color:"#ca5202f6",fontWeight:"600"}}>नवीनतम भजन</div>
     <div  style={{marginTop:"10px",height:"250px",padding:'30px'}}>
     <Slider {...settings}>
       {videos.map((item) => (
       
            <div key={item.id} >
                <div className='player-wrapper'>
                <ReactPlayer
          className='react-player'
          controls={true}
          url={item.src}
          width='100%'
          height='100%'
         
        />
      </div>
     
           </div>  
         
          ))}
    </Slider>
   </div>
    
   
    </div>
 
  )
}

export default NewBhajan;