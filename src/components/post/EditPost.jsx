import {useContext,useEffect,useState} from 'react'
import {useLocation} from 'react-router-dom'
import { AppContext } from '../../appContext/App_context'

function EditPost() {
    let {state}=useLocation()
    const [title,setTitle] = useState(state.title)
    const [image,setImage] = useState(state.image)
    let {post,dispatch} = useContext(AppContext)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log("!!!!!!!!!")
        const res = await fetch(`/api/posts/${state.ID}/edit`,{
        method:'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title,image:image })
      })
      const json = await res.json()
      console.log("error",json)
  

    }

  return (
    <div className='post'>
   
    <a className='x' href='/'>X</a>
    <h1>Update Post</h1>
    <form onSubmit={ handleSubmit} className='form'  >
     
     title:<input type='text' onChange={(e) =>setTitle(e.target.value)}  name='title' defaultValue={state.title}/>
     image:<input type='text' onChange={(e) =>setImage(e.target.value)} name='image' defaultValue={state.image}/>
     
     <input className='subBtn' type="submit" name="" value=" SUBMIT"/>
    </form>
    </div>

  )
}

export default EditPost