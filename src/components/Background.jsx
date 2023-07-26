import React from "react";
import "./styles/background.css";
import airplane from "../assets/bg/airplane.svg";
import bike from "../assets/bg/bike.svg";
import bus from "../assets/bg/bus.svg";
import cable_car from "../assets/bg/cable-car.svg";
import car from "../assets/bg/car.svg";
import electric_car from "../assets/bg/electric-car.svg";
import electric_skateboard from "../assets/bg/electric-skateboard.svg";
import excavator from "../assets/bg/excavator.svg";
import helicopter from "../assets/bg/helicopter.svg";
import horse_riding from "../assets/bg/horse-riding.svg";
import hot_air_balloon from "../assets/bg/hot-air-balloon.svg";
import rocket from "../assets/bg/rocket.svg";
import rv from "../assets/bg/rv.svg";
import ship from "../assets/bg/ship.svg";
import sled from "../assets/bg/sled.svg";
import submarine from "../assets/bg/submarine.svg";
import tank from "../assets/bg/tank.svg";
import train from "../assets/bg/train.svg";
import ufo from "../assets/bg/ufo.svg";

export default function Background() {
  return (
    <div className="background">
      <img src={airplane} alt="airplane" />
      <img src={bike} alt="bike" />
      <img src={bus} alt="bus" />
      <img src={cable_car} alt="cable_car" />
      <img src={car} alt="car" />
      <img src={electric_car} alt="electric_car" />
      <img src={electric_skateboard} alt="electric_skateboard" />
      <img src={excavator} alt="excavator" />
      <img src={helicopter} alt="helicopter" />
      <img src={horse_riding} alt="horse_riding" />
      <img src={hot_air_balloon} alt="hot_air_balloon" />
      <img src={rocket} alt="rocket" />
      <img src={rv} alt="rv" />
      <img src={ship} alt="ship" />
      <img src={sled} alt="sled" />
      <img src={submarine} alt="submarine" />
      <img src={tank} alt="tank" />
      <img src={train} alt="train" />
      <img src={ufo} alt="ufo" />
    </div>
  );
}
