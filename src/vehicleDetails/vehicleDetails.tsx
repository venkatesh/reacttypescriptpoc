import React from 'react';
import './vehicleDetails.css';
import { Link } from 'react-router-dom';


const VehicleDetails: React.FC = () => {
    return (
        <div className="VehicleDetails container-fluid">
            <h3>Vehicle Information</h3>
            <p className="paraAlign">Please add vehicles you want to include on the policy below. Any vehicle not included here will be excluded
                from your policy and will not be covered
        </p>
            <h5>Vehicle 1</h5>

            <p>Locate my VIN using my license plate number</p>
            {/* States */}
            <div className="form-group row">
                <div className="col-md-2">
                    <div className="form-group ">
                        <select className="form-control col-sm-12 border-align">
                            <option> State</option>
                            <option value="AL">Alabama (AL)</option>
                            <option value="AK">Alaska (AK)</option>
                            <option value="AZ">Arizona (AZ)</option>
                            <option value="AR">Arkansas (AR)</option>
                            <option value="CA">California (CA)</option>
                            <option value="CO">Colorado (CO)</option>
                            <option value="CT">Connecticut (CT)</option>
                            <option value="DE">Delaware (DE)</option>
                            <option value="DC">District Of Columbia (DC)</option>
                            <option value="FL">Florida (FL)</option>
                            <option value="GA">Georgia (GA)</option>
                            <option value="HI">Hawaii (HI)</option>
                            <option value="ID">Idaho (ID)</option>
                            <option value="IL">Illinois (IL)</option>
                            <option value="IN">Indiana (IN)</option>
                            <option value="IA">Iowa (IA)</option>
                            <option value="KS">Kansas (KS)</option>
                            <option value="KY">Kentucky (KY)</option>
                            <option value="LA">Louisiana (LA)</option>
                            <option value="ME">Maine (ME)</option>
                            <option value="MD">Maryland (MD)</option>
                            <option value="MA">Massachusetts (MA)</option>
                            <option value="MI">Michigan (MI)</option>
                            <option value="MN">Minnesota (MN)</option>
                            <option value="MS">Mississippi (MS)</option>
                            <option value="MO">Missouri (MO)</option>
                            <option value="MT">Montana (MT)</option>
                            <option value="NE">Nebraska (NE)</option>
                            <option value="NV">Nevada (NV)</option>
                            <option value="NH">New Hampshire (NH)</option>
                            <option value="NJ">New Jersey (NJ)</option>
                            <option value="NM">New Mexico (NM)</option>
                            <option value="NY">New York (NY)</option>
                            <option value="NC">North Carolina (NC)</option>
                            <option value="ND">North Dakota (ND)</option>
                            <option value="OH">Ohio (OH)</option>
                            <option value="OK">Oklahoma (OK)</option>
                            <option value="OR">Oregon (OR)</option>
                            <option value="PA">Pennsylvania (PA)</option>
                            <option value="RI">Rhode Island (RI)</option>
                            <option value="SC">South Carolina (SC)</option>
                            <option value="SD">South Dakota (SD)</option>
                            <option value="TN">Tennessee (TN)</option>
                            <option value="TX">Texas (TX)</option>
                            <option value="UT">Utah (UT)</option>
                            <option value="VT">Vermont (VT)</option>
                            <option value="VA">Virginia (VA)</option>
                            <option value="WA">Washington (WA)</option>
                            <option value="WV">West Virginia (WV)</option>
                            <option value="WI">Wisconsin (WI)</option>
                            <option value="WY">Wyoming (WY)</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="col-sm-5 padding-align">
                        <input type="text" className="form-control border-align" placeholder="Number Plate" />
                    </div>
                </div>
            </div>
            <p style={{ textAlign: "left" }}><strong>or</strong></p>
            {/* VIN */}
            <div className="form-group row">
                <div className="col-md-12">
                    <div className="col-sm-5 padding-align">
                        <input type="text" className="form-control border-align" placeholder="Vehicle Identification Number (VIN)" maxLength={17} />
                    </div>
                </div>
            </div>
            <div className="form-group row">
                {/* Year */}
                <div className="form-group row">
                    <div className="col-md-12">
                        <div className="col-sm-10">
                            <input type="text" className="form-control col-sm-10 border-align" placeholder="Vehicle Year" maxLength={4} />
                        </div>
                    </div>
                </div>

                {/* Make */}
                <div className="form-group row">
                    <div className="col-md-10">
                        <div className="form-group ">
                            <input type="text" className="form-control col-sm-10 border-align" placeholder="Vehicle Make" />
                        </div>
                    </div>
                </div>

                {/* Model */}
                <div className="form-group row">
                    <div className="col-md-10">
                        <div className="form-group ">
                            <input type="text" className="form-control col-sm-10 border-align" placeholder="Vehicle Model" />
                        </div>
                    </div>
                </div>

                {/* Size */}
                <div className="form-group row">
                    <div className="col-md-10">
                        <div className="form-group ">
                            <input type="text" className="form-control col-sm-10 border-align" placeholder="Vehicle Size" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="wrapper">
                <Link type="button" to="/coverages" className="btn button">Submit Button</Link>
            </div>

        </div>

    );
}

export default VehicleDetails;
