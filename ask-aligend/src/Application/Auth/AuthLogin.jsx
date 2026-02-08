import React, { useState } from "react";
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

export default function AuthLogin() {
    const []=useState({
        username:'',
        password:'',
    })
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
            background:
              "linear-gradient(180deg, #1e7bff 0%, #0d6efd 100%)",
            color: "#fff",
            p: 6,
            borderRight: "1px solid rgba(255,255,255,0.3)",
            borderBottomRightRadius:1000,
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
            <Feature icon={<FunctionsIcon />} text="Mathematical calculations" />
            <Feature icon={<SchoolIcon />} text="Learning" />
            <Feature icon={<AccountTreeIcon />} text="Create diagrams" />
            <Feature icon={<DescriptionIcon />} text="Resume builder" />
            <Feature icon={<BoltIcon />} text="Quick & accurate answers" />
          </Stack>
        </Box>

        {/* RIGHT LOGIN FORM */}
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
            <Typography variant="h5" fontWeight="bold">
              Sign in
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
              Login to continue using AskGpt
            </Typography>

            <TextField
              fullWidth
              placeholder="User name"
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
              type="password"
              sx={{ mb: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <Typography
                    variant="caption"
                    color="primary"
                    sx={{ cursor: "pointer", fontWeight: 600 }}
                  >
                    SHOW
                  </Typography>
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
              <Typography
                variant="body2"
                color="primary"
                sx={{ cursor: "pointer" }}
              >
                Forgot Password?
              </Typography>
            </Box>

            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{
                mb: 2,
                borderRadius: 2,
                height: 48,
                fontWeight: 600,
              }}
            >
              SIGN IN
            </Button>

            <Button
              fullWidth
              size="large"
              variant="outlined"
              sx={{
                borderRadius: 2,
                height: 48,
                fontWeight: 600,
              }}
            >
              SIGN IN WITH OTHER
            </Button>

            <Typography
              variant="caption"
              display="block"
              align="center"
              mt={2}
            >
              Don’t have an account?{" "}
              <Box component="span" color="primary" fontWeight="bold">
                Sign up
              </Box>
            </Typography>
          </Box>
              <Box
            sx={{
              position: "absolute",
              bottom: -2,
              right: -10,
              width: 60,
              height: 60,
                     background:
              "linear-gradient(180deg, #1e7bff 0%, #0d6efd 100%)",
              borderRadius: "50%",
            }}
          />
             <Box
            sx={{
              position: "absolute",
              bottom: 2,
              right: -2,
              width: 40,
              height: 40,
              bgcolor: "rgba(255,255,255,0.18)",
              borderRadius: "50%",
            }}
          />
              <Box
            sx={{
              position: "absolute",
            top:-10,
              right: -10,
              width: 70,
              height: 70,
                     background:
              "linear-gradient(180deg, #1e7bff 0%, #0d6efd 100%)",
              borderRadius: "50%",
            }}
          />
             <Box
            sx={{
              position: "absolute",
              top: -10,
              right: -2,
              width: 50,
              height: 50,
              bgcolor: "rgba(255,255,255,0.18)",
              borderRadius: "50%",
            }}
          />

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
