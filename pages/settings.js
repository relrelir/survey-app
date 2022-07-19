export default function SettingsPage() {
  return (
    <div>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Kanit",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "15px",
          lineHeight: "33px",

          color: "#000000",
        }}
      >
        Please logIn to your account:
      </Typography>

      <TextField
        className="input"
        variant="none"
        name="phone"
        type="phone"
        placeholder="phone"
        onChange={handleChange}
      />
      <TextField
        className="input"
        variant="none"
        name="birthday"
        type="date"
        onChange={handleChange}
      />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            value={gender}
            label="Gender"
            onChange={handleGenderChange}
            sx={{
              fontFamily: "Kanit",
              fontStyle: "normal",
              borderRadius: "34px",
            }}
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
