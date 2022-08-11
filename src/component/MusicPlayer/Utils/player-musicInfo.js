import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { blueGrey, pink } from '@mui/material/colors'
import { useSelector } from 'react-redux'

const MusicInfo = (props) => {
  const {
    display = 'block',
    position = 'static',
    width = '100%',
    bottom = 0,
    padding = 0,
    marginRight = 0,
    color = '#000'
  } = props.css || {}
  const showBtn = props.showBtn
  const { songListData, currentSongIndex } = useSelector((state) => state.musicplayer)
  return (
    <Box
      sx={{
        display: display || 'block',
        position: position || 'static',
        bottom: bottom !== undefined ? bottom : null,
        padding: padding || 0,
        width: width || '100%',
        textOverflow: 'ellipsis',
        marginRight: marginRight || 0,
        transition: 'all .5s'
      }}
    >
      {/* 作者歌名 */}
      <Box
        sx={{
          width: showBtn ? 'calc(100% - 70px)' : '100%'
        }}
      >
        <Typography noWrap variant={showBtn ? 'h5' : 'h6'} color={color}>
          {songListData.length === 0 ? '' : songListData[currentSongIndex].songTitle}
        </Typography>

        <Typography variant='body2' fontSize={10} color={color}>
          {songListData.length === 0 ? '' : songListData[currentSongIndex].author}
        </Typography>
      </Box>
      {/* 更多功能、喜歡 */}
      <Box
        sx={{
          display: showBtn ? 'flex' : 'none',
          justifyContent: 'right',
          alignItems: 'center',
          width: 70
        }}
      >
        <IconButton
          sx={{
            width: 30,
            height: 30
          }}
        >
          <MoreHorizIcon sx={{ color }}></MoreHorizIcon>
        </IconButton>
        <IconButton
          sx={{
            width: 30,
            height: 30
          }}
        >
          <FavoriteBorderIcon sx={{ color, '&:hover': { color: pink[500] } }}></FavoriteBorderIcon>
        </IconButton>
      </Box>
    </Box>
    // <Box
    //   sx={{
    //     display: showUI ? "flex" : "block",
    //     position: showUI ? "absolute" : "",
    //     bottom: showUI ? 50 : "",
    //     padding: showUI ? "15px" : 0,
    //     width: showUI ? "100%" : "calc(100% - 46px - 5px - 70px - 5px)",
    //     textOverflow: "ellipsis",
    //     marginRight: showUI ? 0 : "5px",
    //     transition: "all .5s",
    //   }}
    // >
    //   {/* 作者歌名 */}
    //   <Box
    //     sx={{
    //       width: showUI ? "calc(100% - 70px)" : "100%",
    //     }}
    //   >
    //     <Typography noWrap variant={showUI ? "h5" : "h6"} color={showUI ? blueGrey[100] : "#000"}>
    //       還是要有長頸鹿才能
    //     </Typography>

    //     <Typography variant="body2" fontSize={10} color={showUI ? blueGrey[100] : "#000"}>
    //       沒有才能
    //     </Typography>
    //   </Box>
    //   {/* 喜歡 */}
    //   <Box
    //     sx={{
    //       display: showUI ? "flex" : "none",
    //       justifyContent: "right",
    //       alignItems: "center",
    //       width: 70,
    //     }}
    //   >
    //     <IconButton
    //       sx={{
    //         width: 30,
    //         height: 30,
    //       }}
    //     >
    //       <MoreHorizIcon sx={{ color: blueGrey[100] }}></MoreHorizIcon>
    //     </IconButton>
    //     <IconButton
    //       sx={{
    //         width: 30,
    //         height: 30,
    //       }}
    //     >
    //       <FavoriteBorderIcon
    //         sx={{ color: blueGrey[100], "&:hover": { color: pink[500] } }}
    //       ></FavoriteBorderIcon>
    //     </IconButton>
    //   </Box>
    // </Box>
  )
}
export default MusicInfo
