import React, { useEffect, useState } from 'react';
import './App.css';
import Break from './Components/Break/Break';
import Details from './Components/Details/Details';
import Items from './Components/Items/Items';
import Logo from './Components/Logo/Logo';
import Owner from './Components/Owner/Owner';
import Questions from './Components/Questions/Questions';


function App() {
  const [total,setTotal] = useState([]);
  const [breakLocal,setLocal] = useState([]);
  const totalTime = (props)=>{
    setTotal(props);
   }

   const [breakValue,setValue] = useState([]);

   const breakFunction = (props)=>{
    localStorage.setItem('break',   JSON.stringify(props));
    setValue(props);
   }
   const getBreakTime = ()=> {
    let breakCart = {};
    const storedCart = localStorage.getItem('break');
       if(storedCart){
      breakCart = JSON.parse(storedCart);
       }
       return breakCart; 
   }

   useEffect( ()=>{
    const storedCart = getBreakTime();
    setLocal(storedCart);
   } , [])



    return (
    <div className="container-fluid">
      <div className="row">
      <div className="left-div col-12 col-md-9">
          <Logo></Logo>
          <h3>Select today's exercise</h3>
          <Items totalTime={totalTime}></Items>
       </div>

       <div className="right-div col-12 col-md-3">
         <Owner></Owner>
         <Break breakFunction={breakFunction}></Break>
         <Details total={total} breakLocal={breakLocal} breakValue={breakValue}></Details>
       </div>
      </div>

      <div className="questions">
        <Questions></Questions>
      </div>

    </div>
  );
}

export default App;
