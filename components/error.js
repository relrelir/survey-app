export default function Errormessege({ messege }) {
  return messege ? <p sx={{ color: "red" }}>{messege}</p> : <></>;
}
