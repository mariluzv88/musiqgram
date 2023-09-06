import {useContext} from 'react'
import { AppContext } from '../../appContext/App_context'
import { useState,useEffect } from 'react'
import * as postAPI from '../../ultilities/post.api'
import axios from 'axios'

function ShowPost({user}) {
    // let {post,setPost}= useContext(AppContext)
    let {postUser}= useContext(AppContext)
    let {post,dispatch}= useContext(AppContext)
    const [deletePost,setDeletePost]=useState()
   
    const handleDelete = async(id)=>{
      console.log(id)
      const res = await fetch(`http://localhost:3000/api/posts/${id}/delete`,{
      method:'DELETE'
    })
    const json = await res.json()
 
    dispatch({type:'removePost', payload: json})
    }
    const handleEdit = async(id)=>{
      const res = await fetch(`http://localhost:3000/api/posts/${post._id}/edit`,{
      method:'PUT'
    })
    const json = await res.json()
    dispatch({type:'editPost', payload: json})
    }
    useEffect(()=> {
      async function getPost() {
        const post = await postAPI.getAll();
         await dispatch({type:'makePosts',payload: post.reverse()})
      //   setPost(post);
      }
      getPost();
      }, []);
  
 
  return (
    <div className='postBox'>
           
            <div >
            {/* <img className='postImg' src={'https://img.freepik.com/free-photo/colorful-picture-flower-with-black-background_1340-32623.jpg?w=2000'}/>
            <audio src='https://open.spotify.com/embed/track/48zFZh27QU5qsrBjn4C2FA?utm_source=generator'/> */}
            {post? post.map((post,i)=>{
            console.log(post)
            // if(post.userID === user.id){
            //  console.log(user.id)
            // }
           return(
               <div key={i}> 
                 <div className='postDeatz'>
                    <h3>✨{post.title}✨ </h3>
                    <h3>likes 👍</h3>
                    
                  </div>
                  <div className='showPost'>
                    <img className='postImg' src={post.image} />
                  </div>
                  <div className='postDeatz'>
                 
                  
                  <button><a   onClick={() => handleEdit(post._id)}href={'/edit'} >EDIT</a> </button>
                  {/* api/posts/'+post._id +' */}
                  <button onClick={() => handleDelete(post._id)}  >DELETE</button> 
                  </div>
                
              
               </div>
           )
       }):'...loading'}
        
            {/* <img className='postImg' src={'https://img.freepik.com/free-photo/colorful-picture-flower-with-black-background_1340-32623.jpg?w=2000'}/>
            <audio src='https://open.spotify.com/embed/track/48zFZh27QU5qsrBjn4C2FA?utm_source=generator'/> */}
            </div>
    </div>
  )
}

export default ShowPost