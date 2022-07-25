import {
  Avatar,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import User from "../../models/user";
import { useEffect, useState } from "react";
import { getToken } from "next-auth/jwt";

import { connectDB } from "../../middlware/mongodb";
import ChooseMonth from "../../components/chooseDate/ChooseMonth";
import ChooseDay from "../../components/chooseDate/ChooseDay";
import ChooseYear from "../../components/chooseDate/ChooseYear";
import ChooseGender from "../../components/chooseGender";

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
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();

  const [year, setYear] = useState("");
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };
  const [month, setMonth] = useState("");
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };
  const [day, setDay] = useState("");
  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };

  const birthday = `${year}/${month}/${day}`;

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  //   useEffect(() => {
  //     fetch("/api/user").then((response) => response.json());
  //     //   .then((users) => users.find({_id:}));
  //   }, []);
  //   console.log(userId);
  const updateUser = async () =>
    fetch(`/api/userEdit`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, gender, phone, birthday }),
    }).catch((res) => console.error(res.error));
  return (
    <Paper
      sx={{
        position: "absolute",
        left: "308px",
        top: "194px",
        width: "1087px",
        height: "811px",
        background: "rgba(255, 255, 255, 0.85)",
        boxShadow: "0px 0px 75px rgba(0, 0, 0, 0.06)",
        borderRadius: "25px",
      }}
    >
      <form onSubmit={(e) => (e.preventDefault(), updateUser())}>
        {/* <Button variant="text" aria-label="Remove"></Button> */}
        <Avatar
          alt="Remy Sharp"
          sx={{
            position: "absolute",
            width: "220px",
            height: "220px",
            // left: "446px",
            // top: "349px",
            mt: "155px",
            ml: "138px",
            mr: "729px",
            mb: "436px",

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
            mt: "356px",
            ml: "174px",
            mr: "760px",
            mb: "414px",
            // left: "482px",
            // top: "550px",

            // background: "#1374F9",
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
              /* identical to box height */

              color: "#FFFFFF",
              textTransform: "none",
            }}
          >
            Change
          </Typography>
        </Button>

        <ChooseYear setYear={setYear} year={year} />
        <ChooseMonth setMonth={setMonth} month={month} />
        <ChooseDay
          sx={{
            boxSizing: "border-box",

            position: "absolute",
            width: "120px",
            height: "57px",

            background: "#FFFFFF",
            border: "1px solid #1374F9",
            borderRadius: "0px 20px 20px 0px",
          }}
          setDay={setDay}
          day={day}
        />
        <ChooseGender gender={gender} setGender={setGender} />

        <Button
          sx={{
            position: "absolute",
            width: "313px",
            height: "69px",
            mt: "642px",
            // ml: "408px",
            mr: "366px",
            mb: "100px",
            // left: "482px",
            // top: "550px",

            // background: "#1374F9",
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
              /* identical to box height */

              color: "#FFFFFF",
              textTransform: "none",
            }}
          >
            Save Changes
          </Typography>
        </Button>

        <Input
          // className="input"
          variant="filled"
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChangeName}
          sx={{
            boxSizing: "border-box",

            position: "absolute",
            width: "456px",
            height: "72px",
            mt: "149px",
            // ml: "486px",
            mr: "145px",
            mb: "590px",

            background: "#FFFFFF",
            border: "2px solid #1374F9",
            borderRadius: "40px",
          }}
        />
        <Input
          // className="input"
          variant="filled"
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChangeEmail}
          sx={{
            boxSizing: "border-box",

            position: "absolute",
            width: "456px",
            height: "72px",
            mt: "247px",
            // ml: "486px",
            mr: "145px",
            mb: "492px",

            background: "#FFFFFF",
            border: "2px solid #1374F9",
            borderRadius: "40px",
          }}
        />
        <Input
          // className="input"
          variant="filled"
          name="phone"
          type="tel"
          placeholder="phone"
          onChange={handleChangePhone}
          sx={{
            boxSizing: "border-box",

            position: "absolute",
            width: "456px",
            height: "72px",
            mt: "345px",
            // ml: "486px",
            mr: "145px",
            mb: "394px",

            background: "#FFFFFF",
            border: "2px solid #1374F9",
            borderRadius: "40px",
          }}
        />
      </form>
    </Paper>
  );
}
