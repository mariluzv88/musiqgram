import {useContext,useEffect,useState} from 'react'
import { AppContext } from '../../appContext/App_context'
import axios from 'axios'

function Post({user}) {
    // let {musiq} = useContext(AppContext)
    // let {search,setSearch} = useContext(AppContext)
    // let {getMusiq} = useContext(AppContext)
    const [title,setTitle]= useState('')
    const [image,setImage]= useState('')
    let {dispatch} = useContext(AppContext)
    const handleSubmit = async (e)=>{
    e.preventDefault()
    const post = {title,image}
    const res = await fetch('http://localhost:3000/api/posts/new',{
      method:'POST',
      body:JSON.stringify(post),
      headers: {"Content-type":"application/json"}
    })
   const json = await res.json(post)
   setTitle('') 
   setImage('')
   dispatch({type:'postPosts',payload: json})
}
  const handleChange = (e)=>{
    // setSearch(e.target.value)
    // getMusiq(search)
    }
    // useEffect(()=> {
    //   async function getPost() {
    //     axios.get('http://localhost:3000/api//posts/new')
    //     .then(post => setPost(post.data))
    //     .catch(err => console.log(err))
    //   }
      
    //   }, []);
  return (
    <div className='post'>
   {/* <a href='/'>X</a> */}
   <h1>Create Post</h1>
   <form onSubmit={handleSubmit} className='form'  method='POST'>
    
    title:<input type='text' onChange={(e) =>setTitle(e.target.value)} value={title} name='title'/>
    image:<input type='text' onChange={(e) =>setImage(e.target.value)} value={image} name='image'/>
    
    <input className='subBtn' type="submit" name="" value=" SUBMIT"/>
   </form>
   {/* {musiq?( musiq.map((tracks,i)=>{
     return(
      
       <div key = {i}>{tracks.title}/{tracks.subtitle}
                <a href={tracks.url}>url</a> */}
               {/* <img src={}/> */}
                {/* <img src={products.api_featured_image}/> */}
                {/* </div>
            )
          })):(<p>Loading...</p>)} */}
    </div>
  )
}

export default Post