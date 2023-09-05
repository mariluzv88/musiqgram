import {useContext} from 'react'
import { AppContext } from '../../appContext/App_context'
import { useState,useEffect } from 'react'
import * as postAPI from '../../ultilities/post.api'
import axios from 'axios'

function ShowPost({user}) {
    let {post,setPost}= useContext(AppContext)
    let {postUser}= useContext(AppContext)
    const [deletePost,setDeletePost]=useState()
   
    const handleDelete = async()=>{
      const post = await postAPI.deleteById(post._id).then((post)=>{
       
          async function getPost() {
            const post = await postAPI.getAll();
            setPost(post);
          }})

      
       
       
     
    }
 
  return (
    <div className='postBox'>
           
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
                    <h3>✨{posts.title}✨ </h3>
                    <h3>likes 👍</h3>
                    
                  </div>
                  <div className='showPost'>
                <img className='postImg' src={posts.image} /></div>
                <div className='postDeatz'>
                <a href={`/pokemon/${posts._id}/edit`}>Edit</a>
              <form >
                 <input onClick={()=>{handleDelete(posts._id)}} type='submit' value='DELETE'/> </form></div>
                
              
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