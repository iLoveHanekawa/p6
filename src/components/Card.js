import React from "react";
import {FaStar} from "react-icons/fa"

export default function(props) {
    return <div className = "contactFlex">
        <button className = "colorTheme">{props.item.color}</button>
        <img className = "img10" src = {props.item.img}></img>
        <div className = "cardInfo">
            <FaStar className="faStar"/>
            <small>
                {props.item.rating}<span className = "greyText">({props.item.reviewCount}) {props.item.season}</span>
            </small>
        </div>
        <small>{props.item.title}</small>
        <small><b>Rated:</b> <span className="greyText">{props.item.remark}</span></small> 
    </div>
}