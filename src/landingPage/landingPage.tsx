import React, { useRef } from 'react';
import './landingPage.css';
import { Link } from 'react-router-dom';

interface IForm {
    password?: string;
    cpassword?: string;
    pnumber?: number;
    dirty?: boolean;
}

const LandingPage: React.FC = () => {

    const inputElementDay = useRef<HTMLInputElement>(null);
    const inputElementYear = useRef<HTMLInputElement>(null);
    const inputElementEmail = useRef<HTMLInputElement>(null);

    const [form, setForm] = React.useState<IForm>({});
    const [phoneData, setPhoneData] = React.useState<any>('');
    const [passData, setPassData] = React.useState<any>('');
    const [initLoad, setinitLoad] = React.useState<any>('');

    const handleChange = (event: any) => {
        setinitLoad('1');
        var passWordRegex = /^(?=.\W)(?=.[a-z])(?=.[A-Z])(?!.\s).{8}$/g
        if (event.target.value.length >= 2) {
            if (event.target.name == "month") {
                if (inputElementDay && inputElementDay.current) {
                    inputElementDay.current.focus();
                }
            }
            else if (event.target.name == "day") {
                if (inputElementYear && inputElementYear.current) {
                    inputElementYear.current.focus();
                }
            }
        }

        if (event.target.name == "password") {
        if(passWordRegex.test(event.target.value)){
            if(event.target.value!==form.cpassword){
                setPassData("Password and confirm password should be same")
            } else {
                setPassData('')
            } 
        } else {
            setPassData("Password must match the following criteria")
        }
        
            setForm({ ...form, password: event.target.value })
        }

        if (event.target.name == "cpassword") {
            
        if(form.password!==event.target.value){
            setPassData("Password and confirm password should be same");
            }else{
                setPassData('');
            }
            setForm({ ...form, cpassword: event.target.value })
        }

        if (event.target.name == "pnumber") {
            if (event.target.value.length == 10) {
                setForm({ ...form, pnumber: event.target.value.length })
                setPhoneData('');
            }
            else {
                setPhoneData("Enter valid phone number");
            }
        }

    }

    return (
        <div className="landingPage">
            <div className="landingPage container">
                {/* Firstname and Lastname */}
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control border-align" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lName" className="col-sm-4 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control border-align" id="lname" placeholder="Please enter your last name" />
                        </div>
                    </div>
                </div>

                {/* Address & apt.no */}
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">Address</label>
                        <div className="col-sm-11">
                            <input type="text" className="form-control border-align" id="fName" placeholder="Please enter your Address" />
                        </div>
                    </div>
                </div>

                {/* City, State & ZipCode */}
                <div className="form-group row">
                    <div className="col-md-4">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">City</label>
                        <div className="col-sm-12">
                            <input type="text" className="form-control border-align" id="fName" placeholder="City" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">State</label>
                        <div className="form-group ">
                            <select className="form-control col-sm-12 border-align">
                                <option>State</option>
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
                    <div className="col-md-4">
                        <label htmlFor="lName" className="col-sm-4 col-form-label">ZipCode</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control border-align" id="lname" placeholder="ZipCode" maxLength={5} />
                        </div>
                    </div>
                </div>
                {/* DOB  */}
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="dob" className="col-sm-4 col-form-label">Date Of Birth</label>
                        <div className="row rowAlign">
                            <div className="col-sm-2">
                                <input type="number" onChange={handleChange} min="0" max="2" className="form-control border-align" id="dob" name="month" placeholder="MM" />
                            </div>
                            <div className="col-sm-2">
                                <input type="number" onChange={handleChange} min="0" max="2" className="form-control border-align" id="dob" name="day" placeholder="DD" ref={inputElementYear} />
                            </div>
                            <div className="col-sm-3">
                                <input type="number" onChange={handleChange} className="form-control border-align" id="dob" placeholder="YYYY" name="year" ref={inputElementYear} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Email ID and Phone Number */}
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="email" className="col-sm-8 col-form-label">Email ID</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control border-align" id="email" ref={inputElementEmail} placeholder="Please enter your email ID" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="pnumber" className="col-sm-8 col-form-label">Phone Number</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control border-align" onChange={handleChange} id="pnumber" name="pnumber" placeholder="Please enter your phone number" />
                            <p className="text-danger">{phoneData}</p>
                        </div>

                    </div>
                </div>

                {/* Password and Confirm Password */}
                <p className="text-align passord-txt">Password Should Contain</p>
                <ul className="text-align">
                    <li>One Capital Letter</li>
                    <li>One Small Letter</li>
                    <li>One Special Character</li>
                    <li>Should Contain Minimum 8 Characters</li>
                </ul>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="password" className="col-sm-8 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control border-align" onChange={handleChange} name="password" id="password" placeholder="Please enter your password" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="col-sm-8 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control border-align" onChange={handleChange} name="cpassword" id="exampleInputPassword1" placeholder="Confirm Password" />
                            <p className="text-danger">{passData}</p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="wrapper">
                    <Link type="button" to="/vehicleDetails" className={`btn button ${!initLoad ? 'disabled' : (!phoneData && !passData ? '' : 'disabled')}`} >Submit Button</Link>
                </div>

            </div>
        </div>
    );
}

export default LandingPage;
