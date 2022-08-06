export default function usernameValidation(
  value,
  name,
  usernameValidationConditions
) {
  console.log(value, name, usernameValidationConditions);
  const errors = [];
  usernameValidationConditions[0].type = value != "" ? "valid" : "invalid";
  usernameValidationConditions[1].type = /^[\S]+$/.test(value)
    ? "valid"
    : "invalid";
  return usernameValidationConditions;
}
