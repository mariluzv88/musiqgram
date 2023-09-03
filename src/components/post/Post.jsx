import {useContext} from 'react'
import { AppContext } from '../../appContext/App_context'

function Post() {
    let {musiq} = useContext(AppContext)
    let {search,setSearch} = useContext(AppContext)
    let {getMusiq} = useContext(AppContext)
    let {setPost} = useContext(AppContext)
    const handleSubmit = (e)=>{
    e.preventDefault()
   
}
  const handleChange = (e)=>{
    setSearch(e.target.value)
    getMusiq(search)
    }
  return (
    <div className='post'>
   <h1>Create Post</h1>
   <a href='/'>X</a>
   <form onSubmit={handleSubmit} className='form' action='/post' method='POST'>
    image:<input type='text' name='image'/>
    {/* song:<input type='text' name='song'onChange={handleChange} value={search}/> */}
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