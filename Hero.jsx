import React from "react";
import Counter from "./Counter";
import Carousel from "../components/Carousel";
import "../assets/css/heroHome.css";
function Hero() {
  return (
    <div>
      <div className = "heroContainer" style={{paddingTop:"120px"}}>
        <div className = "heroContainerPart1">
          <div className= "heroContainerText">Protect the Red Panda: A treasure worth Preserving <span className = "heroContainerSpan">NFT</span></div>
          <div className = "heroContainerText2">Purchase the NFTs to become one of the pioneers of change. Your contribution will effect change</div>
          <div className = "heroContainerText3">The price of NFT : <span className="heroContainerTextspan">25 $</span> <i className="bi bi-arrow-right-short"></i> 18 $ </div>
          <button className = "heroContainerButton">Mint Now</button>
          <Counter />
        </div>
        <div className = "heroContainerPart2">
          <Carousel/>
        </div>
      </div>
    </div>
  );
}

export default Hero;