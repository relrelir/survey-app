import {
  Avatar,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Box,
  Select,
  TextField,
  Typography,
  FormLabel,
} from "@mui/material";
// import { Box } from "@mui/system";
import User from "../../models/user";
import { useEffect, useState } from "react";
import { getToken } from "next-auth/jwt";

import { connectDB } from "../../middlware/mongodb";

import ChooseGender from "../../components/ChooseGender";
import {
  AvatarStyle,
  ButtonRoundStyle,
  FormLabelStyle,
  InputStyle,
  TypoUserEditStyle,
} from "../../styles/global.style";

export async function getServerSideProps({ params, req, res }) {
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
  const updateUser = async (e) => {
    fetch(`/api/userEdit`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, birthday, gender, phone }),
    }).catch((res) => console.error(res.error));
  };

  return (
    <form
      action="/api/userEdit"
      method="PATCH"
      onSubmit={(e) => (e.preventDefault(), updateUser())}
    >
      <Box>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
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
              <ChooseGender gender={gender} setGender={setGender} />
            </Box>
          </Grid>

          <Grid item md={6} sm={12}>
            <Box>
              <Input
                className="input"
                variant="filled"
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChangeName}
                defaultValue={name}
                sx={InputStyle("72px", "456px")}
              />
              <Input
                className="input"
                variant="filled"
                name="email"
                type="email"
                placeholder="email"
                onChange={handleChangeEmail}
                sx={InputStyle("72px", "456px")}
              />
              <Input
                className="input"
                variant="filled"
                name="phone"
                type="tel"
                placeholder="phone"
                onChange={handleChangePhone}
                sx={InputStyle("72px", "456px")}
              />
              <FormControl>
                <FormLabel sx={FormLabelStyle()} htmlFor="Birthday">
                  Birthday
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
                  sx={InputStyle(
                    "130px",
                    "456px",
                    "2px solid #1374F9",
                    "2px solid #1374F9"
                  )}
                />
              </FormControl>
            </Box>
          </Grid>
          <Box>
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
        </Grid>
      </Box>
    </form>
  );
}
