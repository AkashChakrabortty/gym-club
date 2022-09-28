import React from 'react';
import './Owner.css';
const Owner = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="img col-6">
                    <img className='img-fluid rounded' src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg" alt="owner" />
                </div>
                <div className="name">
                    <h3>Akash Chakrabortty</h3>
                    <span>Owner of akash's-gym-club</span> <br />
                    <span>Dhaka,Bangladesh</span>
                </div>
            </div>
        </div>
    );
};

export default Owner;