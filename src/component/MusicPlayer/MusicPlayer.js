import WebPlayer from "./Web/WebPlayer";
import DialogMusicPlayer from "./Dialog/DialogMusicPlayer";
import { useState } from "react";
const MusicPlayer = () => {
  const [openDialog, setOpenDialog] = useState(true);
  const closeDialogHandler = () => {
    setOpenDialog(false);
  };
  const openDialogHandler = () => {
    setOpenDialog(true)
  }
  return (
    <>
      <WebPlayer openDialog={openDialogHandler}></WebPlayer>
      <DialogMusicPlayer
        openDialog={openDialog}
        closeDialog={closeDialogHandler}
      ></DialogMusicPlayer>
    </>
  );
};
export default MusicPlayer;
