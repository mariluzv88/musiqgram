import {useContext} from 'react'
import { AppContext } from '../../appContext/App_context'
import { useState } from 'react'

function ShowPost() {
    let {post}= useContext(AppContext)
  return (
    <div className='postBox   '>
            <div className='postDeatz'>
            <h3>user name</h3>
            <h3>user likes</h3>
            </div>
            <div className='showPost'>
            <img className='postImg' src={'https://img.freepik.com/free-photo/colorful-picture-flower-with-black-background_1340-32623.jpg?w=2000'}/>
            <audio src='https://open.spotify.com/embed/track/48zFZh27QU5qsrBjn4C2FA?utm_source=generator'/>
            {/* {post.map((posts,i)=>{
           
           return(
               <div key={i}> */}
                
               {/* <a style={nav} href={`/po/${mon._id}`}> */}
                       
                      
                       {/* <h1>{i}</h1> */}
                      
                       {/* <img src={posts.image} />
                       <audio src={posts.audio}></audio> */}
                   
               {/* </a> */}
               {/* </div>
           )
       })} */}
        
            {/* <img className='postImg' src={'https://img.freepik.com/free-photo/colorful-picture-flower-with-black-background_1340-32623.jpg?w=2000'}/>
            <audio src='https://open.spotify.com/embed/track/48zFZh27QU5qsrBjn4C2FA?utm_source=generator'/> */}
            </div>
    </div>
  )
}

export default ShowPost