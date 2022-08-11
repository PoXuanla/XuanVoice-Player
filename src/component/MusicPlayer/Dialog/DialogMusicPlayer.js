import { Dialog, Box } from '@mui/material'
import { blueGrey, pink } from '@mui/material/colors'
import DialogPlayList from './dialog-playList'
import DialogPlayer from './dialog-player'
import DialogHeader from './dialog-header'
import { useEffect, useState } from 'react'
import useWindowSize from '../../../hooks/useWindowSize'

const DialogMusicPlayer = (props) => {
  const openDialog = props.openDialog
  const player = props.player
  const [showPlayList, setShowPlayList] = useState(false)
  const [showMusicPlayer, setShowMusicPlayer] = useState(true)
  const [screenWidth] = useWindowSize()

  const closeDialogHandler = () => {
    props.closeDialog()
  }
  const toggleShowPlayListHandler = () => {
    if (screenWidth < 650) return
    setShowPlayList((state) => !state)
  }
  useEffect(() => {
    if (screenWidth < 650) {
      setShowMusicPlayer(false)
      setShowPlayList(true)
      return
    }
    setShowMusicPlayer(true)
  }, [screenWidth])
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
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: 'calc(100vh - 71px)',
          bgcolor: blueGrey[300],
          padding: '15px 10px',
          transition: 'all .5s'
        }}
      >
        {/* 播放列表 */}
        {showPlayList && <DialogPlayList />}

        {/* 音樂播放器 */}
        {showMusicPlayer && <DialogPlayer showPlayList={showPlayList} player={ player} />}
      </Box>
    </Dialog>
  )
}

export default DialogMusicPlayer
