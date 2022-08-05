import React, { useEffect, useState } from "react";
import GeneralInput from "../formInputs/GeneralInput";
import errorUpdate from "../utils/errorUpdate";

const userInitialInfo = {
  firstName: "",
  lastName: "",
};
const userInitialnfoErrors = {
  firstNameError: "",
  lastNameError: "",
};

export default function Home() {
  const [userInfo, setUserInfo] = useState(userInitialInfo);
  const [userInfoErrors, setUserInfoErrors] = useState(userInitialnfoErrors);
  const [formSubmitBtnActive, setFormSubmitBtnActive] = useState(false);

  const handleChange = (e) => {
    const label = e.target.nextElementSibling.innerHTML;
    const key = e.target.name;
    const val = e.target.value;
    setUserInfo((prev) => {
      return {
        ...prev,
        [key]: val,
      };
    });
    if (key == "firstName") {
      errorUpdate(setUserInfoErrors, "nameValidate", key, val, label);
    }
    if (key == "lastName") {
      errorUpdate(setUserInfoErrors, "nameValidate", key, val, label);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Can be Submitted");
    console.log(userInfo);
  };

  const { firstName, lastName } = userInfo;
  const { firstNameError, lastNameError } = userInfoErrors;

  useEffect(() => {
    let checkErrorsArr = [];
    Object.values(userInfoErrors).forEach((error) => {
      checkErrorsArr.push(
        Object.values(error).every((item) => item.type == "valid")
      );
    });
    const checkErrors = checkErrorsArr.every((val) => val == true);
    const checkValues = Object.values(userInfo).every((item) => item != "");
    if (checkErrors && checkValues) return setFormSubmitBtnActive(true);
    return setFormSubmitBtnActive(false);
  }, [userInfoErrors, userInfo]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body">
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-6 col-lg-4">
                    <GeneralInput
                      label="First Name"
                      type="text"
                      name="firstName"
                      value={firstName}
                      func={handleChange}
                      errorVal={firstNameError}
                    />
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <GeneralInput
                      label="Last Name"
                      type="text"
                      name="lastName"
                      value={lastName}
                      func={handleChange}
                      errorVal={lastNameError}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className={`btn btn-success ${
                        !formSubmitBtnActive ? "disabled-button" : ""
                      }`}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
