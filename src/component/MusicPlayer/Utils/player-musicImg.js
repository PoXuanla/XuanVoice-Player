import Avatar from '@mui/material/Avatar'
import data from '../../../data'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const MusicImg = (props) => {
  const showUI = props.showUI
  const { width = '', height = '', marginRight = '', filter = '', opacity = 1 } = props.css || {}
  const [totalSongNum, setTotalSongNum] = useState(null)

  const { songListData, currentSongIndex } = useSelector((state) => state.musicplayer)
  useEffect(() => {
    setTotalSongNum(data.length)
  }, [])

  return (
    <Avatar
      variant={'rounded'}
      alt='The image'
      src={songListData.length !== 0 ? songListData[currentSongIndex].img : ''}
      style={{
        width: width || '100%',
        height: height || '',
        marginRight: marginRight || 0,
        filter: filter || '',
        transition: 'height .5s,filter .5s, opacity .5s',
        opacity: opacity || '',
        backgroundColor: 'black'
      }}
    />
  )
}
export default MusicImg
