import React from 'react'

const Player = React.forwardRef((props, ref) => (
  <audio ref={ref} src={props.source} preload="auto" controls className="audio-player"></audio>
))

export default Player
