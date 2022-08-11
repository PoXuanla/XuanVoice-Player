import WebPlayer from './Web/WebPlayer'
import DialogMusicPlayer from './Dialog/DialogMusicPlayer'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setSongDuration,
  playSong,
  pauseSong,
  nextSong
} from '../../features/musicplayer/musicplayerSlice'
const MusicPlayer = () => {
  //useState
  const [player] = useState(new Audio())
  const [openDialog, setOpenDialog] = useState(true)

  //redux
  const dispatch = useDispatch()
  const { playMode, playModeIndex, songListData, currentSongIndex } = useSelector(
    (state) => state.musicplayer
  )
  const closeDialogHandler = () => {
    setOpenDialog(false)
  }
  const openDialogHandler = () => {
    setOpenDialog(true)
  }
  //player
  player.ondurationchange = () => {
    dispatch(setSongDuration(player.duration))
  }
  player.onended = () => {
    //playMode = normal, play next song until end of songList
    //playMode = loop, play current song again
    switch (playMode[playModeIndex]) {
      case 'normal':
        if (currentSongIndex === songListData.length - 1) {
          dispatch(pauseSong())
          break
        }
        player.src = songListData[currentSongIndex + 1].mp3
        player.play()
        dispatch(nextSong())
        dispatch(playSong())
        
        player.play()
        break
      case 'loop':
        player.play()
        dispatch(playSong())
        break
      default:
        break
    }
  }
  return (
    <>
      <WebPlayer openDialog={openDialogHandler} player={player}></WebPlayer>
      <DialogMusicPlayer
        openDialog={openDialog}
        closeDialog={closeDialogHandler}
        player={player}
      ></DialogMusicPlayer>
    </>
  )
}
export default MusicPlayer
