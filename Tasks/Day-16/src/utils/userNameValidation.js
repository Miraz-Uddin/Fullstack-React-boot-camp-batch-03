export default function nameValidation(value, name, nameValidationConditions) {
  console.log(value, name, nameValidationConditions);
  const errors = [];
  nameValidationConditions[0].type = value != "" ? "valid" : "invalid";
  nameValidationConditions[1].type = /^[\S]+$/.test(value)
    ? "valid"
    : "invalid";
  return nameValidationConditions;
}
