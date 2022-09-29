import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';
const Items = () => {
    const [items,setItems]=useState([]);
     useEffect(
        ()=> {
            fetch('items.json')
            .then(res => res.json())
            .then( data => setItems(data))
        }
        ,[items])
    return (
    <div className="container-fluid">
        <div className="row g-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
        {
            items.map( item => <Item item={item} key={item.id}></Item>)
         }
        </div>
    </div>
    );
};

export default Items;