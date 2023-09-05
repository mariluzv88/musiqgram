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
      
      <div className='feedContainer'><Feed user={user}/></div>
      <div className='postContainer'><Profile user={user} />
      <NavBar user={user} setUser={setUser}/>
      {/* <Post/> */}
      <a href='/post/new'>Create Post</a>
      </div>
     {/* <button onClick={handleClick}>Create Post</button> */}
    </div>
  )
}

export default Main

