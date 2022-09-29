import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';
const Items = (props) => {
    const [items,setItems]=useState([]);
    const [cart,setCart] =  useState([]);
    const {totalTime} = props;
   
    const addTime = (time , totalTime)=> {
      const newArray = [...cart , time];
      setCart(newArray);
     
     const total = newArray.reduce(add, 0);

      function add(total, num) {
        return total + num;
      }
      totalTime(total);
    }
   
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
            items.map( item => <Item totalTime={totalTime} addTime={addTime} item={item} key={item.id}></Item>)
         }
        </div>
    </div>
    );
};

export default Items;