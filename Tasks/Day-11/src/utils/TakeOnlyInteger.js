export default function TakeOnlyInteger(obj) {
  let valueValue = parseInt(obj.value);
  if (Boolean(valueValue) == true) {
    if (valueValue >= 0) {
      obj.value = valueValue;
      return true;
    } else {
      obj.value = "";
      return false;
    }
  } else {
    obj.value = "";
    return false;
  }
}
