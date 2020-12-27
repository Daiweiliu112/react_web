import React from 'react';
import Cardinfo from '/home/d239liu/work/react_web/src/comp/js/Cardinfo.js'


function Card(props) {
        return (
        <div className = "d-inline-block my-card" onClick={(e) => props.click(props.item)}>
            <img className="my-card-img" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {props.item.selected? props.item.showModal = true: props.item.showModal = false}
            {props.item.selected && <Cardinfo title = {props.item.title} text={props.item.text}/>}
            
        </div>

    );
}

export default Card