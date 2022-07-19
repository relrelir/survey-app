import { Avatar, Button } from "@mui/material";
import { Box } from "@mui/system";
import User from "../../models/user";
import { useEffect } from "react";
import { getToken } from "next-auth/jwt";
import { connectDB } from "../../middlware/mongodb";

export default function editUser() {
  //   useEffect(() => {
  //     fetch("/api/user").then((response) => response.json());
  //     //   .then((users) => users.find({_id:}));
  //   }, []);
  //   console.log(userId);

  return (
    <Box>
      <Box>
        <Button variant="text" aria-label="Remove">
          <Box sx={{ width: "14px", height: "14px" }}>
            <Box>
              <Avatar
                alt="Remy Sharp"
                sx={{ width: 90, height: 90, fontSize: 22 }}
                src={token?.picture}
              />
              <br />
            </Box>
          </Box>
        </Button>
      </Box>
      <Button variant="contained">Upload New</Button>
      <Button
        id="library-profile-picture-btn"
        data-event-category="ProfileSettings"
        data-event-label="library-profile-picture-btn"
      >
        Choose from library
      </Button>
    </Box>
  );
}

export async function getServerSideProps({ params, req, res }) {
  const token = await getToken({ req });
  console.log("token", token);
  await connectDB();
  const userId = token.sub;
  let user = await User.findById(userId);
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      isMe: user._Id === userId,
    },
  };
}
