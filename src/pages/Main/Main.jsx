// import {useContext} from 'react'
// import { AppContext } from '../../appContext/App_context'
import Post from '../../components/post/Post'
import Feed from '../feed/Feed'
import Profile from '../profile/Profile'

function Main() {
  // const handleClick = ()=>{

  // }
  
  return (
    <div className='main'>
      <div className='feedContainer'><Feed/></div>
      <div className='postContainer'><Profile/>
      <a href='/post/new'>Create Post</a></div>
     {/* <button onClick={handleClick}>Create Post</button> */}
    </div>
  )
}

export default Main

