import {useContext} from 'react'
import { AppContext } from '../../appContext/App_context'
import { useState,useEffect } from 'react'
import * as postAPI from '../../ultilities/post.api'

function ShowPost({user}) {
    let {post}= useContext(AppContext)
    let {postUser}= useContext(AppContext)
   
    // const [post,setPost]=useState([])
 
  return (
    <div className='postBox   '>
           
            <div >
            {/* <img className='postImg' src={'https://img.freepik.com/free-photo/colorful-picture-flower-with-black-background_1340-32623.jpg?w=2000'}/>
            <audio src='https://open.spotify.com/embed/track/48zFZh27QU5qsrBjn4C2FA?utm_source=generator'/> */}
            {post.map((posts,i)=>{
            console.log(post)
            // if(post.userID === user.id){
            //  console.log(user.id)
            // }
           return(
               <div key={i}> 
                 <div className='postDeatz'>
                    <h3>user name</h3>
                    <h3>user likes</h3>
                    
                  </div>
                  <div className='showPost'>
                    <img className='postImg' src={posts.image} />
                    <audio src={posts.audio}></audio> 
                 </div>
              
               </div>
           )
       })}
        
            {/* <img className='postImg' src={'https://img.freepik.com/free-photo/colorful-picture-flower-with-black-background_1340-32623.jpg?w=2000'}/>
            <audio src='https://open.spotify.com/embed/track/48zFZh27QU5qsrBjn4C2FA?utm_source=generator'/> */}
            </div>
    </div>
  )
}

export default ShowPost