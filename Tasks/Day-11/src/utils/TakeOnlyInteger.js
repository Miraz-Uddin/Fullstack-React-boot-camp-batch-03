export default function TakeOnlyInteger(
  pointer,
  inputValueChanger,
  value1,
  value2,
  btnToggle
) {
  inputValueChanger((prev) => {
    return {
      ...prev,
      [pointer]: value1,
    };
  });

  const regexForOnlyInteger = /(([1-9]{1})|([1-9]{1}[0-9]{1,}))/;
  let check =
    regexForOnlyInteger.test(value1) &&
    Boolean(value1) == true &&
    value1 >= 0 &&
    regexForOnlyInteger.test(value2) &&
    Boolean(value2) == true &&
    value2 >= 0 &&
    value1[0] != 0 &&
    value2[0] != 0;
  if (check) {
    btnToggle(true);
  } else {
    btnToggle(false);
  }
}
