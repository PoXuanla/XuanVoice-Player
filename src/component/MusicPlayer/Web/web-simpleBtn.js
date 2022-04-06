import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { pink } from "@mui/material/colors";

const PlayerSimpleBtn = (props) => {
  const { display } = props.css;
  const isPlay = props.isPlay;
  const togglePlayHandler = () => {
    if (isPlay) props.pauseMusic();
    else props.playMusic();
  };
  return (
    <Box
      sx={{
        display: display || "flex",
        width: 70,
      }}
    >
      <IconButton
        onClick={togglePlayHandler}
        sx={{
          width: 30,
          height: 30,
        }}
      >
        {!isPlay && <PlayCircleIcon fontSize="large" sx={{ color: pink[500] }} />}
        {isPlay && <PauseCircleIcon fontSize="large" sx={{ color: pink[500] }} />}
      </IconButton>
      <IconButton
        onClick={() => {
          props.showUIHandler();
        }}
        sx={{
          height: 30,
          width: 30,
        }}
      >
        <MenuIcon sx={{ color: pink[500] }} />
      </IconButton>
    </Box>
  );
};
export default PlayerSimpleBtn;
