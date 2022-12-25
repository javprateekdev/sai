import React from 'react'
import {Carousel} from '3d-react-carousal';

const Gallery = () => {
    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
        
  return (
    <div style={{marginTop:"60px",height:"400px"}}>
        <div style={{fontSize:"25px",textAlign:"center",marginBottom:"10px",fontWeight:"600",color:"#ca5202f6"}}>Gallery</div>
        <Carousel slides={slides} autoplay={true} interval={15000}/>
    </div>
  )
}

export default Gallery;