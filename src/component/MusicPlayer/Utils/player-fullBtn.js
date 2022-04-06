import Box from "@mui/material/Box";
import { blueGrey, pink } from "@mui/material/colors";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { IconButton } from "@mui/material";
import { Slider } from "@mui/material";
import { bgcolor } from "@mui/system";
import { useState, useRef, useEffect } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import LoopIcon from "@mui/icons-material/Loop";
import data from "../../../data";
import { Loop } from "@mui/icons-material";

const PlayerFullBtn = (props) => {
  const isPlay = props.isPlay;
  const player = props.player;
  const { display,bgcolor } = props.css || {};
  const [showVolumeSlide, setShowVolumeSlide] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [totalSongNum, setTotalSongNum] = useState(null);
  const [playMode, setPlayMode] = useState("normal");

  useEffect(() => {
    setTotalSongNum(data.length);
  }, []);

  const togglePlayHandler = () => {
    if (isPlay) props.pauseMusic();
    else props.playMusic();
  };
  const toggleVolumeSlideHandler = () => {
    setShowVolumeSlide((show) => !show);
  };
  const adjustVolumeHandler = (e, value) => {
    player.volume = value;
    setVolume(value);
  };
  const prevSongHandler = () => {
    player.src = data[currentSongIndex - 1].mp3;
    props.playMusic();
    setCurrentSongIndex((index) => index - 1);
  };

  const nextSongHandler = () => {
    player.src = data[currentSongIndex + 1].mp3;
    props.playMusic();
    setCurrentSongIndex((index) => index + 1);
  };
  const changePlayModeHandler = () => {
    if (playMode === "normal") setPlayMode("loop");
    else setPlayMode("normal");
  };
  return (
    <Box
      sx={{
        display: display || "block",
        width: "100%",
        bgcolor: bgcolor || '',
        padding: "15px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", transition: "all .5s" }}>
        {/* 聲音 */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* 聲音按鈕 */}
          <IconButton size="large" onClick={toggleVolumeSlideHandler}>
            {volume === 0 ? (
              <VolumeOffIcon
                sx={{
                  fontSize: "25px",
                  color: pink[400],
                }}
              />
            ) : (
              <VolumeDownIcon
                sx={{
                  fontSize: "25px",
                  color: pink[400],
                }}
              />
            )}
          </IconButton>
          {/* 聲音調整滑鈕 */}
          <Box
            sx={{
              display: showVolumeSlide ? "block" : "none",
              position: "absolute",
              bottom: "90%",
              left: 15,
              height: 75,
              zIndex: 10,
              bgcolor: blueGrey[100],
              padding: "6px",
              borderRadius: "5px",
              boxShadow: "2px 2px 0px 2px rgba(0,0,0, 0.2)",
            }}
          >
            <Slider
              // id="costInflation"
              // name="costInflation"
              sx={{
                color: pink[300],
                padding: 0,
                width: 3,
                '& input[type="range"]': {
                  WebkitAppearance: "slider-vertical",
                },
                "& .MuiSlider-thumb": {
                  height: 12,
                  width: 12,
                  backgroundColor: "#fff",
                  "&:focus,&:hover,&.Mui-focusVisible": {
                    boxShadow: "0px 0px 0px 7px rgba(233, 30, 99, 0.2)",
                  },
                  "&.Mui-active": {
                    boxShadow: "0px 0px 0px 15px rgba(233, 30, 99, 0.4)",
                  },
                },
              }}
              max={1}
              min={0}
              step={0.05}
              orientation="vertical"
              value={volume}
              aria-label="Temperature"
              onChange={adjustVolumeHandler}
            />
          </Box>
        </Box>
        {/* 前一首歌曲 */}
        <IconButton size="large" onClick={prevSongHandler} disabled={currentSongIndex === 0}>
          <SkipPreviousIcon
            sx={{
              fontSize: "25px",
              color: currentSongIndex === 0 ? blueGrey[700] : pink[400],
            }}
          />
        </IconButton>
        {/* 播放/暫停 */}
        <IconButton size="large" onClick={togglePlayHandler}>
          {!isPlay && (
            <PlayCircleIcon
              sx={{
                fontSize: "30px",
                color: pink[400],
              }}
            />
          )}
          {isPlay && (
            <PauseCircleIcon
              sx={{
                fontSize: "30px",
                color: pink[400],
              }}
            />
          )}
        </IconButton>
        <IconButton
          size="large"
          onClick={nextSongHandler}
          disabled={currentSongIndex === totalSongNum - 1}
        >
          <SkipNextIcon
            fontSize="large"
            sx={{
              color: currentSongIndex === totalSongNum - 1 ? blueGrey[700] : pink[400],
            }}
          />
        </IconButton>
        <IconButton size="large" onClick={changePlayModeHandler}>
          {playMode === "normal" ? (
            <LoopIcon
              fontSize="large"
              sx={{
                color: blueGrey[700],
              }}
            ></LoopIcon>
          ) : (
            <LoopIcon
              fontSize="large"
              sx={{
                color: pink[400],
              }}
            ></LoopIcon>
          )}
        </IconButton>
      </Box>
    </Box>
  );
};
export default PlayerFullBtn;
