import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutTwentyOne from "../../layouts/LayoutTwentyOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DropzoneArea } from 'material-ui-dropzone';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginLeft:0,
    minWidth: 120,
    width:"100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const EditAccount = ({ location }) => {
  const { pathname } = location;

  const classes = useStyles();
  const [country, setCountry] = React.useState('');
  const [business, setBusiness] = React.useState('');
  const [trading, setTrading] = React.useState('');
  const [fundedyear, setFundedyear] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const  businessChange = (event) => {
    setBusiness(event.target.value);
  };

  const  tradingChange = (event) => {
    setTrading(event.target.value);
  };

  const  fundedyearChange = (event) => {
    setFundedyear(event.target.value);
  };

  return (
    <Fragment>
      <MetaTags>
        <title>OpenAsia | Seller</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Seller</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Edit Account
      </BreadcrumbsItem>
      <LayoutTwentyOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="0">
                          <h3 className="panel-title">
                            <span> 1.</span> Edit Account{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Account Information</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Company Name</label>
                                  <input type="text" className="form-control"/>
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input type="email"  className="form-control"/>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Telephone</label>
                                  <input type="text"  className="form-control"/>
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Description</label>                             
                                  <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="10"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Account photo</label>
                                  <DropzoneArea
                                    acceptedFiles={['image/*']}
                                    dropzoneText={"Drag and drop an image here or click"}
                                    onChange={(files) => console.log('Files:', files)}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <div>
                                    <label>Location</label>
                                  </div>                                  
                                  <FormControl variant="outlined" className={classes.formControl}>
                          
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={country}
                                    onChange={handleChange}
                                    style={{ height:"40px" }}
                                  >
                                      <MenuItem value="AF">Afghanistan</MenuItem>
                                      <MenuItem value="AX">Åland Islands</MenuItem>
                                      <MenuItem value="AL">Albania</MenuItem>
                                      <MenuItem value="DZ">Algeria</MenuItem>
                                      <MenuItem value="AS">American Samoa</MenuItem>
                                      <MenuItem value="AD">Andorra</MenuItem>
                                      <MenuItem value="AO">Angola</MenuItem>
                                      <MenuItem value="AI">Anguilla</MenuItem>
                                      <MenuItem value="AQ">Antarctica</MenuItem>
                                      <MenuItem value="AG">Antigua and Barbuda</MenuItem>
                                      <MenuItem value="AR">Argentina</MenuItem>
                                      <MenuItem value="AM">Armenia</MenuItem>
                                      <MenuItem value="AW">Aruba</MenuItem>
                                      <MenuItem value="AU">Australia</MenuItem>
                                      <MenuItem value="AT">Austria</MenuItem>
                                      <MenuItem value="AZ">Azerbaijan</MenuItem>
                                      <MenuItem value="BS">Bahamas</MenuItem>
                                      <MenuItem value="BH">Bahrain</MenuItem>
                                      <MenuItem value="BD">Bangladesh</MenuItem>
                                      <MenuItem value="BB">Barbados</MenuItem>
                                      <MenuItem value="BY">Belarus</MenuItem>
                                      <MenuItem value="BE">Belgium</MenuItem>
                                      <MenuItem value="BZ">Belize</MenuItem>
                                      <MenuItem value="BJ">Benin</MenuItem>
                                      <MenuItem value="BM">Bermuda</MenuItem>
                                      <MenuItem value="BT">Bhutan</MenuItem>
                                      <MenuItem value="BO">Bolivia, Plurinational State of</MenuItem>
                                      <MenuItem value="BQ">Bonaire, Sint Eustatius and Saba</MenuItem>
                                      <MenuItem value="BA">Bosnia and Herzegovina</MenuItem>
                                      <MenuItem value="BW">Botswana</MenuItem>
                                      <MenuItem value="BV">Bouvet Island</MenuItem>
                                      <MenuItem value="BR">Brazil</MenuItem>
                                      <MenuItem value="IO">British Indian Ocean Territory</MenuItem>
                                      <MenuItem value="BN">Brunei Darussalam</MenuItem>
                                      <MenuItem value="BG">Bulgaria</MenuItem>
                                      <MenuItem value="BF">Burkina Faso</MenuItem>
                                      <MenuItem value="BI">Burundi</MenuItem>
                                      <MenuItem value="KH">Cambodia</MenuItem>
                                      <MenuItem value="CM">Cameroon</MenuItem>
                                      <MenuItem value="CA">Canada</MenuItem>
                                      <MenuItem value="CV">Cape Verde</MenuItem>
                                      <MenuItem value="KY">Cayman Islands</MenuItem>
                                      <MenuItem value="CF">Central African Republic</MenuItem>
                                      <MenuItem value="TD">Chad</MenuItem>
                                      <MenuItem value="CL">Chile</MenuItem>
                                      <MenuItem value="CN">China</MenuItem>
                                      <MenuItem value="CX">Christmas Island</MenuItem>
                                      <MenuItem value="CC">Cocos (Keeling) Islands</MenuItem>
                                      <MenuItem value="CO">Colombia</MenuItem>
                                      <MenuItem value="KM">Comoros</MenuItem>
                                      <MenuItem value="CG">Congo</MenuItem>
                                      <MenuItem value="CD">Congo, the Democratic Republic of the</MenuItem>
                                      <MenuItem value="CK">Cook Islands</MenuItem>
                                      <MenuItem value="CR">Costa Rica</MenuItem>
                                      <MenuItem value="CI">Côte d'Ivoire</MenuItem>
                                      <MenuItem value="HR">Croatia</MenuItem>
                                      <MenuItem value="CU">Cuba</MenuItem>
                                      <MenuItem value="CW">Curaçao</MenuItem>
                                      <MenuItem value="CY">Cyprus</MenuItem>
                                      <MenuItem value="CZ">Czech Republic</MenuItem>
                                      <MenuItem value="DK">Denmark</MenuItem>
                                      <MenuItem value="DJ">Djibouti</MenuItem>
                                      <MenuItem value="DM">Dominica</MenuItem>
                                      <MenuItem value="DO">Dominican Republic</MenuItem>
                                      <MenuItem value="EC">Ecuador</MenuItem>
                                      <MenuItem value="EG">Egypt</MenuItem>
                                      <MenuItem value="SV">El Salvador</MenuItem>
                                      <MenuItem value="GQ">Equatorial Guinea</MenuItem>
                                      <MenuItem value="ER">Eritrea</MenuItem>
                                      <MenuItem value="EE">Estonia</MenuItem>
                                      <MenuItem value="ET">Ethiopia</MenuItem>
                                      <MenuItem value="FK">Falkland Islands (Malvinas)</MenuItem>
                                      <MenuItem value="FO">Faroe Islands</MenuItem>
                                      <MenuItem value="FJ">Fiji</MenuItem>
                                      <MenuItem value="FI">Finland</MenuItem>
                                      <MenuItem value="FR">France</MenuItem>
                                      <MenuItem value="GF">French Guiana</MenuItem>
                                      <MenuItem value="PF">French Polynesia</MenuItem>
                                      <MenuItem value="TF">French Southern Territories</MenuItem>
                                      <MenuItem value="GA">Gabon</MenuItem>
                                      <MenuItem value="GM">Gambia</MenuItem>
                                      <MenuItem value="GE">Georgia</MenuItem>
                                      <MenuItem value="DE">Germany</MenuItem>
                                      <MenuItem value="GH">Ghana</MenuItem>
                                      <MenuItem value="GI">Gibraltar</MenuItem>
                                      <MenuItem value="GR">Greece</MenuItem>
                                      <MenuItem value="GL">Greenland</MenuItem>
                                      <MenuItem value="GD">Grenada</MenuItem>
                                      <MenuItem value="GP">Guadeloupe</MenuItem>
                                      <MenuItem value="GU">Guam</MenuItem>
                                      <MenuItem value="GT">Guatemala</MenuItem>
                                      <MenuItem value="GG">Guernsey</MenuItem>
                                      <MenuItem value="GN">Guinea</MenuItem>
                                      <MenuItem value="GW">Guinea-Bissau</MenuItem>
                                      <MenuItem value="GY">Guyana</MenuItem>
                                      <MenuItem value="HT">Haiti</MenuItem>
                                      <MenuItem value="HM">Heard Island and McDonald Islands</MenuItem>
                                      <MenuItem value="VA">Holy See (Vatican City State)</MenuItem>
                                      <MenuItem value="HN">Honduras</MenuItem>
                                      <MenuItem value="HK">Hong Kong</MenuItem>
                                      <MenuItem value="HU">Hungary</MenuItem>
                                      <MenuItem value="IS">Iceland</MenuItem>
                                      <MenuItem value="IN">India</MenuItem>
                                      <MenuItem value="ID">Indonesia</MenuItem>
                                      <MenuItem value="IR">Iran, Islamic Republic of</MenuItem>
                                      <MenuItem value="IQ">Iraq</MenuItem>
                                      <MenuItem value="IE">Ireland</MenuItem>
                                      <MenuItem value="IM">Isle of Man</MenuItem>
                                      <MenuItem value="IL">Israel</MenuItem>
                                      <MenuItem value="IT">Italy</MenuItem>
                                      <MenuItem value="JM">Jamaica</MenuItem>
                                      <MenuItem value="JP">Japan</MenuItem>
                                      <MenuItem value="JE">Jersey</MenuItem>
                                      <MenuItem value="JO">Jordan</MenuItem>
                                      <MenuItem value="KZ">Kazakhstan</MenuItem>
                                      <MenuItem value="KE">Kenya</MenuItem>
                                      <MenuItem value="KI">Kiribati</MenuItem>
                                      <MenuItem value="KP">Korea, Democratic People's Republic of</MenuItem>
                                      <MenuItem value="KR">Korea, Republic of</MenuItem>
                                      <MenuItem value="KW">Kuwait</MenuItem>
                                      <MenuItem value="KG">Kyrgyzstan</MenuItem>
                                      <MenuItem value="LA">Lao People's Democratic Republic</MenuItem>
                                      <MenuItem value="LV">Latvia</MenuItem>
                                      <MenuItem value="LB">Lebanon</MenuItem>
                                      <MenuItem value="LS">Lesotho</MenuItem>
                                      <MenuItem value="LR">Liberia</MenuItem>
                                      <MenuItem value="LY">Libya</MenuItem>
                                      <MenuItem value="LI">Liechtenstein</MenuItem>
                                      <MenuItem value="LT">Lithuania</MenuItem>
                                      <MenuItem value="LU">Luxembourg</MenuItem>
                                      <MenuItem value="MO">Macao</MenuItem>
                                      <MenuItem value="MK">Macedonia, the former Yugoslav Republic of</MenuItem>
                                      <MenuItem value="MG">Madagascar</MenuItem>
                                      <MenuItem value="MW">Malawi</MenuItem>
                                      <MenuItem value="MY">Malaysia</MenuItem>
                                      <MenuItem value="MV">Maldives</MenuItem>
                                      <MenuItem value="ML">Mali</MenuItem>
                                      <MenuItem value="MT">Malta</MenuItem>
                                      <MenuItem value="MH">Marshall Islands</MenuItem>
                                      <MenuItem value="MQ">Martinique</MenuItem>
                                      <MenuItem value="MR">Mauritania</MenuItem>
                                      <MenuItem value="MU">Mauritius</MenuItem>
                                      <MenuItem value="YT">Mayotte</MenuItem>
                                      <MenuItem value="MX">Mexico</MenuItem>
                                      <MenuItem value="FM">Micronesia, Federated States of</MenuItem>
                                      <MenuItem value="MD">Moldova, Republic of</MenuItem>
                                      <MenuItem value="MC">Monaco</MenuItem>
                                      <MenuItem value="MN">Mongolia</MenuItem>
                                      <MenuItem value="ME">Montenegro</MenuItem>
                                      <MenuItem value="MS">Montserrat</MenuItem>
                                      <MenuItem value="MA">Morocco</MenuItem>
                                      <MenuItem value="MZ">Mozambique</MenuItem>
                                      <MenuItem value="MM">Myanmar</MenuItem>
                                      <MenuItem value="NA">Namibia</MenuItem>
                                      <MenuItem value="NR">Nauru</MenuItem>
                                      <MenuItem value="NP">Nepal</MenuItem>
                                      <MenuItem value="NL">Netherlands</MenuItem>
                                      <MenuItem value="NC">New Caledonia</MenuItem>
                                      <MenuItem value="NZ">New Zealand</MenuItem>
                                      <MenuItem value="NI">Nicaragua</MenuItem>
                                      <MenuItem value="NE">Niger</MenuItem>
                                      <MenuItem value="NG">Nigeria</MenuItem>
                                      <MenuItem value="NU">Niue</MenuItem>
                                      <MenuItem value="NF">Norfolk Island</MenuItem>
                                      <MenuItem value="MP">Northern Mariana Islands</MenuItem>
                                      <MenuItem value="NO">Norway</MenuItem>
                                      <MenuItem value="OM">Oman</MenuItem>
                                      <MenuItem value="PK">Pakistan</MenuItem>
                                      <MenuItem value="PW">Palau</MenuItem>
                                      <MenuItem value="PS">Palestinian Territory, Occupied</MenuItem>
                                      <MenuItem value="PA">Panama</MenuItem>
                                      <MenuItem value="PG">Papua New Guinea</MenuItem>
                                      <MenuItem value="PY">Paraguay</MenuItem>
                                      <MenuItem value="PE">Peru</MenuItem>
                                      <MenuItem value="PH">Philippines</MenuItem>
                                      <MenuItem value="PN">Pitcairn</MenuItem>
                                      <MenuItem value="PL">Poland</MenuItem>
                                      <MenuItem value="PT">Portugal</MenuItem>
                                      <MenuItem value="PR">Puerto Rico</MenuItem>
                                      <MenuItem value="QA">Qatar</MenuItem>
                                      <MenuItem value="RE">Réunion</MenuItem>
                                      <MenuItem value="RO">Romania</MenuItem>
                                      <MenuItem value="RU">Russian Federation</MenuItem>
                                      <MenuItem value="RW">Rwanda</MenuItem>
                                      <MenuItem value="BL">Saint Barthélemy</MenuItem>
                                      <MenuItem value="SH">Saint Helena, Ascension and Tristan da Cunha</MenuItem>
                                      <MenuItem value="KN">Saint Kitts and Nevis</MenuItem>
                                      <MenuItem value="LC">Saint Lucia</MenuItem>
                                      <MenuItem value="MF">Saint Martin (French part)</MenuItem>
                                      <MenuItem value="PM">Saint Pierre and Miquelon</MenuItem>
                                      <MenuItem value="VC">Saint Vincent and the Grenadines</MenuItem>
                                      <MenuItem value="WS">Samoa</MenuItem>
                                      <MenuItem value="SM">San Marino</MenuItem>
                                      <MenuItem value="ST">Sao Tome and Principe</MenuItem>
                                      <MenuItem value="SA">Saudi Arabia</MenuItem>
                                      <MenuItem value="SN">Senegal</MenuItem>
                                      <MenuItem value="RS">Serbia</MenuItem>
                                      <MenuItem value="SC">Seychelles</MenuItem>
                                      <MenuItem value="SL">Sierra Leone</MenuItem>
                                      <MenuItem value="SG">Singapore</MenuItem>
                                      <MenuItem value="SX">Sint Maarten (Dutch part)</MenuItem>
                                      <MenuItem value="SK">Slovakia</MenuItem>
                                      <MenuItem value="SI">Slovenia</MenuItem>
                                      <MenuItem value="SB">Solomon Islands</MenuItem>
                                      <MenuItem value="SO">Somalia</MenuItem>
                                      <MenuItem value="ZA">South Africa</MenuItem>
                                      <MenuItem value="GS">South Georgia and the South Sandwich Islands</MenuItem>
                                      <MenuItem value="SS">South Sudan</MenuItem>
                                      <MenuItem value="ES">Spain</MenuItem>
                                      <MenuItem value="LK">Sri Lanka</MenuItem>
                                      <MenuItem value="SD">Sudan</MenuItem>
                                      <MenuItem value="SR">Suriname</MenuItem>
                                      <MenuItem value="SJ">Svalbard and Jan Mayen</MenuItem>
                                      <MenuItem value="SZ">Swaziland</MenuItem>
                                      <MenuItem value="SE">Sweden</MenuItem>
                                      <MenuItem value="CH">Switzerland</MenuItem>
                                      <MenuItem value="SY">Syrian Arab Republic</MenuItem>
                                      <MenuItem value="TW">Taiwan, Province of China</MenuItem>
                                      <MenuItem value="TJ">Tajikistan</MenuItem>
                                      <MenuItem value="TZ">Tanzania, United Republic of</MenuItem>
                                      <MenuItem value="TH">Thailand</MenuItem>
                                      <MenuItem value="TL">Timor-Leste</MenuItem>
                                      <MenuItem value="TG">Togo</MenuItem>
                                      <MenuItem value="TK">Tokelau</MenuItem>
                                      <MenuItem value="TO">Tonga</MenuItem>
                                      <MenuItem value="TT">Trinidad and Tobago</MenuItem>
                                      <MenuItem value="TN">Tunisia</MenuItem>
                                      <MenuItem value="TR">Turkey</MenuItem>
                                      <MenuItem value="TM">Turkmenistan</MenuItem>
                                      <MenuItem value="TC">Turks and Caicos Islands</MenuItem>
                                      <MenuItem value="TV">Tuvalu</MenuItem>
                                      <MenuItem value="UG">Uganda</MenuItem>
                                      <MenuItem value="UA">Ukraine</MenuItem>
                                      <MenuItem value="AE">United Arab Emirates</MenuItem>
                                      <MenuItem value="GB">United Kingdom</MenuItem>
                                      <MenuItem value="US">United States</MenuItem>
                                      <MenuItem value="UM">United States Minor Outlying Islands</MenuItem>
                                      <MenuItem value="UY">Uruguay</MenuItem>
                                      <MenuItem value="UZ">Uzbekistan</MenuItem>
                                      <MenuItem value="VU">Vanuatu</MenuItem>
                                      <MenuItem value="VE">Venezuela, Bolivarian Republic of</MenuItem>
                                      <MenuItem value="VN">Viet Nam</MenuItem>
                                      <MenuItem value="VG">Virgin Islands, British</MenuItem>
                                      <MenuItem value="VI">Virgin Islands, U.S.</MenuItem>
                                      <MenuItem value="WF">Wallis and Futuna</MenuItem>
                                      <MenuItem value="EH">Western Sahara</MenuItem>
                                      <MenuItem value="YE">Yemen</MenuItem>
                                      <MenuItem value="ZM">Zambia</MenuItem>
                                      <MenuItem value="ZW">Zimbabwe</MenuItem>
                                    </Select>
                                  </FormControl>
                                  </div>
                              </div>                     

                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Type of Business</label>
                                  <FormControl variant="outlined" className={classes.formControl}>
                          
                                  <Select                               
                                    value={business}
                                    onChange={businessChange}
                                    style={{ height:"40px" }}
                                  >
                                      <MenuItem value="0">Retailer</MenuItem>
                                      <MenuItem value="1">Importer</MenuItem>
                                      <MenuItem value="2">Distributor</MenuItem>
                                      <MenuItem value="3">E-commerce</MenuItem>
                                      <MenuItem value="4">Representatives</MenuItem>
                                      <MenuItem value="5">Marketing Agency</MenuItem>
                                      <MenuItem value="6">Logistics</MenuItem>
                                      <MenuItem value="7">Legal</MenuItem>
                                      <MenuItem value="8">Investor</MenuItem>
                                  </Select>
                                  </FormControl>
                                </div>
                              </div>                              

                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Terms of trading</label>
                                  <FormControl variant="outlined" className={classes.formControl}>
                          
                                  <Select                               
                                    value={trading}
                                    onChange={tradingChange}
                                    style={{ height:"40px" }}
                                  >
                                      <MenuItem value="0">FOB</MenuItem>
                                      <MenuItem value="1">EXW</MenuItem>
                                      <MenuItem value="2">CIF</MenuItem>                           
                                  </Select>
                                  </FormControl>
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Funded year</label>
                                  <FormControl variant="outlined" className={classes.formControl}>
                          
                                  <Select                               
                                    value={fundedyear}
                                    onChange={fundedyearChange}
                                    style={{ height:"40px" }}
                                  >
                                      <MenuItem value="0">0-3 year</MenuItem>
                                      <MenuItem value="1">5+ years</MenuItem>
                                      <MenuItem value="2">10+ years</MenuItem>   
                                      <MenuItem value="3">20+ years</MenuItem>                           
                                  </Select>
                                  </FormControl>
                                </div>
                              </div>
       
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Edit</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="1">
                          <h3 className="panel-title">
                            <span>2.</span>Change your password
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Change Password</h4>
                              <h5>Your Password</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Password</label>
                                  <input type="password" />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Password Confirm</label>
                                  <input type="password" />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Change</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutTwentyOne>
    </Fragment>
  );
};

EditAccount.propTypes = {
  location: PropTypes.object
};

export default EditAccount;
