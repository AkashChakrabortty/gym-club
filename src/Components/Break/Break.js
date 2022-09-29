import React from 'react';
import './Break.css';
const Break = () => {
   const breakTime = (props)=> {
    return props;
   }

   let d = breakTime();

    return (
        <div className='container mt-3'>
            <h3>Add A Break</h3>
            <div className='rounded d-flex bg-info justify-content-center'>
            <button onClick={ (e)=> breakTime(e.target.innerText)} className="div10 fs-4 bg-primary rounded text-white m-2 p-2 border-0">10</button>
            <button className="div20 fs-4 bg-primary rounded text-white m-2 p-2 border-0">{d}</button>
            <button className="div30 fs-4 bg-primary rounded text-white m-2 p-2 border-0">30</button>
            <button className="div40 fs-4 bg-primary rounded text-white m-2 p-2 border-0">40</button>
            </div>
        </div>
    );
};

export default Break;