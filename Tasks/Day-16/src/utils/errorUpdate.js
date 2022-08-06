import contactValidation from "./contactValidation";
import emailValidation from "./emailValidation";
import nameValidation from "./nameValidation";
import usernameValidation from "./userNameValidation";
export default function errorUpdate(
  errorUpdater,
  caseType,
  key,
  value,
  caseName
) {
  const nameValidationConditions = [
    { name: `${caseName} can not be Empty`, type: "invalid" },
    { name: "Numbers Not Allowed", type: "invalid" },
    { name: "Special Case Not Allowed", type: "invalid" },
    { name: "Length Must be Greater than 3", type: "invalid" },
    { name: "Length Must Not be Greater than 255", type: "invalid" },
  ];
  const usernameValidationConditions = [
    { name: `${caseName} can not be Empty`, type: "invalid" },
    { name: "Space is Not Allowed", type: "invalid" },
    { name: "Length Must be Greater than 6", type: "invalid" },
  ];
  const emailValidationConditions = [
    { name: `${caseName} can not be Empty`, type: "invalid" },
    { name: "Space is Not Allowed", type: "invalid" },
    { name: "Must be a Valid E-mail", type: "invalid" },
  ];
  const contactValidationConditions = [
    { name: `${caseName} can not be Empty`, type: "invalid" },
    { name: "Space is Not Allowed", type: "invalid" },
    { name: "Must Be a BD Phone Number", type: "invalid" },
  ];

  switch (caseType) {
    case "nameValidate":
      return errorUpdater((prev) => {
        return {
          ...prev,
          [key + "Error"]: nameValidation(
            value,
            caseName,
            nameValidationConditions
          ),
        };
      });
    case "usernameValidate":
      return errorUpdater((prev) => {
        return {
          ...prev,
          [key + "Error"]: usernameValidation(
            value,
            caseName,
            usernameValidationConditions
          ),
        };
      });
    case "emailValidate":
      return errorUpdater((prev) => {
        return {
          ...prev,
          [key + "Error"]: emailValidation(
            value,
            caseName,
            emailValidationConditions
          ),
        };
      });
    case "contactValidate":
      return errorUpdater((prev) => {
        return {
          ...prev,
          [key + "Error"]: contactValidation(
            value,
            caseName,
            contactValidationConditions
          ),
        };
      });

    default:
      return errorUpdater((prev) => prev);
  }
}
