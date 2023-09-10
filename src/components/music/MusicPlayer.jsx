import {useContext,useEffect,useState} from 'react'
import { AppContext } from '../../appContext/App_context'

function MusicPlayer() {
    let {title,setTitle} = useContext(AppContext)
    let {image,setImage} = useContext(AppContext)
    let {song,setSong} = useContext(AppContext)
  return (
    <div>

    </div>
  )
}

export default MusicPlayer