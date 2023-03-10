import React from 'react';
import './Item.css';
const Item = (props) => {
    const {name,img,time} = props.item;
    const { addTime ,  totalTime} = props;
    return (
    <div className=''>
        <div className="card">
        <img src={img} className="card-img-top img-style" alt="img" />
         <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h5 > Time required : {time}s</h5>
            <button href="./add" onClick={ ()=> addTime(time,totalTime) } className="btn btn-primary col-12">Add to list</button>
         </div>
        </div>
    </div>
    );
};

export default Item;