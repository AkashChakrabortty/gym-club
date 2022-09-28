import React from 'react';
import './Details.css';
const Details = () => {
    return (
        <div>
            <div className="container mt-3">
                <h3>Exercise Details</h3>
                <div className="ex-time d-flex justify-content-between fs-5 bg-info p-2 rounded">
                    <div className="text">
                    Exercise time
                    </div>
                    <div className="value text-muted">
                        12seconds
                    </div>
                </div>

                <div className="break-time d-flex justify-content-between fs-5 bg-info p-2 rounded mt-2">
                    <div className="text">
                    Break time
                    </div>
                    <div className="value text-muted">
                        12seconds
                    </div>
                </div>

                <button type="button" class="btn btn-primary col-12 mt-5">Activity Completed</button>

            </div>
        </div>
    );
};

export default Details;