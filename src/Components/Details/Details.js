import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css';

const Details = (props) => {
    const {total} = props;
    const notify = () => toast("congratulation you are done with your activity!");

    return (
        <div>
            <div className="container mt-3">
                <h3>Exercise Details</h3>
                <div className="ex-time d-flex justify-content-between fs-5 bg-info p-2 rounded">
                    <div className="text">
                    Exercise time
                    </div>
                    <div className="value text-muted">
                        {total}s
                    </div>
                </div>

                <div className="break-time d-flex justify-content-between fs-5 bg-info p-2 rounded mt-2">
                    <div className="text">
                    Break time
                    </div>
                    <div className="value text-muted">
                        {}s
                    </div>
                </div>

                <button type="button" onClick={notify} class="btn btn-primary col-12 mt-5">Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Details;