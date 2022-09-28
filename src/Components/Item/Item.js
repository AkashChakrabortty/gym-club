import React from 'react';
import './Item.css';
const Item = (props) => {
    const {name,img,time} = props.item;
    return (
    <div className=''>
        <div className="card">
        <img src={img} className="card-img-top img-style" alt="img" />
         <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h5 > Time required : {time}s</h5>
            <a href="./add" className="btn btn-primary col-12">Add to list</a>
         </div>
        </div>
    </div>
    );
};

export default Item;