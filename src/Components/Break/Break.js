import React from 'react';
import './Break.css';
const Break = () => {
    return (
        <div className='container mt-3'>
            <h3>Add A Break</h3>
            <div className='rounded d-flex bg-info justify-content-center'>
            <div className="div10 fs-4 bg-primary rounded text-white m-2 p-2">10s</div>
            <div className="div20 fs-4 bg-primary rounded text-white m-2 p-2">20s</div>
            <div className="div30 fs-4 bg-primary rounded text-white m-2 p-2">30s</div>
            <div className="div40 fs-4 bg-primary rounded text-white m-2 p-2">40s</div>
            </div>
        </div>
    );
};

export default Break;