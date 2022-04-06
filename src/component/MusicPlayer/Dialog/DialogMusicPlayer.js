import { Dialog, Box } from "@mui/material";
import { blueGrey, pink } from "@mui/material/colors";
import DialogPlayList from "./dialog-playList";
import DialogPlayer from "./dialog-player";
import DialogHeader from "./dialog-header";
import { useState } from "react";

const DialogMusicPlayer = (props) => {
  const [showPlayList, setShowPlayList] = useState(false);
  const openDialog = props.openDialog;
  const closeDialogHandler = () => {
    props.closeDialog();
  };
  const toggleShowPlayListHandler = () => {
    setShowPlayList((state) => !state);
  };
 
  return (
    <Dialog fullScreen open={openDialog}>
      {/* header */}
      <DialogHeader
        closeDialog={closeDialogHandler}
        showPlayList={showPlayList}
        toggleShowPlayList={toggleShowPlayListHandler}
      />
      {/* content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "calc(100vh - 71px)",
          bgcolor: blueGrey[300],
          padding: "15px",
          transition:'all .5s'
        }}
      >
        {/* 播放列表 */}
        { showPlayList && <DialogPlayList/>}
        
        {/* 音樂播放器 */}
        <DialogPlayer/>
      </Box>
    </Dialog>
  );
};

export default DialogMusicPlayer;
