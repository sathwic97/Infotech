import React from "react";

function NewAccount() {
  return (
    <div className="loginContainer">
      <div>
        <div>
          <img
            src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png"
            alt=""
          />
        </div>
        <div className="loginFormDiv">
          <div>
            <h3 className="loginHeading">Sign up </h3>
          </div>
          <div>
            <p>Enter your name exactly as per your educational certificates.</p>
          </div>
          <div>
            <form>
              <div>
                <label className="loginLabel">Name</label>
                <input
                  type={"text"}
                  className="inputStyle1"
                  placeholder="Enter Name As Per Certificates"
                  aria-required="true"
                ></input>
              </div>
              <div>
                <label className="loginLabel">Gender</label>
                <select
                  className="inputStyle1"
                  placeholder="Enter Gender"
                  aria-required="true"
                >
                  <option value={"gender"}>Choose Gender</option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                  <option value={"other"}>Other</option>
                </select>
              </div>
              <div>
                <label className="loginLabel">Name</label>
                <select
                  className="inputStyle1"
                  placeholder="Marital Status"
                  aria-required="true"
                >
                  <option value={"Marital Status"}>Marital Status</option>
                  <option value={"unmarried"}>Unmarried</option>
                  <option value={"married"}>Married</option>
                  <option value={"divorced"}>Divorced</option>
                  <option value={"widowed"}>Widowed</option>
                </select>
              </div>
              <div>
                <img
                  style={{
                    width: "240px",
                    height: "240px",
                    borderRadius: "50%",
                  }}
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
              <div>
                <label className="loginLabel">Image Upload</label>
                <input style={{ marginBottom: "20px" }} type={"file"}></input>
              </div>
              <div>
                <label className="loginLabel">Mobile Number</label>
                <input
                  type={"tel"}
                  className="inputStyle1"
                  placeholder="Enter Mobile Number"
                ></input>
              </div>
              <div>
                <label className="loginLabel">City/Town</label>
                <input
                  type={"text"}
                  className="inputStyle1"
                  placeholder="Enter City/Town "
                  aria-required="true"
                ></input>
              </div>
              <div>
                <label className="loginLabel">Select State</label>
                <input
                  className="inputStyle1"
                  list="states"
                  placeholder="Select State"
                ></input>
                <datalist id="states">
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </datalist>
              </div>
              <div>
                <label className="loginLabel">Email</label>
                <input
                  type={"email"}
                  className="inputStyle1"
                  placeholder="Enter Email"
                  aria-required="true"
                ></input>
              </div>
              <div>
                <label className="loginLabel">Password</label>
                <input
                  type={"password"}
                  className="inputStyle1"
                  placeholder="Enter Password"
                  aria-required="true"
                ></input>
              </div>
              <div>
                <label className="loginLabel">re-enter Password</label>
                <input
                  type={"password"}
                  className="inputStyle1"
                  placeholder="Re-enter Password"
                  aria-required="true"
                ></input>
              </div>
            </form>
          </div>
          <div>
            <input type="checkbox" name="terms and conditions" id="tnc" />
            <label htmlFor="tnc">
              I agree to the
              <a
                target={"_blank"}
                href="https://docs.google.com/document/d/1UNc8jOJtjQJttCxogPfFQcXFl6gNm8iuOwiRfbkmXcw/edit"
              >
                <button
                  className="website"
                  style={{ color: "steelblue", marginBottom: "15px" }}
                >
                  Terms of Service & Privacy Policy
                </button>
              </a>
            </label>
          </div>
          <div className="newAccountButtons">
            <span>
              <a href="/">
                <button
                  style={{
                    width: "70px",
                    height: "40px",
                    backgroundColor: "whitesmoke",
                    marginRight: "20px",
                    borderStyle: "hidden",
                    color: "darkcyan",
                    fontWeight: "400",
                  }}
                  type="submit"
                >
                  BACK
                </button>
              </a>
            </span>
            <span>
              <button
                style={{
                  width: "70px",
                  height: "40px",
                  backgroundColor: "darkcyan",
                  marginRight: "20px",
                  borderStyle: "hidden",
                  color: "whitesmoke",
                  fontWeight: "400",
                }}
                type="submit"
              >
                SUBMIT
              </button>
            </span>
          </div>
        </div>
      </div>
      <div>
        <a href="https://www.brninfotech.com/" target={"_blank"}>
          <button className="website">2022 © BRN Infotech Pvt. Ltd.</button>
        </a>
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default NewAccount;
