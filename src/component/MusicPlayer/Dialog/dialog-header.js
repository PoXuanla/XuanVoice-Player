import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { ToggleButton } from "@mui/material";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
const DialogHeader = (props) => {
  const showPlayList = props.showPlayList;
  return (
    <Box
      sx={{
        width: "100%",
        padding: "15px",
        bgcolor: blueGrey[900],
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Typography noWrap variant={"h5"} color={blueGrey[100]}>
            XuanVoice
          </Typography>
        </Box>
        {/* 列表、音樂播放器 */}
        <Box sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <ToggleButton
            onClick={() => props.toggleShowPlayList()}
            value="check"
            selected={showPlayList}
            sx={{
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }}
          >
            <Typography noWrap variant={"body2"} color={blueGrey[100]}>
              播放列表
            </Typography>
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={true}
            sx={{
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
          >
            <Typography noWrap variant={"body2"} color={blueGrey[100]}>
              現正播放
            </Typography>
          </ToggleButton>
        </Box>
        {/* 關閉Dialog */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            flex: 1,
          }}
        >
          <IconButton onClick={() => props.closeDialog()}>
            <ClearIcon
              fontSize="large"
              sx={{
                color: blueGrey[100],
              }}
            ></ClearIcon>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
export default DialogHeader;
