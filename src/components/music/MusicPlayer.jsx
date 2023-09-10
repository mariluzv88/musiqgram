import {useContext,useEffect,useState} from 'react'
import { AppContext } from '../../appContext/App_context'
import {  FaForward,FaStepForward, FaStepBackward,FaBackward,FaPlay,FaPause,} from 'react-icons/fa'

function MusicPlayer() {
    let {title,setTitle} = useContext(AppContext)
    let {image,setImage} = useContext(AppContext)
    let {song,setSong} = useContext(AppContext)
  return (
    <div className='player'>
     <audio src={song} preload='metadata' />
    </div>
  )
}

export default MusicPlayer