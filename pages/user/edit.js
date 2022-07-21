import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
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
    <Box>
      <form onSubmit={(e) => (e.preventDefault(), updateUser())}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="text" aria-label="Remove">
            <Box sx={{ width: "14px", height: "14px" }}>
              <Box>
                <br />
              </Box>
            </Box>
          </Button>
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 90, height: 90, fontSize: 22 }}
            src={user?.image}
          />
        </Box>
        <Button variant="contained">Upload New</Button>
        <Button
          id="library-profile-picture-btn"
          data-event-category="ProfileSettings"
          data-event-label="library-profile-picture-btn"
        >
          Choose from library
        </Button>
        <Box sx={{ minWidth: 120 }}>
          <ChooseYear setYear={setYear} year={year} />
          <ChooseMonth setMonth={setMonth} month={month} />
          <ChooseDay setDay={setDay} day={day} />
          <ChooseGender gender={gender} setGender={setGender} />

          <div>
            <button id="submit" name="submit" type="submit">
              <span>Save Changes</span>
            </button>
          </div>
        </Box>
        <Box>
          <TextField
            className="input"
            variant="filled"
            name="name"
            type="name"
            placeholder="name"
            onChange={handleChangeName}
          />
          <TextField
            className="input"
            variant="filled"
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChangeEmail}
          />
          <TextField
            className="input"
            variant="filled"
            name="phone"
            type="phone"
            placeholder="phone"
            onChange={handleChangePhone}
          />
        </Box>
      </form>
    </Box>
  );
}
