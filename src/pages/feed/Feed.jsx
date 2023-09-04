import {useContext} from 'react'
import { AppContext } from '../../appContext/App_context'
import ShowPost from '../../components/post/ShowPost'

function Feed() {
    let {post}= useContext(AppContext)
  return (
    <div>
      
        <h1>Feed in posts here</h1>
        <div> <ShowPost/> </div>
        
        {/* <img src={post.image}/> */}
    </div>
  )
}

export default Feed