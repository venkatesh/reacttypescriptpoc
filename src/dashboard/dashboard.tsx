import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="Dashboard">
            <div className="Dashboard container">
                {/* Firstname and Lastname */}
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="fName" className="col-sm-2 col-form-label">FirstName</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext border-align" id="fName" placeholder="Please Enter your First Name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lName" className="col-sm-2 col-form-label">LastName</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext border-align" id="lname" placeholder="Please Enter your Last Name" />
                        </div>
                    </div>
                </div>

                {/* Address and DOB  */}
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext border-align" id="address" placeholder="Please Enter your Address" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="dob" className="col-sm-2 col-form-label">DateOfBirth</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control-plaintext border-align" id="dob" placeholder="DOB" />
                        </div>
                    </div>
                </div>

                {/* Email ID and Phone Number */}
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email ID</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control-plaintext border-align" id="email" placeholder="Please Enter your Email ID" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="pnumber" className="col-sm-2 col-form-label">PhoneNumber</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control-plaintext border-align" id="pnumber" placeholder="Please Enter your Phone Number" />
                        </div>
                    </div>
                </div>

                {/* Password and Confrim Password */}
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control border-align" id="password" placeholder="Please Enter your Pssword" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cpassword" className="col-sm-2 col-form-label">ConfirmPassword</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control border-align" id="cpassword" placeholder="Please Enter your Confirm Password" />
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="wrapper">
                    <Link type="button" to="/vehicalDetails" className="btn button">Submit Button</Link>
                </div>

            </div>
        </div>

    );
}

export default Dashboard;
