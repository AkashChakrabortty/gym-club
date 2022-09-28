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
        ,[])
    return (
    <div className="container-fluid">
        <div className="row row-cols-3">
        {
            items.map( item => <Item item={item} key={item.id}></Item>)
         }
        </div>
    </div>
    );
};

export default Items;