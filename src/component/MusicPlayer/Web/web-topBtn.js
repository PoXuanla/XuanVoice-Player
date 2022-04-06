import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { blueGrey } from "@mui/material/colors";

const PlayerTopBtn = (props) => {
  const { display, position, top, left } = props.css || {};
  return (
    <Box
      sx={{
        display: display || "block",
        width: "100%",
        position: position || "",
        top: top !== undefined ? top : null,
        left: left !== undefined ? left : null,
        padding: "15px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          onClick={() => {
            props.openDialog();
          }}
          sx={{
            height: 30,
            width: 30,
          }}
        >
          <FitScreenIcon fontSize="large" sx={{ color: blueGrey[100] }}></FitScreenIcon>
        </IconButton>
        <IconButton
          onClick={() => props.showUIHandler()}
          sx={{
            height: 30,
            width: 30,
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" sx={{ color: blueGrey[100] }} />
        </IconButton>
      </Box>
    </Box>
  );
};
export default PlayerTopBtn;
