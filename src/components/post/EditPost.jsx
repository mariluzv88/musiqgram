import {useContext,useEffect,useState} from 'react'
import { AppContext } from '../../appContext/App_context'

function EditPost() {
    let {title,setTitle} = useContext(AppContext)
    let {image,setImage} = useContext(AppContext)
    let {post,dispatch} = useContext(AppContext)
    const handleSubmit = async ()=>{
        
        // e.preventDefault()
    const post = {title,image}
    const res = await fetch('http://localhost:3000/api/posts/:id/edit',{
      method:'PUT',
      body:JSON.stringify(post),
      headers: {"Content-type":"application/json"}
    })
   const json = await res.json(post)
   setTitle('') 
   setImage('')
   dispatch({type:'postPosts',payload: json})
    }

  return (
    <div className='post'>
    <a href='/'>X</a>
    <h1>Update Post</h1>
    <form onSubmit={() => handleSubmit()} className='form' method='PUT' >
     
     title:<input type='text' onChange={(e) =>setTitle(e.target.value)} value={title}  name='title' defaultValue={title}/>
     image:<input type='text' onChange={(e) =>setImage(e.target.value)} value={image} name='image' defaultValue={image}/>
     
     <input className='subBtn' type="submit" name="" value=" SUBMIT"/>
    </form>
    </div>

  )
}

export default EditPost