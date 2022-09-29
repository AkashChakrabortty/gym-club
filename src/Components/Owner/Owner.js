import React from 'react';
import './Owner.css';
const Owner = () => {
    return (
        <div>
            <div className="container mt-5 d-flex">
                <div className="img col-6 col-md-4">
                    <img className='img-fluid rounded' src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg" alt="owner" />
                </div>
                <div className="owner-info mt-5 mt-md-0">
                    <h5>Akash Chakrabortty</h5>
                    <span>Dhaka,Bangladesh</span>
                </div>
            </div>
            <div className="container d-flex bg-info mt-2 rounded text-white fs-4 justify-content-around">
                <div className="weight"> Weight: 55kg</div>
                <div className="age">Age: 21y</div>
            </div>
        </div>
    );
};

export default Owner;