import {useContext,useEffect} from 'react'
import { AppContext } from '../../appContext/App_context'
import axios from 'axios'

function Post({user}) {
    // let {musiq} = useContext(AppContext)
    // let {search,setSearch} = useContext(AppContext)
    // let {getMusiq} = useContext(AppContext)
    let {setPost,post} = useContext(AppContext)
    const handleSubmit = (e)=>{
    e.preventDefault()
   
}
  const handleChange = (e)=>{
    // setSearch(e.target.value)
    // getMusiq(search)
    }
    useEffect(()=> {
      async function getPost() {
        axios.get('http://localhost:3000/api//posts/new')
        .then(post => setPost(post.data))
        .catch(err => console.log(err))
      }
      
      }, []);
  return (
    <div className='post'>
   <a href='/'>X</a>
   <h1>Create Post</h1>
   <form onSubmit={handleSubmit} className='form' action='/post' method='POST'>
    userID:{user._id.name}
    image:<input type='text' name='image'/>
    song:<input type='text' name='song'onChange={handleChange} />
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