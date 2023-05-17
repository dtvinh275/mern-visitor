import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  Select,
  MenuItem,
  Button,
  Container,
} from "@pankod/refine-mui";
import { FormProps } from "interfaces/post";
import VisitorButton from "./VisitorButton";
import { useNavigate } from "@pankod/refine-react-router-v6";

import logo from "../../assets/logo.png";

const VisitorForm = ({
  type,
  register,
  handleSubmit,
  formLoading,
  onFinishHandler,
}: FormProps) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "20vh",
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
                flexDirection: "column",
                width: "300px",
              }}
              alt="Kielo Logo"
            />
          </div>
        </Box>
      </Container>

      <Box
        mt={0}
        marginLeft="auto"
        marginRight="auto"
        minWidth="300px"
        maxWidth="500px"
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        boxShadow={2}
      >
        <form
          style={{
            marginTop: "-2px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <TextField
              fullWidth
              required
              label="Full Name"
              placeholder="First Name & Last Name"
              inputProps={{ maxLength: 50 }}
              {...register("fullName", { required: true })}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              label="Phone Number"
              placeholder="040 123 4567"
              inputProps={{ maxLength: 12 }}
              {...register("phoneNumber", { required: true })}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  //fontWeight: 500,
                  //margin: "10px 0",
                  fontSize: 16,
                  //color: "#11142d",
                }}
              >
                City
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue=""
                {...register("city", {
                  required: true,
                })}
              >
                <MenuItem value="">Select City</MenuItem>
                <MenuItem value="jyvaskyla">Jyväskylä</MenuItem>
                <MenuItem value="lappeeranta">Lappeeranta</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  //fontWeight: 500,
                  //margin: "10px 0",
                  fontSize: 16,
                  //color: "#11142d",
                }}
              >
                Property
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue=""
                {...register("property", {
                  required: true,
                })}
              >
                <MenuItem value="">Select Property</MenuItem>
                <MenuItem value="piippukatu">Piippukatu 11</MenuItem>
                <MenuItem value="lutakonaukio">Lutakonaukio 7</MenuItem>
                <MenuItem value="mattilanniemi">Mattilanniemi 6-8</MenuItem>
                <MenuItem value="ohjelmakaari">Ohjelmakaari 10</MenuItem>
                <MenuItem value="ylistonmaentie26">Ylistönmäentie 26</MenuItem>
                <MenuItem value="ylistonmeentie31">Ylistönmäentie 31</MenuItem>
                <MenuItem value="survontie">Survontie 9</MenuItem>
                <MenuItem value="laserkatu">Laserkatu 6</MenuItem>
              </Select>
              {/* city1: ['Laserkatu 6'],
                city2: [
                  'Piippukatu 11',
                  'Lutakonaukio 7',
                  'Mattilanniemi 6-8',
                  'Ohjelmakaari 10',
                  'Ylistönmäentie 26',
                  'Ylistönmäentie 31',
                  'Survontie 9',
                ], */}
            </FormControl>
          </Stack>

          <FormControl>
            <TextField
              fullWidth
              required
              label="Company Name"
              placeholder="ABC Company"
              inputProps={{ maxLength: 100 }}
              {...register("company", { required: true })}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              label="Plate Number"
              placeholder="ABC-123"
              inputProps={{ maxLength: 7 }}
              {...register("plateNumber", { required: true })}
            />
          </FormControl>

          <Stack
            direction="row"
            gap={4}
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
          >
            <VisitorButton
              type="button"
              title={"Previous"}
              backgroundColor="#475be8"
              color="#fcfcfc"
              handleClick={() => navigate(-1)}
            />
            <VisitorButton
              type="submit"
              title={formLoading ? "Submitting..." : "Submit"}
              backgroundColor="#475be8"
              color="#fcfcfc"
            />
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default VisitorForm;
