export default function sanitize(obj) {
  return JSON.parse(JSON.stringify(obj));
}
