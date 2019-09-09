import React from 'react';
import './Card.css'

export default function Card(props){
    return (
        <div className="imgTile" >
            <img src={props.imgUrl} alt={props.name} className="imgCard" id={props.id} onClick={()=>props.clickCard(props.id)} />
        </div>
    )
}

