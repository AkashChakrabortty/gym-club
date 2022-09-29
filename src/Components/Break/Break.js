import React from 'react';
import './Break.css';
const Break = (props) => {
  const{breakFunction} = props;

   
    return (
        <div className='container mt-3'>
            <h3>Add A Break</h3>
            <div className='rounded d-flex justify-content-center'>
            <button onClick={ (e)=> breakFunction(e.target.innerText)} className="div10 bg-primary rounded text-white m-2 p-2 border-0">10</button>
            <button onClick={ (e)=> breakFunction(e.target.innerText)} className="div20 bg-primary rounded text-white m-2 p-2 border-0">20</button>
            <button onClick={ (e)=> breakFunction(e.target.innerText)} className="div30 bg-primary rounded text-white m-2 p-2 border-0">30</button>
            <button onClick={ (e)=> breakFunction(e.target.innerText)} className="div40 bg-primary rounded text-white m-2 p-2 border-0">40</button>
            </div>
        </div>
    );
};

export default Break;