// import {useContext} from 'react'
// import { AppContext } from '../../appContext/App_context'
import Post from '../../components/post/Post'
import Feed from '../feed/Feed'
import Profile from '../profile/Profile'
import NavBar from '../../components/Nav/NavBar'

function Main({user,setUser}) {
  // const handleClick = ()=>{

  // }
  
  return (
    <div className='main'>
      
      <div className='feedContainer'><Feed/></div>
      <div className='postContainer'><Profile/>
      <NavBar user={user} setUser={setUser}/>
      <a href='/post/new'>Create Post</a></div>
     {/* <button onClick={handleClick}>Create Post</button> */}
    </div>
  )
}

export default Main

