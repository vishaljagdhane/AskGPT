import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Stack,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FunctionsIcon from "@mui/icons-material/Functions";
import SchoolIcon from "@mui/icons-material/School";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";
import BoltIcon from "@mui/icons-material/Bolt";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function AuthLogin() {
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [userRegister,setUserRegister] = useState({
   fname:'',
    lname:'',
    mobile:'',
    email:'',
    chooiseUsername:'',
    password:'',


})

  const goToRegister = () => setIsRegister(true);
  const goToLogin = () => setIsRegister(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputChangeRegister = (e) => {
    setUserRegister({
      ...userRegister,
      [e.target.name]: e.target.value,
    });
  };
  
  const handelLogin = () => {
    console.log("Login data:", loginInput);
  };
  const handelRegister = () => { 
    console.log("Register data:", userRegister);
     }


  function AnimatedAskGpt() {
    const text = "AskGpt".split("");
    const LETTER_SIZE = 20; // letter box size
    const GAP = 0; // small gap

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev === text.length - 1 ? 0 : prev + 1));
      }, 700);

      return () => clearInterval(interval);
    }, [text.length]);

    return (
      <Box
        sx={{
          position: "relative",
          display: "flex",
          gap: `${GAP}px`,
          mb: 3,
        }}
      >
        {/* SINGLE MOVING CIRCLE */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: `${activeIndex * (LETTER_SIZE + GAP)}px`,
            transform: "translateY(-50%)",
            width: LETTER_SIZE,
            height: LETTER_SIZE,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.25)",
            transition: "left 0.5s ease",
          }}
        />

        {/* LETTERS */}
        {text.map((char, index) => (
          <Box
            key={index}
            sx={{
              width: LETTER_SIZE,
              height: LETTER_SIZE,
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: activeIndex === index ? 36 : 30,
              fontWeight: 700,
              color: "#fff",
              transition: "all 0.35s ease",
              transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
            }}
          >
            {char}
          </Box>
        ))}
      </Box>
    );
  }


  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0b5ed7, #084298)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={18}
        sx={{
          width: 980,
          height: 460,
          borderRadius: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* LEFT SECTION */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            width: "55%",
            background: "linear-gradient(180deg, #1e7bff 0%, #0d6efd 100%)",
            color: "#fff",
            p: 6,
            borderRight: "1px solid rgba(255,255,255,0.3)",
            borderBottomRightRadius: 1000,
          }}
        >
          {/* LEFT DECORATIVE CIRCLES */}
          <Box
            sx={{
              position: "absolute",
              bottom: 60,
              left: 90,
              width: 160,
              height: 160,
              bgcolor: "rgba(255,255,255,0.18)",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 120,
              left: 220,
              width: 90,
              height: 90,
              bgcolor: "rgba(255,255,255,0.18)",
              borderRadius: "50%",
            }}
          />

          {/* BRANDING */}
          <Typography variant="h3" fontWeight="bold">
            AskGpt
          </Typography>

          <Typography variant="h6" mt={2}>
            Your AI Assistant
          </Typography>

          {/* FEATURES LIST (REPLACED LOREM IPSUM) */}
          <Stack spacing={1.4} mt={4}>
            <Feature icon={<SearchIcon />} text="Searching" />
            <Feature
              icon={<FunctionsIcon />}
              text="Mathematical calculations"
            />
            <Feature icon={<SchoolIcon />} text="Learning" />
            <Feature icon={<AccountTreeIcon />} text="Create diagrams" />
            <Feature icon={<DescriptionIcon />} text="Resume builder" />
            <Feature icon={<BoltIcon />} text="Quick & accurate answers" />
          </Stack>
        </Box>

        {/* RIGHT LOGIN FORM */}
        {/* RIGHT LOGIN / REGISTER FORM */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "45%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box width={360}>
            {!isRegister ? (
              /* ================= LOGIN FORM ================= */
              <>
                <Typography variant="h5" fontWeight="bold">
                  Sign in
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={3}>
                  Login to continue using AskGpt
                </Typography>

                <TextField
                  fullWidth
                  placeholder="User name"
                  name="username"
                  onChange={handleInputChange}
                  sx={{ mb: 2 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleInputChange}
                  sx={{ mb: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="Remember me"
                  />
                  <Typography variant="body2" color="primary">
                    Forgot Password?
                  </Typography>
                </Box>

                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{ mb: 2, height: 48 }}
                    onClick={handelLogin}
                >
                  SIGN IN
                </Button>

                <Typography variant="caption" align="center" display="block">
                  Don’t have an account?{" "}
                  <Box
                    component="span"
                    color="primary"
                    fontWeight="bold"
                    sx={{ cursor: "pointer" }}
                    onClick={goToRegister}
                  >
                    Sign up
                  </Box>
                </Typography>
              </>
            ) : (
              /* ================= REGISTER FORM ================= */
              <>
                <Typography variant="h5" fontWeight="bold">
                  Sign up
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={3}>
                  Create your AskGpt account
                </Typography>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="First name"
                    name="fname"
                    onChange={handleInputChangeRegister}
                    sx={{ mb: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Last name"
                    name="lname"
                    onChange={handleInputChangeRegister}
                    sx={{ mb: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Mobile Number"
                    sx={{ mb: 2 }}
                    name="mobile"
                    onChange={handleInputChangeRegister}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneAndroidIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChangeRegister}
                    sx={{ mb: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Choose Username"
                    name="chooiseUsername"
                    onChange={handleInputChangeRegister}
                    sx={{ mb: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Confirm password"
                    type="password"
                    name="password"
                    onChange={handleInputChangeRegister}
                    sx={{ mb: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{ mb: 2, height: 48 }}
                  onClick={handelRegister}
                >
                  CREATE ACCOUNT
                </Button>

                <Typography variant="caption" align="center" display="block">
                  Already have an account?{" "}
                  <Box
                    component="span"
                    color="primary"
                    fontWeight="bold"
                    sx={{ cursor: "pointer" }}
                    onClick={goToLogin}
                  >
                    Sign in
                  </Box>
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

/* Reusable Feature Row */
function Feature({ icon, text }) {
  return (
    <Box display="flex" alignItems="center" gap={1.5}>
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
}
