import React from "react";
import "./LessonCard.css";
const LessonCard = ({ id, name, hour, image }) => {
  return (
    <div className="cardContainer">
    <div className="cardDiv">
      <div className="cardİmg">
        <img className="img" src={image} alt="" />
      </div>
      <div className="par">
        <p><span>Lesson Name :</span>{name} </p><span>Lesson Hour :</span>{hour}{" "}
      </div>
    </div>
    </div>
  );
};

export default LessonCard;
