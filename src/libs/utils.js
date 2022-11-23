export default function castValue(value, castType) {
  switch (castType) {
    case Array:
      return value ? [value] : [];
    case Number:
      return value ? +value : null;
    case Boolean:
      return value === "true";
    case String:
      return value || "";
    default:
      return value;
  }
}