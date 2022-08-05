import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Typography,
} from "@mui/material";
// import { Box } from "@mui/system";
import { getToken } from "next-auth/jwt";
import { useState } from "react";
import User from "../../models/user";

import { connectDB } from "../../middlware/mongodb";

import ChooseGender from "../../components/ChooseGender";
import {
  AvatarStyle,
  ButtonRoundStyle,
  FormLabelStyle,
  InputDateStyle,
  InputStyle,
  TypoUserEditStyle,
} from "../../styles/global.style";

export async function getServerSideProps({ req }) {
  const token = await getToken({ req });

  if (!token) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=${req.url}`,
        permanent: false,
      },
    };
  }
  console.log("token", token);
  await connectDB();
  const userId = token.sub;
  let user = await User.findById(userId);
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default function EditUserPage({ user }) {
  // debugger;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone ? user.phone : null);
  const [gender, setGender] = useState(user.gender ? user.gender : null);

  const [birthday, setBirthday] = useState(
    user.birthday ? user.birthday : null
  );
  const today = new Date().toLocaleDateString();
  let startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 100);
  console.log("today", today);
  console.log("startDate", startDate);
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  //   useEffect(() => {
  //     fetch("/api/user").then((response) => response.json());
  //     //   .then((users) => users.find({_id:}));
  //   }, []);
  //   console.log(userId);
  const updateUser = async () => {
    fetch(`/api/userEdit`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, birthday, gender, phone }),
    }).catch((res) => console.error(res.error));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          mt: "3%",
          display: "flex",
          flexDirection: "column",
          width: "1087px",
          height: "628px",
          background: "rgba(255, 255, 255, 0.85)",
          boxShadow: "0px 0px 75px rgba(0, 0, 0, 0.06)",
          borderRadius: "25px",
        }}
      >
        <form
          action="/api/userEdit"
          method="PATCH"
          onSubmit={(e) => (e.preventDefault(), updateUser())}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "5%",
              mt: "23px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                // gap: "5%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // mb: "33px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  sx={AvatarStyle("220px", "220px")}
                  src={user?.image}
                />

                <Button
                  sx={ButtonRoundStyle("153px", "41px")}
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  <Typography sx={TypoUserEditStyle()}>Change</Typography>
                </Button>
              </Box>
              <Box>
                <ChooseGender gender={gender} setGender={setGender} />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Input
                className="input"
                variant="filled"
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChangeName}
                defaultValue={name}
                sx={InputStyle("456px", "72px")}
              />
              <Input
                className="input"
                variant="filled"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChangeEmail}
                sx={InputStyle("456px", "72px")}
              />
              <Input
                className="input"
                variant="filled"
                name="phone"
                type="tel"
                placeholder="Phone"
                onChange={handleChangePhone}
                sx={InputStyle("456px", "72px")}
              />
              <FormControl>
                <FormLabel sx={FormLabelStyle()} htmlFor="Birthday">
                  Birth-Day:
                </FormLabel>
                <Input
                  variant="filled"
                  className="input"
                  placeholder="Birthday"
                  name="Birthday"
                  id="date"
                  label="Birthday"
                  type="date"
                  value={birthday}
                  min={startDate}
                  max={today}
                  onChange={(e) => setBirthday(e.target.value)}
                  sx={InputDateStyle(
                    "456px",
                    "100px",
                    "2px solid #1374F9",
                    "2px solid #1374F9"
                  )}
                />
              </FormControl>
            </Box>
          </Box>
          <Box sx={{ ml: "25%" }}>
            <Button
              sx={ButtonRoundStyle("313px", "69px")}
              variant="contained"
              size="large"
              color="primary"
              id="submit"
              name="submit"
              type="submit"
            >
              <Typography sx={TypoUserEditStyle()}>Save Changes</Typography>
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
