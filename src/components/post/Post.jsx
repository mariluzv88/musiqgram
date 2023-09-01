import {useContext} from 'react'
import { AppContext } from '../../appContext/App_context'

function Post() {
    let {musiq} = useContext(AppContext)
    let {search,setSearch} = useContext(AppContext)
    let {getMusiq} = useContext(AppContext)
    const handleSubmit = (e)=>{
    e.preventDefault()
    getMusiq(search)
    }
    const handleChange = (e)=>{
      setSearch(e.target.value)
    }
  return (
    <div className='post'>
   <h1>Create Post</h1>
   <form onSubmit={handleSubmit} className='form' action='/post' method='POST'>
    image:<input type='text' name='img'/>
    song:<input type='text' name=''onChange={handleChange} value={search}/>
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