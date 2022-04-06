import Avatar from "@mui/material/Avatar";
import data from "../../../data";
import { useState, useEffect } from "react";
const MusicImg = (props) => {
  const showUI = props.showUI;
  const { width = "", height = "", marginRight = "", filter = "", opacity = 1 } = props.css || {}
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [totalSongNum, setTotalSongNum] = useState(null);

  useEffect(() => {
    setTotalSongNum(data.length);
  }, []);

  return (
    <Avatar
      variant={"rounded"}
      alt="The image"
      src={data[1].img}
      style={{
        width: width || "100%",
        height: height || "",
        marginRight: marginRight || 0,
        filter: filter || "",
        transition: "height .5s,filter .5s, opacity .5s",
        opacity: opacity || "",
        backgroundColor: "black",
      }}
    />
    // <Avatar
    //   variant={"rounded"}
    //   alt="The image"
    //   src={data[1].img}
    //   style={{
    //     width: showUI ? "100%" : 46,
    //     height: showUI ? 500 : 46,
    //     marginRight: showUI ? 0 : '.5rem',
    //     filter: showUI ? "blur(5px)" : "",
    //     transition: "height .5s,filter .5s, opacity .5s",
    //     opacity: showUI ? ".7" : "",
    //     backgroundColor: "black",
    //   }}
    // />
  );
};
export default MusicImg;
