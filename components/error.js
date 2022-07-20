export default function ErrorMessage({ message }) {
  return message ? <p sx={{ color: "red" }}>{message}</p> : <></>;
}
