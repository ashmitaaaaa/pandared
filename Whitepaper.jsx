import React from "react";
import "../assets/css/Whitepaper.css";
import tiger_img from "../assets/images/panda.jpg";
function Whitepaper() {
  return (
    <div className="WhitePaper">
      <div className="aboutContainer">
        <div className="aboutContainerHead">ABOUT THE PROJECT</div>
        <div className="aboutDescContainer">
          <div className="aboutDescImgContainer">
            <img className="aboutDescImg" src={tiger_img} alt="tiger icon" />
          </div>
          <div className="aboutDescText">The red panda (Ailurus fulgens), also known as the lesser panda, is a small mammal native to the eastern Himalayas and southwestern China. It has dense reddish-brown fur with a black belly and legs, white-lined ears, a mostly white muzzle and a ringed tail. Its head-to-body length is 51–63.5 cm (20.1–25.0 in) with a 28–48.5 cm (11.0–19.1 in) tail, and it weighs between 3.2 and 15 kg (7.1 and 33.1 lb). It is well adapted to climbing due to its flexible joints and curved semi-retractile claws.
 </div>
        </div>
      </div>
    </div>
  );
}

export default Whitepaper;