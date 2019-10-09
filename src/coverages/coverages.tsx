import React from 'react';
import './coverages.css';
import { Link } from 'react-router-dom';

const Coverages: React.FC = () => {
    const [selectedValue, setSelectedValue] = React.useState<any>('');
    const handleChange = (event: any) => {
        if (event.target.value == "$250,000/$500,000" || event.target.value == "$500,000 CSL") {
            setSelectedValue('If this limit is selected, we need to pop a message that asks them to call Customer Service to finish their quote');
        }

    }
    return (

        <div className="coverageDetails">
            <div className="navbarBackground">
                <div className="row navbarRow">
                    <div className="col-md-3 item-border">
                        <img className="badgeImg" src={require('../assets/badge.png')} />
                        <h6 className="navHeadingtxt">Minimum</h6>
                        <p className="navContenttxt">From <sup>$</sup><strong>421</strong>/mo</p>
                    </div>
                    <div className="col-md-3 item-border">
                        <img className="badgeImg" src={require('../assets/badge.png')} />
                        <h6 className="navHeadingtxt">Basic</h6>
                        <p className="navContenttxt">From <sup>$</sup><strong>400</strong>/mo</p>
                    </div>
                    <div className="col-md-3 item-border">
                        <img className="badgeImg" src={require('../assets/badge.png')} />
                        <h6 className="navHeadingtxt">Better</h6>
                        <p className="navContenttxt">From <sup>$</sup><strong>410</strong>/mo</p>
                    </div>
                    <div className="col-md-3 item-border">
                        <img className="badgeImg" src={require('../assets/badge.png')} />
                        <h6 className="navHeadingtxt">Best</h6>
                        <p className="navContenttxt">From <sup>$</sup><strong>410</strong>/mo</p>
                    </div>
                </div>
            </div>
            <div className={selectedValue ? 'alert alert-success alert-dismissible' : 'hidden'}>
                <a href="#" onClick={() => setSelectedValue('')} className={selectedValue ? 'close' : 'hidden'} >&times;</a>
                {selectedValue}
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <p>Coverage</p>
                    </div>
                    <div className="col-md-4">
                        <p>Limit & Deductions</p>
                    </div>
                    <div className="col-md-4">
                        <p>Premium</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <a className="coveragesColor" href=""><i className="fa fa-caret-square-o-right coveragesColor" /> Bodily Injury Limit</a>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group ">
                            <select onChange={handleChange} className="form-control col-sm-10">
                                <option>select</option>
                                <option>$15,000/$30,000</option>
                                <option>$25,000/$50,000 </option>
                                <option>$50,000/$100,000</option>
                                <option>$100,000/$300,000</option>
                                <option>$250,000/$500,000</option>
                                <option>$100,000 CSL</option>
                                <option>$300,000 CSL</option>
                                <option>$500,000 CSL</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <a className="coveragesColor" href=""><i className="fa fa-caret-square-o-right coveragesColor" /> Property Damage Limit</a>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group ">
                            <select onChange={handleChange} className="form-control col-sm-10">
                                <option value=''>select</option>
                                <option>$10,000</option>
                                <option>$15,000</option>
                                <option>$20,000</option>
                                <option>$25,000</option>
                                <option>$50,000</option>
                                <option>$100,000</option>
                                <option>$100,000 CSL</option>
                                <option>$300,000 CSL</option>
                                <option>$500,000 CSL</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <a className="coveragesColor" href=""><i className="fa fa-caret-square-o-right coveragesColor" /> Medical Limit</a>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group ">
                            <select onChange={handleChange} className="form-control col-sm-10">
                                <option>select</option>
                                <option>$500 Per Person</option>
                                <option>$1,000 Per Person</option>
                                <option>$2,000 Per Person</option>
                                <option>$2,500 Per Person</option>
                                <option>$5,000 Per Person</option>
                                <option>$10,000 Per Person</option>
                                <option>$25,000 Per Person</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <a className="coveragesColor" href=""><i className="fa fa-caret-square-o-right coveragesColor" /> Uninsured Motorist Bodily Injury Limit</a>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group ">
                            <select onChange={handleChange} className="form-control col-sm-10">
                                <option>select</option>
                                <option>$15,000/$30,000</option>
                                <option>$25,000/$50,000 </option>
                                <option>$50,000/$100,000</option>
                                <option>$100,000/$300,000</option>
                                <option>$250,000/$500,000</option>
                                <option>$100,000 CSL</option>
                                <option>$300,000 CSL</option>
                                <option>$500,000 CSL</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <a className="coveragesColor" href=""><i className="fa fa-caret-square-o-right coveragesColor" />  Underinsured Motorist Bodily Injury Limit</a>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group ">
                            <select onChange={handleChange} className="form-control col-sm-10">
                                <option>select</option>
                                <option>$15,000/$30,000</option>
                                <option>$25,000/$50,000 </option>
                                <option>$50,000/$100,000</option>
                                <option>$100,000/$300,000</option>
                                <option>$250,000/$500,000</option>
                                <option>$100,000 CSL</option>
                                <option>$300,000 CSL</option>
                                <option>$500,000 CSL</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <a className="coveragesColor" href=""><i className="fa fa-caret-square-o-right coveragesColor" /> Comprehensive Coverage Deductible</a>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group ">
                            <select className="form-control col-sm-10">
                                <option>select</option>
                                <option>$0 Deductible</option>
                                <option>$50 Deductible</option>
                                <option>$100 Deductible</option>
                                <option>$200 Deductible</option>
                                <option>$250 Deductible</option>
                                <option>$500 Deductible</option>
                                <option>$1,000 Deductible</option>
                                <option>$2,000 Deductible</option>
                                <option>$2,500 Deductible</option>
                                <option>$50 Deductible W/$0 Glass</option>
                                <option>$100 Deductible W/$0 Glass</option>
                                <option>$200 Deductible W/$0 Glass</option>
                                <option>$250 Deductible W/$0 Glass</option>
                                <option>$500 Deductible W/$0 Glass</option>
                                <option>$1,000 Deductible W/$0 Glass</option>
                                <option>$2,000 Deductible W/$0 Glass</option>
                                <option>$2,500 Deductible W/$0 Glass</option>

                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <a className="coveragesColor" href=""><i className="fa fa-caret-square-o-right coveragesColor" /> Collision Coverage Deductible</a>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group ">
                            <select className="form-control col-sm-10">
                                <option>select</option>
                                <option>None</option>
                                <option>$100 Deductible</option>
                                <option>$200 Deductible</option>
                                <option>$250 Deductible</option>
                                <option>$500 Deductible</option>
                                <option>$1,000 Deductible</option>
                                <option>$2,000 Deductible</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <a className="coveragesColor" href=""><i className="fa fa-caret-square-o-right coveragesColor" /> Road side Assistance </a>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group ">
                            <select className="form-control col-sm-10">
                                <option>select</option>
                                <option>$100 Deductible</option>
                                <option>$200 Deductible</option>
                                <option>$250 Deductible</option>
                                <option>$500 Deductible</option>
                                <option>$1,000 Deductible</option>
                                <option>$2,000 Deductible</option>

                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <a className="coveragesColor" href=""><i className="fa fa-caret-square-o-right coveragesColor" /> Car Rental </a>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group ">
                            <select className="form-control col-sm-10">
                                <option>select</option>
                                <option>$40 Per Day $1,200 Max</option>
                                <option>$50 Per Day $1,500 Max</option>
                                <option>$60 Per Day $1,800 Max</option>

                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="fName" placeholder="Please enter your first name" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Button */}
            <div className="wrapper">
                <Link type="button" to="/payments" className="btn button">Submit Button</Link>
            </div>
        </div>
    );
}

export default Coverages;
