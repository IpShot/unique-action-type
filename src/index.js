const types = [];

export default function unique(type) {
  if (types.findIndex(t => t === type) !== -1) {
    throw new Error(`The '${type}' action type already exists.`);
  }
  types.push(type);
  return type;
}
