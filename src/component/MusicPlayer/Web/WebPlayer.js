import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import MusicInfo from '../Utils/player-musicInfo'
import PlayerProgressBar from '../Utils/player-progressBar'
import MusicImg from '../Utils/player-musicImg'
import PlayerTopBtn from './web-topBtn'
import PlayerSimpleBtn from './web-simpleBtn'
import PlayerFullBtn from '../Utils/player-fullBtn'
import data from '../../../data'
import { blueGrey } from '@mui/material/colors'
import {
  replaceSongListData,
  pauseSong,
  playSong
} from '../../../features/musicplayer/musicplayerSlice'
import { useDispatch, useSelector } from 'react-redux'
const WebPlayer = (props) => {
  const player = props.player

  const [showUI, setShowUI] = useState(false) //UI是否展開
  const dispatch = useDispatch()
  const { songListData } = useSelector((state) => state.musicplayer)

  useEffect(() => {
    dispatch(replaceSongListData(data))
  }, [])
  
  useEffect(() => {
    if (songListData.length === 0) return
    player.src = songListData[0].mp3
  }, [songListData])

  const showUIHandler = () => {
    setShowUI((show) => !show)
  }
  const openDialogHandler = () => {
    props.openDialog()
  }
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 15,
        right: '1rem',
        display: 'block',
        padding: showUI ? 0 : '12px',
        paddingTop: showUI ? 0 : '16px',
        bgcolor: 'background.default',
        border: 1,
        borderTop: showUI ? 1 : 0,
        borderColor: 'divider',
        width: 330,
        borderRadius: 1,
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          display: showUI ? 'block' : 'flex',
          position: showUI ? 'relative' : '',
          alignItems: showUI ? '' : 'center',
          overflow: 'hidden',
          boxShadow: showUI ? 'inset 0px -65px 78px 49px #000000;' : ''
        }}
      >
        {/* 音樂時間軸 */}
        <PlayerProgressBar
          css={{
            position: 'absolute',
            top: !showUI && 0,
            bottom: showUI && 0,
            left: 0,
            padding: showUI && '15px',
            color: blueGrey[100]
          }}
          showTime={showUI}
          player={player}
        />
        {/* 歌曲圖片 */}
        <MusicImg
          css={{
            width: showUI ? '100%' : 46,
            height: showUI ? 388 : 46,
            marginRight: showUI ? 0 : '.5rem',
            filter: showUI ? 'blur(5px)' : '',
            opacity: showUI ? '.7' : ''
          }}
        />
        {/* 歌名、作者、喜歡、加入歌單 */}
        <MusicInfo
          css={{
            display: showUI ? 'flex' : 'block',
            position: showUI ? 'absolute' : 'static',
            bottom: showUI ? 50 : null,
            padding: showUI ? '15px' : 0,
            width: showUI ? '100%' : 'calc(100% - 46px - 5px - 70px - 5px)',
            marginRight: showUI ? 0 : '5px',
            color: showUI ? blueGrey[100] : '#000'
          }}
          showBtn={showUI}
        />
        {/* 沒 show 時的播放、show 按鈕 */}
        <PlayerSimpleBtn
          css={{
            display: !showUI ? 'flex' : 'none'
          }}
          player={player}
          showUIHandler={showUIHandler}
        />
        {/* show 時最上層的按鈕 */}
        <PlayerTopBtn
          css={{
            display: showUI ? 'block' : 'none',
            position: 'absolute',
            top: 0,
            left: 0
          }}
          showUIHandler={showUIHandler}
          openDialog={openDialogHandler}
        />
      </Box>
      {/* show 時最底下的音樂控制按鈕*/}
      <PlayerFullBtn
        css={{
          display: !showUI && 'none',
          bgcolor: blueGrey[900]
        }}
        player={player}
      />
    </Box>
  )
}
export default WebPlayer
