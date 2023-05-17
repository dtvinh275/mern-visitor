import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import { Container, Box } from "@pankod/refine-mui";
import { Add } from "@mui/icons-material";
import { useNavigate } from "@pankod/refine-react-router-v6";
import VisitorButton from "components/common/VisitorButton";

import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Avatar,
  FormControl,
  IconButton,
  MenuItem,
  Select,
} from "@pankod/refine-mui";

import logo from "../assets/logo.png";

import i18n from "i18n";
import {
  useGetIdentity,
  useGetLocale,
  useSetLocale,
} from "@pankod/refine-core";

const Home = () => {
  const navigate = useNavigate();
  const changeLanguage = useSetLocale();
  const locale = useGetLocale();
  const currentLocale = locale();

  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "#FCFCFC",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={logo}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "300px",
              }}
              alt="Kielo Logo"
            />
          </div>

          <Typography
            fontSize={16}
            fontWeight={700}
            color="#11142d"
            sx={{ textShadow: "-moz-initial" }}
          >
            Visitor parking
          </Typography>
          <Box mt={4}>
            <VisitorButton
              title="Get started"
              handleClick={() => navigate("/visitors/create")}
              backgroundColor="#475be8"
              color="#fcfcfc"
              icon={<Add />}
            />
          </Box>
          {/* <Box mt={3}>
            <VisitorButton
              title="Check times"
              handleClick={() => navigate(-1)}
              backgroundColor="#475be8"
              color="#fcfcfc"
              icon={<Add />}
            />
          </Box> */}
          <Box mt={4}>
            <FormControl sx={{ minWidth: 64 }}>
              <Select
                disableUnderline
                defaultValue={currentLocale}
                inputProps={{ "aria-label": "Without label" }}
                variant="standard"
                sx={{
                  color: "inherit",
                  "& .MuiSvgIcon-root": {
                    color: "inherit",
                  },
                  "& .MuiStack-root > .MuiTypography-root": {
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  },
                }}
              >
                {[...(i18n.languages ?? [])].sort().map((lang: string) => (
                  // @ts-ignore
                  <MenuItem
                    selected={currentLocale === lang}
                    key={lang}
                    defaultValue={lang}
                    onClick={() => {
                      changeLanguage(lang);
                    }}
                    value={lang}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Avatar
                        sx={{
                          width: "24px",
                          height: "24px",
                          marginRight: "5px",
                        }}
                        src={`/images/flags/${lang}.svg`}
                      />
                      <Typography>
                        {lang === "en" ? "English" : "Finnish"}
                      </Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
