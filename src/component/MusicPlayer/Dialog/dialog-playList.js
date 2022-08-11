import { Box } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ImageIcon from '@mui/icons-material/Image'
import { pink, blueGrey } from '@mui/material/colors'
import { GlobalStyles } from '@mui/material'
import MusicImg from '../Utils/player-musicImg'
import { Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
const scrollbarStyle = (
  <GlobalStyles
    styles={{
      '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        backgroundColor: pink[500],
        borderRadius: '5px'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: pink[100],
        borderRadius: '5px',
        border: `1px solid ${pink[300]}`
      }
    }}
  />
)
const DialogPlayList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: pink[900],
        flex: 1,
        borderRadius:2,
        transition: 'all .5s',
        boxShadow:3
      }}
    >
      {scrollbarStyle}
      <List
        style={{
          width: '85%',
          maxHeight: '85%',
          overflow: 'auto'
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <MusicImg
              css={{
                width: 50,
                height: 50
              }}
            ></MusicImg>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant='h6' style={{ color: blueGrey[100] }}>
                還是要有長頸鹿才能
              </Typography>
            }
            secondary={
              <Typography variant='body1' style={{ color: blueGrey[100] }}>
                沒有才能
              </Typography>
            }
          />
          <IconButton>
            <FavoriteBorderIcon
              sx={{
                color: blueGrey[100]
              }}
            ></FavoriteBorderIcon>
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Photos' secondary='Jan 9, 2014' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Photos' secondary='Jan 9, 2014' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Photos' secondary='Jan 9, 2014' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Photos' secondary='Jan 9, 2014' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Photos' secondary='Jan 9, 2014' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Photos' secondary='Jan 9, 2014' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Photos' secondary='Jan 9, 2014' />
        </ListItem>
      </List>
    </Box>
  )
}
export default DialogPlayList
