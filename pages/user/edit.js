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
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "85vh",
          background: "rgba(255, 255, 255, 0.85)",
          boxShadow: "0px 0px 75px rgba(0, 0, 0, 0.06)",
          borderRadius: "25px",
        }}
        container
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "85vh",
          }}
          item="true"
          sm={12}
          md={6}
        >
          <Avatar
            alt="Remy Sharp"
            sx={{
              width: "220px",
              height: "220px",
              border: "6px solid #1374F9",
              borderRadius: "206px",
            }}
            src={user?.image}
          />
          <Button
            sx={{
              position: "absolute",
              width: "153px",
              height: "41px",
              background: "#1374F9",
              borderRadius: "40px",
            }}
            variant="contained"
            size="large"
            color="primary"
          >
            <Typography
              sx={{
                fontFamily: "Kanit",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "30px",
                lineHeight: "45px",
                color: "#FFFFFF",
                textTransform: "none",
              }}
            >
              Change
            </Typography>
          </Button>
          <ChooseGender
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            gender={gender}
            setGender={setGender}
          />
        </Grid>

        <Grid item="true" md={6} sm={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "85%",
              justifyContent: "space-evenly",
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
              sx={{
                boxSizing: "border-box",
                width: "456px",
                height: "72px",
                background: "#FFFFFF",
                border: "2px solid #1374F9",
                borderRadius: "40px",
              }}
            />
            <Input
              className="input"
              variant="filled"
              name="email"
              type="email"
              placeholder="email"
              onChange={handleChangeEmail}
              sx={{
                boxSizing: "border-box",
                width: "456px",
                height: "72px",
                background: "#FFFFFF",
                border: "2px solid #1374F9",
                borderRadius: "40px",
              }}
            />
            <Input
              className="input"
              variant="filled"
              name="phone"
              type="tel"
              placeholder="phone"
              onChange={handleChangePhone}
              sx={{
                boxSizing: "border-box",
                width: "456px",
                height: "72px",
                background: "#FFFFFF",
                border: "2px solid #1374F9",
                borderRadius: "40px",
              }}
            />
            <FormControl>
              <FormLabel
                sx={{
                  fontFamily: "Kanit",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "30px",
                  lineHeight: "45px",
                  color: "#BDBCBC",
                }}
                htmlFor="Birthday"
              >
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
                sx={{
                  borderTop: "2px solid #1374F9",
                  borderBottom: "2px solid #1374F9",
                  borderRadius: "40px",
                  boxSizing: "border-box",
                  width: "456px",
                  height: "130px",
                  background: "#FFFFFF",
                }}
                // InputLabelProps={{
                //   shrink: true,
                // }}
              />
            </FormControl>
          </Box>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "313px",
              height: "69px",
              background: "#1374F9",
              borderRadius: "40px",
            }}
            variant="contained"
            size="large"
            color="primary"
            id="submit"
            name="submit"
            type="submit"
          >
            <Typography
              sx={{
                fontFamily: "Kanit",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "35px",
                lineHeight: "52px",
                textTransform: "none",
              }}
            >
              Save Changes
            </Typography>
          </Button>
        </Box>
      </Grid>
    </form>
  );
}
