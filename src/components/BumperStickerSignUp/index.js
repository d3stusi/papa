import React from 'react';
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import BumperPicture from '../../img/bumper_sticker.png'

const BumperContainer = styled.div`
display: flex;
justify-content: center;
margin: 2em 0 0 0;

@media (max-width: 850px) {
  flex-flow: column;
  align-items: center;
}
`

const BumperAd = styled.div`
width: 650px;
margin-left: -85px;
display: flex;
flex-flow: column;
align-items: center;

@media (max-width: 850px) {
  width: 450px;
  margin-left: 0;
}


@media (max-width: 380px) {
  width: 360px;
  margin-bottom: 25px;
}
`

const BumperForm = styled.form`
width: 530px;

display: flex;
align-items: center;
flex-flow: column;
`

const Form1 = styled.div`
display: ${props => props.is2ndForm ? `none` : `block`};
padding: 0 50px;

@media (max-width: 850px) {
  padding: 0;
}
`
const Form2 = Form1.extend`
display: ${props => props.is2ndForm ? `block` : `none`};
`

const Button = styled.button`
background-color: #FFB347;
border: #FFB347 solid 3px;
color: #002348;
cursor: pointer;
border-radius: 5px;
width: 100px;
float: ${props => props.float}
display: flex;
justify-content: center;
`

const BumperLabel = styled.label`
display: flex;
justify-content: center;
align-items: center;
h4 {
  width: 130px;
}

select {
  width: 170px;
  overflow: hidden;
}
`

const FormMessages = styled.h3`
display: inline-block;
margin: 15px;

a {
  color: #FFB347;
}
`

export default class BumperStickerSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fName: '',
            lName: '',
            address1: '',
            address2: '',
            cityValue: '',
            stateValue: '',
            zipValue: '',
            countryValue: '164',
            signUp: 'bumper',
            is2ndForm: false,
            show1stFormWarning: false,
            msg: '',
            status: ''
        };
        this._handleSubmit = this._handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkForm1 = this.checkForm1.bind(this);
        this.goBackTo1 = this.goBackTo1.bind(this);
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        //Address field is standard textbox because of errors with traditional Address field in MailChimp
        addToMailchimp(this.state.email,
            {
                'FNAME': this.state.fName,
                'LNAME': this.state.lName,
                "ADDRESS": `${this.state.address1} ${this.state.address2} ${this.state.cityValue} ${this.state.stateValue} ${this.state.zipValue} ${this.state.countryValue}`,
                'SIGNUP': this.state.signUp,
            })
            .then(result => {
                if (result.result !== `success`) {
                    this.setState({
                        status: `error`,
                        msg: result.msg,
                    })
                } else {
                    // Email address succesfully subcribed to Mailchimp
                    this.setState({
                        status: `success`,
                        msg: result.msg,
                    })
                }
            })
            .catch(err => {
                // Network failures, timeouts, etc
                this.setState({
                    status: `error`,
                    msg: err,
                })


            })
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    checkForm1(e) {
        e.preventDefault();
        if (this.state.email.indexOf('.') === -1 || this.state.email.indexOf('@') === -1 ) {
            this.setState({ msg: 'Please Enter a valid email'  })
        }
        else { (this.state.email !== '' && this.state.fName !== '') ? this.setState({is2ndForm: true, msg:""}) : this.setState({msg:"Did you forget a field?"})}
    }

    goBackTo1(e) {
        e.preventDefault();
        this.setState({is2ndForm: false, show1stFormWarning: false})
    }


    render() {
        return (
            <BumperContainer>
                <BumperAd>
                    <h3>Get your Papahanaumokuakea Sticker FREE</h3>
                    <img src={BumperPicture} />
                </BumperAd>
                <BumperForm>
                    <Form1 is2ndForm={this.state.is2ndForm}>
                        <div>
                            <BumperLabel htmlFor="mce-EMAIL">
                                <h4>Email</h4>
                                <input
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    name="email"
                                    id="mce-EMAIL"
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                />
                            </BumperLabel>
                        </div>
                        <div>
                            <BumperLabel htmlFor="mce-FNAME">
                                <h4>First name</h4>
                                <input
                                    type="text"
                                    name="fName"
                                    id="MERGE1"
                                    value={this.state.fName}
                                    onChange={this.handleChange}
                                />
                            </BumperLabel>
                        </div>
                        <div>
                            <BumperLabel htmlFor="mce-LNAME">
                                <h4>Last name</h4>
                                <input
                                    type="text"
                                    name="lName"
                                    id="MERGE2"
                                    value={this.state.lName}
                                    onChange={this.handleChange}
                                />
                            </BumperLabel>
                        </div>
                        <Button float="right" onClick={this.checkForm1}>
                            Next
                        </Button>
                        <br/>
                        <br/>
                        <h4>We’ll keep you updated with an occasional email newsletter.</h4>
                    </Form1>
                    {this.state.status !== `success` && <Form2 is2ndForm={this.state.is2ndForm}>
                        <div>
                            <BumperLabel htmlFor="mce-ADDRESS-addr1">
                                <h4>Address</h4>
                                <input
                                    type="text"
                                    value={this.state.address1}
                                    onChange={this.handleChange}
                                    maxLength="70"
                                    name="address1"
                                    id="mce-ADDRESS-addr1"
                                    className=""/>
                            </BumperLabel>
                        </div>
                        <div>
                            <BumperLabel htmlFor="mce-ADDRESS-addr2">
                                <h4>Address Line 2</h4>
                                <input
                                    type="text"
                                    value={this.state.address2}
                                    onChange={this.handleChange}
                                    maxLength="70"
                                    name="address2"
                                    id="mce-ADDRESS-addr2"/>
                            </BumperLabel>
                        </div>
                        <div>
                            <BumperLabel htmlFor="mce-ADDRESS-city">
                                <h4>City</h4>
                                <input
                                    type="text"
                                    value={this.state.cityValue}
                                    onChange={this.handleChange}
                                    maxLength="40"
                                    name="cityValue"
                                    id="mce-ADDRESS-city"/>
                            </BumperLabel>
                        </div>
                        <div>
                            <BumperLabel htmlFor="mce-ADDRESS-state">
                                <h4>State/Province/Region</h4>
                                <input
                                    type="text"
                                    value={this.state.stateValue}
                                    onChange={this.handleChange}
                                    maxLength="20"
                                    name="stateValue"
                                    id="mce-ADDRESS-state"/>
                            </BumperLabel>
                        </div>
                        <div>
                            <BumperLabel htmlFor="mce-ADDRESS-zip">
                                <h4>Postal / Zip Code</h4>
                                <input
                                    type="text"
                                    value={this.state.zipValue}
                                    onChange={this.handleChange}
                                    maxLength="10"
                                    name="zipValue"
                                    id="mce-ADDRESS-zip"/>
                            </BumperLabel>
                        </div>
                        <BumperLabel htmlFor="mce-ADDRESS-country">
                            <h4>Country</h4>
                            <select
                                value={this.state.countryValue}
                                onChange={this.handleChange}
                                name="countryValue"
                                id="mce-ADDRESS-country">
                                <option value="164">USA</option>
                                <option value="286">Aaland Islands</option>
                                <option value="274">Afghanistan</option>
                                <option value="2">Albania</option>
                                <option value="3">Algeria</option>
                                <option value="178">American Samoa</option>
                                <option value="4">Andorra</option>
                                <option value="5">Angola</option>
                                <option value="176">Anguilla</option>
                                <option value="175">Antigua And Barbuda</option>
                                <option value="6">Argentina</option>
                                <option value="7">Armenia</option>
                                <option value="179">Aruba</option>
                                <option value="8">Australia</option>
                                <option value="9">Austria</option>
                                <option value="10">Azerbaijan</option>
                                <option value="11">Bahamas</option>
                                <option value="12">Bahrain</option>
                                <option value="13">Bangladesh</option>
                                <option value="14">Barbados</option>
                                <option value="15">Belarus</option>
                                <option value="16">Belgium</option>
                                <option value="17">Belize</option>
                                <option value="18">Benin</option>
                                <option value="19">Bermuda</option>
                                <option value="20">Bhutan</option>
                                <option value="21">Bolivia</option>
                                <option value="325">Bonaire, Saint Eustatius and Saba</option>
                                <option value="22">Bosnia and Herzegovina</option>
                                <option value="23">Botswana</option>
                                <option value="181">Bouvet Island</option>
                                <option value="24">Brazil</option>
                                <option value="180">Brunei Darussalam</option>
                                <option value="25">Bulgaria</option>
                                <option value="26">Burkina Faso</option>
                                <option value="27">Burundi</option>
                                <option value="28">Cambodia</option>
                                <option value="29">Cameroon</option>
                                <option value="30">Canada</option>
                                <option value="31">Cape Verde</option>
                                <option value="32">Cayman Islands</option>
                                <option value="33">Central African Republic</option>
                                <option value="34">Chad</option>
                                <option value="35">Chile</option>
                                <option value="36">China</option>
                                <option value="185">Christmas Island</option>
                                <option value="37">Colombia</option>
                                <option value="204">Comoros</option>
                                <option value="38">Congo</option>
                                <option value="183">Cook Islands</option>
                                <option value="268">Costa Rica</option>
                                <option value="275">Cote D'Ivoire</option>
                                <option value="40">Croatia</option>
                                <option value="276">Cuba</option>
                                <option value="298">Curacao</option>
                                <option value="41">Cyprus</option>
                                <option value="42">Czech Republic</option>
                                <option value="318">Democratic Republic of the Congo</option>
                                <option value="43">Denmark</option>
                                <option value="44">Djibouti</option>
                                <option value="289">Dominica</option>
                                <option value="187">Dominican Republic</option>
                                <option value="45">Ecuador</option>
                                <option value="46">Egypt</option>
                                <option value="47">El Salvador</option>
                                <option value="48">Equatorial Guinea</option>
                                <option value="49">Eritrea</option>
                                <option value="50">Estonia</option>
                                <option value="51">Ethiopia</option>
                                <option value="189">Falkland Islands</option>
                                <option value="191">Faroe Islands</option>
                                <option value="52">Fiji</option>
                                <option value="53">Finland</option>
                                <option value="54">France</option>
                                <option value="193">French Guiana</option>
                                <option value="277">French Polynesia</option>
                                <option value="56">Gabon</option>
                                <option value="57">Gambia</option>
                                <option value="58">Georgia</option>
                                <option value="59">Germany</option>
                                <option value="60">Ghana</option>
                                <option value="194">Gibraltar</option>
                                <option value="61">Greece</option>
                                <option value="195">Greenland</option>
                                <option value="192">Grenada</option>
                                <option value="196">Guadeloupe</option>
                                <option value="62">Guam</option>
                                <option value="198">Guatemala</option>
                                <option value="270">Guernsey</option>
                                <option value="63">Guinea</option>
                                <option value="65">Guyana</option>
                                <option value="200">Haiti</option>
                                <option value="66">Honduras</option>
                                <option value="67">Hong Kong</option>
                                <option value="68">Hungary</option>
                                <option value="69">Iceland</option>
                                <option value="70">India</option>
                                <option value="71">Indonesia</option>
                                <option value="278">Iran</option>
                                <option value="279">Iraq</option>
                                <option value="74">Ireland</option>
                                <option value="323">Isle of Man</option>
                                <option value="75">Israel</option>
                                <option value="76">Italy</option>
                                <option value="202">Jamaica</option>
                                <option value="78">Japan</option>
                                <option value="288">Jersey (Channel Islands)</option>
                                <option value="79">Jordan</option>
                                <option value="80">Kazakhstan</option>
                                <option value="81">Kenya</option>
                                <option value="203">Kiribati</option>
                                <option value="82">Kuwait</option>
                                <option value="83">Kyrgyzstan</option>
                                <option value="84">Lao People's Democratic Republic</option>
                                <option value="85">Latvia</option>
                                <option value="86">Lebanon</option>
                                <option value="87">Lesotho</option>
                                <option value="88">Liberia</option>
                                <option value="281">Libya</option>
                                <option value="90">Liechtenstein</option>
                                <option value="91">Lithuania</option>
                                <option value="92">Luxembourg</option>
                                <option value="208">Macau</option>
                                <option value="93">Macedonia</option>
                                <option value="94">Madagascar</option>
                                <option value="95">Malawi</option>
                                <option value="96">Malaysia</option>
                                <option value="97">Maldives</option>
                                <option value="98">Mali</option>
                                <option value="99">Malta</option>
                                <option value="207">Marshall Islands</option>
                                <option value="210">Martinique</option>
                                <option value="100">Mauritania</option>
                                <option value="212">Mauritius</option>
                                <option value="241">Mayotte</option>
                                <option value="101">Mexico</option>
                                <option value="102">Moldova, Republic of</option>
                                <option value="103">Monaco</option>
                                <option value="104">Mongolia</option>
                                <option value="290">Montenegro</option>
                                <option value="294">Montserrat</option>
                                <option value="105">Morocco</option>
                                <option value="106">Mozambique</option>
                                <option value="242">Myanmar</option>
                                <option value="107">Namibia</option>
                                <option value="108">Nepal</option>
                                <option value="109">Netherlands</option>
                                <option value="110">Netherlands Antilles</option>
                                <option value="213">New Caledonia</option>
                                <option value="111">New Zealand</option>
                                <option value="112">Nicaragua</option>
                                <option value="113">Niger</option>
                                <option value="114">Nigeria</option>
                                <option value="217">Niue</option>
                                <option value="214">Norfolk Island</option>
                                <option value="272">North Korea</option>
                                <option value="116">Norway</option>
                                <option value="117">Oman</option>
                                <option value="118">Pakistan</option>
                                <option value="222">Palau</option>
                                <option value="282">Palestine</option>
                                <option value="119">Panama</option>
                                <option value="219">Papua New Guinea</option>
                                <option value="120">Paraguay</option>
                                <option value="121">Peru</option>
                                <option value="122">Philippines</option>
                                <option value="221">Pitcairn</option>
                                <option value="123">Poland</option>
                                <option value="124">Portugal</option>
                                <option value="126">Qatar</option>
                                <option value="315">Republic of Kosovo</option>
                                <option value="127">Reunion</option>
                                <option value="128">Romania</option>
                                <option value="129">Russia</option>
                                <option value="130">Rwanda</option>
                                <option value="205">Saint Kitts and Nevis</option>
                                <option value="206">Saint Lucia</option>
                                <option value="324">Saint Martin</option>
                                <option value="237">Saint Vincent and the Grenadines</option>
                                <option value="132">Samoa (Independent)</option>
                                <option value="227">San Marino</option>
                                <option value="255">Sao Tome and Principe</option>
                                <option value="133">Saudi Arabia</option>
                                <option value="134">Senegal</option>
                                <option value="326">Serbia</option>
                                <option value="135">Seychelles</option>
                                <option value="136">Sierra Leone</option>
                                <option value="137">Singapore</option>
                                <option value="302">Sint Maarten</option>
                                <option value="138">Slovakia</option>
                                <option value="139">Slovenia</option>
                                <option value="223">Solomon Islands</option>
                                <option value="140">Somalia</option>
                                <option value="141">South Africa</option>
                                <option value="257">South Georgia and the South Sandwich Islands</option>
                                <option value="142">South Korea</option>
                                <option value="311">South Sudan</option>
                                <option value="143">Spain</option>
                                <option value="144">Sri Lanka</option>
                                <option value="293">Sudan</option>
                                <option value="146">Suriname</option>
                                <option value="225">Svalbard and Jan Mayen Islands</option>
                                <option value="147">Swaziland</option>
                                <option value="148">Sweden</option>
                                <option value="149">Switzerland</option>
                                <option value="285">Syria</option>
                                <option value="152">Taiwan</option>
                                <option value="260">Tajikistan</option>
                                <option value="153">Tanzania</option>
                                <option value="154">Thailand</option>
                                <option value="233">Timor-Leste</option>
                                <option value="155">Togo</option>
                                <option value="232">Tonga</option>
                                <option value="234">Trinidad and Tobago</option>
                                <option value="156">Tunisia</option>
                                <option value="157">Turkey</option>
                                <option value="158">Turkmenistan</option>
                                <option value="287">Turks &amp; Caicos Islands</option>
                                <option value="159">Uganda</option>
                                <option value="161">Ukraine</option>
                                <option value="162">United Arab Emirates</option>
                                <option value="262">United Kingdom</option>
                                <option value="163">Uruguay</option>
                                <option value="165">Uzbekistan</option>
                                <option value="239">Vanuatu</option>
                                <option value="166">Vatican City State (Holy See)</option>
                                <option value="167">Venezuela</option>
                                <option value="168">Vietnam</option>
                                <option value="169">Virgin Islands (British)</option>
                                <option value="238">Virgin Islands (U.S.)</option>
                                <option value="188">Western Sahara</option>
                                <option value="170">Yemen</option>
                                <option value="173">Zambia</option>
                                <option value="174">Zimbabwe</option>
                            </select>
                        </BumperLabel>
                        <Button
                            type="submit"
                            onClick={this._handleSubmit}
                            float="right"
                        > SignUp
                        </Button>
                        <Button float="left" onClick={this.goBackTo1}>
                            Back
                        </Button>
                    </Form2>}
                    <FormMessages dangerouslySetInnerHTML={{__html: this.state.msg}}/>
                </BumperForm>
            </BumperContainer>
        )
    }
}
