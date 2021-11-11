import React from "react";
import triangle from "./../../assets/Triangle.svg";
import triangleGlow from "./../../assets/Triangle-glow.svg";
import shadow from "./../../assets/Shadow.svg";
import model from "./../../assets/Model@2x.png";
import player from "./../../assets/Player.png";
import "./Main.scss";
import Slider from "../Slider/Slider";

const Main = () => {
  return (
    <div className="main">
      <div className="main__wrap w-100 h-100">
        <img alt="icon:shadow" src={shadow} className="main__shadow" />
        <img alt="icon:triangle" src={triangle} className="main__triangle" />
        <img
          alt="icon:triangle-glow"
          src={triangleGlow}
          className="main__triangle-glow"
        />
        <img alt="icon:model" src={model} className="main__model" />
        <div className="main__title-wrap">
          <div className="main__uptitle">A fashion club</div>
          <div className="main__title">Pen rose</div>
          <div className="main__subtitle">Coctail</div>
          <div className="main__description">
            Jump at a chance to participate <br />
            in our new fashion adventure
          </div>
          <div className="main__title-img">
            <a
              data-fancybox
              href="https://www.youtube.com/watch?v=lR-TDDW8oNE"
              className="nav-menu-link"
            >
              <img src={player} alt="logo:player-youtube" />
            </a>
          </div>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Main;
