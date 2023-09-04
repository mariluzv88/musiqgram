import {useContext} from 'react'
import { AppContext } from '../../appContext/App_context'
import { useState,useEffect } from 'react'
import * as postAPI from '../../ultilities/post.api'

function ShowPost() {
    // let {post}= useContext(AppContext)
    const [post,setPost]=useState([])
    // useEffect(function() {
    //   const getPost= async()=> {
    //     const post = await postAPI.getAll();
      
       
    //     setPost(post);
       
    //   }
    //   getPost();
     
     
     
    // }, []);
  return (
    <div className='postBox   '>
            <div className='postDeatz'>
            <h3>user name</h3>
            <h3>user likes</h3>
            <img src={post.image}/>
            </div>
            <div className='showPost'>
            <img className='postImg' src={'https://img.freepik.com/free-photo/colorful-picture-flower-with-black-background_1340-32623.jpg?w=2000'}/>
            <audio src='https://open.spotify.com/embed/track/48zFZh27QU5qsrBjn4C2FA?utm_source=generator'/>
            {post.map((posts,i)=>{
            console.log(post)
           return(
               <div key={i}> 
                
              
                       
                      
                    
                      
                        <img src={posts.image} />
                       <audio src={posts.audio}></audio> 
                   
              
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