import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function LoginButton() {
  const router = useRouter();
  // cons;
  return (
    <Button size="lg" type="button" onClick={() => router.push("/auth/signin")}>
      log in
    </Button>
  );
}
