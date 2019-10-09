import React from 'react';
import './payments.css';
import { Link } from 'react-router-dom';
import { chargeCard } from '../controllers/paymentController'

const formatAddress = (address: string, address2: string, city: string, state: string, zip: string) => {
    let fullAddress = address;
    fullAddress += !!address2 ? address2 : '';
    fullAddress += ' ' + city + ', ' + state + ' ' + zip;
    return fullAddress;
}

const PaymentsPage: React.FC = () => {
    const [paymentResponse, setPaymentResponse] = React.useState<any>('');
    const [name, setName] = React.useState<any>('');
    const [address, setAddress] = React.useState<any>('');
    const [address2, setAddress2] = React.useState<any>('');
    const [city, setCity] = React.useState<any>('');
    const [state, setState] = React.useState<any>('');
    const [zip, setZip] = React.useState<any>('');
    const [cardNumber, setCardNumber] = React.useState<any>('');
    const [cardCvv, setCardCvv] = React.useState<any>('');
    const [cardMonth, setCardMonth] = React.useState<any>('');
    const [cardYear, setCardYear] = React.useState<any>('');

    const cardDetails = {
        "amount": 1.0,
        "chargeFee": true,
        "token": null,
        "creditCard": {
            "expirationYear": cardYear,
            "expirationMonth": cardMonth,
            "holder": {
                "name": name,
                "zip": zip,
                "address": formatAddress(address, address2, city, state, zip)
            },
            "number": cardNumber,
            "validationValue": cardCvv
        },
        "clientReferenceData": {
            "clientReferenceData1": "1234",
            "clientReferenceData2": "cf798a3f-1198-4135-ae60-8f58c3892f67",
            "clientReferenceData3": "Location",
            "clientReferenceData4": null,
            "clientReferenceData5": null
        },
        "isRecurring": false,
        "accountGroupCode": "Default",
        "callbackId": null,
        "save": false,
        "convenienceFeeType": null,
        "customerId": null,
        "authenticationKey": "522535a3-e206-4dbb-9448-3da604b8d100"
    }


    const handleSubmit = (event: any) => {
        chargeCard(cardDetails).then(result => {
            setPaymentResponse(result.message)
        });
    }

    return (
        <div className="paymentDetails continer-fluid">
            <div className="containerAlign">
                <div className={paymentResponse ? 'alert alert-success alert-dismissible' : 'hidden'}>
                    <a href="#" onClick={() => setPaymentResponse('')} className={paymentResponse ? 'close' : 'hidden'} >&times;</a>
                    {paymentResponse}
                </div>

                <h3><u>Payment</u></h3>
                <div className="headingDetails">
                    <h5>Billing Details</h5>
                </div>

                {/* Name as it appears on Card */}
                <div className="form-group row inputAlign">
                    <div className="col-md-6">
                        <label htmlFor="name" className="col-sm-8 col-form-label">Name as it appears on Card</label>
                        <div className="col-sm-10">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control border-align" id="name" placeholder="Please enter your first name" />
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className="form-group row inputAlign">
                    <div className="col-md-10">
                        <label htmlFor="address" className="col-sm-4 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control border-align" id="address" placeholder="Please enter your Address" />
                        </div>
                    </div>
                </div>

                {/* State & ZipCode */}
                <div className="form-group row inputAlign">
                    <div className="col-md-4">
                        <label htmlFor="city" className="col-sm-4 col-form-label">City</label>
                        <div className="col-sm-10">
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="form-control border-align" id="city" placeholder="City" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="fName" className="col-sm-4 col-form-label">State</label>
                        <div className="form-group ">
                            <select className="form-control col-sm-12 border-align">
                                <option> State</option>
                                <option value="AL">Alabama (AL)</option>
                                <option value="AK">Alaska (AK)</option>
                                <option value="AZ">Arizona (AZ)</option>
                                <option value="AR">Arkansas (AR)</option>
                                <option value="CA">California (CA)</option>
                                <option value="CO">Colorado (CO)</option>
                                <option value="CT">Connecticut (CT)</option>
                                <option value="DE">Delaware (DE)</option>
                                <option value="DC">District Of Columbia (DC)</option>
                                <option value="FL">Florida (FL)</option>
                                <option value="GA">Georgia (GA)</option>
                                <option value="HI">Hawaii (HI)</option>
                                <option value="ID">Idaho (ID)</option>
                                <option value="IL">Illinois (IL)</option>
                                <option value="IN">Indiana (IN)</option>
                                <option value="IA">Iowa (IA)</option>
                                <option value="KS">Kansas (KS)</option>
                                <option value="KY">Kentucky (KY)</option>
                                <option value="LA">Louisiana (LA)</option>
                                <option value="ME">Maine (ME)</option>
                                <option value="MD">Maryland (MD)</option>
                                <option value="MA">Massachusetts (MA)</option>
                                <option value="MI">Michigan (MI)</option>
                                <option value="MN">Minnesota (MN)</option>
                                <option value="MS">Mississippi (MS)</option>
                                <option value="MO">Missouri (MO)</option>
                                <option value="MT">Montana (MT)</option>
                                <option value="NE">Nebraska (NE)</option>
                                <option value="NV">Nevada (NV)</option>
                                <option value="NH">New Hampshire (NH)</option>
                                <option value="NJ">New Jersey (NJ)</option>
                                <option value="NM">New Mexico (NM)</option>
                                <option value="NY">New York (NY)</option>
                                <option value="NC">North Carolina (NC)</option>
                                <option value="ND">North Dakota (ND)</option>
                                <option value="OH">Ohio (OH)</option>
                                <option value="OK">Oklahoma (OK)</option>
                                <option value="OR">Oregon (OR)</option>
                                <option value="PA">Pennsylvania (PA)</option>
                                <option value="RI">Rhode Island (RI)</option>
                                <option value="SC">South Carolina (SC)</option>
                                <option value="SD">South Dakota (SD)</option>
                                <option value="TN">Tennessee (TN)</option>
                                <option value="TX">Texas (TX)</option>
                                <option value="UT">Utah (UT)</option>
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
                        <label htmlFor="zip" className="col-sm-4 col-form-label">ZipCode</label>
                        <div className="col-sm-10">
                            <input type="number" value={zip} onChange={(e) => setZip(e.target.value)} className="form-control border-align" id="zip" placeholder="Zip Code" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Credit Card Details */}
            <div className="containerAlign">
                <div className="headingDetails">
                    <h5>Credit Card Details</h5>
                </div>

                {/* CC Number */}
                <div className="form-group row inputAlign">
                    <div className="col-md-10">
                        <label htmlFor="cardNum" className="col-sm-4 col-form-label">Credit Card Number</label>
                        <div className="col-sm-10">
                            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="form-control border-align" id="cardNum" placeholder="Please Enter Your 16 Digit Credit Card Number" />
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className="form-group row inputAlign">
                    <div className="col-md-10">
                        <label className="col-sm-4 col-form-label">Expiry Date</label>
                        <div className="row">
                            <div className="col-md-6">
                                <select onChange={e => setCardMonth(e.target.value)} value={cardMonth} className="form-control col-sm-6 selectAlign">
                                    <option>Month</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <select onChange={e => setCardYear(e.target.value)} value={cardYear} className="form-control col-sm-6">
                                    <option>Year</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                    <option>2029</option>
                                    <option>2030</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CVV */}
                <div className="form-group row inputAlign">
                    <div className="col-md-4">
                        <label htmlFor="cvv" className="col-sm-4 col-form-label">CVV</label>
                        <div className="col-sm-10">
                            <input type="number" value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} className="form-control border-align" id="cvv" placeholder="CVV number" maxLength={4} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Button */}
            <div className="wrapper">
                <Link type="button" to="/welcome" className="btn button">Submit Button</Link>
            </div>
        </div>

    );
}

export default PaymentsPage;
