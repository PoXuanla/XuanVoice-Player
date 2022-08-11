import { Box } from '@mui/material'
import { pink } from '@mui/material/colors'
import MusicImg from '../Utils/player-musicImg'
import MusicInfo from '../Utils/player-musicInfo'
import PlayerProgressBar from '../Utils/player-progressBar'
import PlayerFullBtn from '../Utils/player-fullBtn'
import useWindowSize from '../../../hooks/useWindowSize'

const DialogPlayer = (props) => {
  const showPlayList = props.showPlayList
  const player = props.player
  const [screenWidth] = useWindowSize()
  return (
    <Box
      sx={{
        bgcolor: pink[800],
        flex: 1,
        boxShadow: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 1
      }}
    >
      <Box
        sx={{
          width: !showPlayList ? '400px' : '65%'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '25px'
          }}
        >
          <MusicImg
            css={{
              width: 200,
              height: 200
            }}
          ></MusicImg>
        </Box>

        <MusicInfo
          showBtn='true'
          css={{
            display: 'flex'
          }}
        ></MusicInfo>
        <PlayerProgressBar showTime='true' player={ player}></PlayerProgressBar>
        <PlayerFullBtn player={ player}></PlayerFullBtn>
      </Box>
    </Box>
  )
}
export default DialogPlayer
