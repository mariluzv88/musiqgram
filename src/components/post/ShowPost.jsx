import {useContext} from 'react'
import { AppContext } from '../../appContext/App_context'
import { useState,useEffect } from 'react'
import * as postAPI from '../../ultilities/post.api'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ShowPost({user}) {
    // let {post,setPost}= useContext(AppContext)
    let {postUser}= useContext(AppContext)
    let {post,dispatch}= useContext(AppContext)
    let {setID}= useContext(AppContext)

   const handlePost=(postId)=>{
    console.log(post._id)
   setID(postId)
   }
    const handleDelete = async(id)=>{
      console.log(id)
      const res = await fetch(`http://localhost:3000/api/posts/${id}/delete`,{
      method:'DELETE'
    })
    const json = await res.json()
 
    dispatch({type:'removePost', payload: json})
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
          
            {post? post.map((post,i)=>{
            console.log(post)
           
           return(
               <div className='p' key={i}> 
                 <div className='postDeatz'>
                    <h3>✨{post.title}✨ </h3>
                    <h3>likes 👍</h3>
                    
                  </div>
                  <div className='showPost'>
                    <img className='postImg' src={post.image} />
                  </div>
                  <div className='postDeatz'>
                 
                  {/* setID(post._id) ,() => handlePost(post._id)*/}
                  <button ><Link to='/edit' state={{ID:post._id,title:post.title,image:post.image}}>EDIT</Link></button>
                  {/* api/posts/'+post._id +' */}
                  <button onClick={() => handleDelete(post._id)}  >DELETE</button> 
                  </div>
                
              
               </div>
           )
       }):'...loading'}
        
            </div>
    </div>
  )
}

export default ShowPost