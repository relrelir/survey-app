import { Typography } from "@mui/material";
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo1.jpg" // Route of the image file
      height={100} // Desired size with correct aspect ratio
      width={600} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );
}
