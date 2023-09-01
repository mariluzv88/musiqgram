import {useContext} from 'react'
import { AppContext } from '../../appContext/App_context'

function Feed() {
    let {post}= useContext(AppContext)
  return (
    <div>
        <h1>Feed in posts here</h1>
        {/* <img src={post.image}/> */}
    </div>
  )
}

export default Feed