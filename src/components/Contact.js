import React from "react";
import {MdPhone} from "react-icons/md"
import {MdMail} from "react-icons/md"


export default function Contact({img, name, phone, email}) {
    // console.log(props.img)
    return <div className="contactFlex">
        <img className="tanjiroImg" src = {img}></img>
        <h2>{name}</h2>
        <div className = "phoneFlex">
            <MdPhone className="icon"/>
            {phone}
        </div>
        <div className = "phoneFlex">
            <MdMail className="icon"/>
            {email}
        </div>
    </div>
}
