import { Box } from "@mui/material";
import { pink } from "@mui/material/colors";
import MusicImg from "../Utils/player-musicImg";
import MusicInfo from "../Utils/player-musicInfo";
import PlayerProgressBar from "../Utils/player-progressBar";
import PlayerFullBtn from "../Utils/player-fullBtn";

const DialogPlayer = () => {
  return (
    <Box
      sx={{
        bgcolor: pink[300],
        width: "50%",
        // paddingRight: "50px",
        // paddingLeft: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "65%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "25px",
          }}
        >
          <MusicImg
            css={{
              width: 200,
              height: 200,
            }}
          ></MusicImg>
        </Box>

        <MusicInfo
          showBtn="true"
          css={{
            display: "flex",
          }}
        ></MusicInfo>
        <PlayerProgressBar showTime="true"></PlayerProgressBar>
        <PlayerFullBtn></PlayerFullBtn>
      </Box>
    </Box>
  );
};
export default DialogPlayer;
