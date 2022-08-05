export default function errorUpdate(obj, key, val, name) {
  obj[key + "Error"] = "";
  if (val == "") obj[key + "Error"] = `${name} is Required`;
  return obj;
}
