import React from 'react';
import './vehicalDetails.css';


const VehicalDetails: React.FC = () => {
    return (
        <div className="VehicalDetils container-fluid">
            <h3>Vehicle Information</h3>
            <p className="paraAalign">Please add vehicles you want to include on the policy below.Any vehicle not included here will be excluded
                from your policy and will not be covered
        </p>
            <h5>Vehicle 1</h5>

            <p>Locate my VIN using my license plate number</p>
            {/* States */}
            <div className="form-group row">
                <div className="col-md-6">
                    <div className="form-group ">
                        <select className="form-control col-sm-10">
                            <option>State</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* VID */}
            <div className="form-group row">
                <div className="col-md-12">
                    <div className="col-sm-10 padding-align">
                        <input type="text" className="form-control-plaintext border-align" placeholder=" Vehicle Identification Number (VIN)" />
                    </div>
                </div>
            </div>

            {/* Year */}
            <div className="form-group row">
                <div className="col-md-6">
                    <div className="form-group ">
                        <select className="form-control col-sm-10">
                            <option>2015</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Make */}
            <div className="form-group row">
                <div className="col-md-6">
                    <div className="form-group ">
                        <select className="form-control col-sm-10">
                            <option>BMW</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Model */}
            <div className="form-group row">
                <div className="col-md-6">
                    <div className="form-group ">
                        <select className="form-control col-sm-10">
                            <option>328D</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Size */}
            <div className="form-group row">
                <div className="col-md-12">
                    <div className="form-group ">
                        <select className="form-control col-sm-10">
                            <option>4-DOOR SEDAN</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default VehicalDetails;
