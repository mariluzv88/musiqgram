import  { createContext, useEffect,useReducer,useState } from 'react'
import * as postAPI from '../ultilities/post.api'
import axios from 'axios'
import { getUser } from '../ultilities/users-service';

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [search,setSearch] =useState('')
    const [musiq,setMusiq]=useState(null)
    const [post,setPost]=useState([])
    const [postUser,setPostUser]=useState([])
    const postReducer = (state,action)=>{
     switch(action.type){
         case 'makePosts':
             return {post:action.payload}
         case 'postPosts':
             return {post:[action.payload,...state.post]}
         default:
             return state   
     }
 
    }
   const[state, dispatch]= useReducer(postReducer,{
    post: null
   })
   
    
    // useEffect(()=> {
    //     async function getPost() {
    //       const post = await postAPI.getAll();
    //       dispatch({type:'makePosts',payload: post})
    //     //   setPost(post);
    //     }
    //     getPost();
    //     }, []);
    
    return(
        <AppContext.Provider value={{post,setPost,postUser,setPostUser,...state,dispatch}}>
         {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
// const options = {
    //     method: 'GET',
    //     url: 'https://shazam.p.rapidapi.com/charts/track',
    //     headers: {
        //       'X-RapidAPI-Key': 'e92eec9951mshaba45c3344a2ad6p1f233ejsna6033bf06696',
        //       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        //     }
        //   };
        
        //   axios.request(options).then(function (response) {
            //     console.log(response.data);
            //   }).catch(function (error) {
                //     console.error(error);
//   });
// search
// import axios from "axios";

// const options = {
    //   method: 'GET',
    //   url: 'https://shazam.p.rapidapi.com/search',
    //   params: {term: 'kendrick lamar'},
    //   headers: {
        //     'X-RapidAPI-Key': 'e92eec9951mshaba45c3344a2ad6p1f233ejsna6033bf06696',
        //     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        //   }
        // };
        
        // axios.request(options).then(function (response) {
            //   console.log(response.data);
            // }).catch(function (error) {
                //   console.error(error);
                // });
                // -------------------------------------------shazmam music api
                // const getMusiq =async (searchTerm)=>{
                //     const response = await axios.get(`https://shazam.p.rapidapi.com/search?term=${search}`,
                //     // {params: {term: ''}},
                //     {headers: {
                //         'X-RapidAPI-Key': 'e92eec9951mshaba45c3344a2ad6p1f233ejsna6033bf06696',
                //         'X-RapidAPI-Host': 'shazam.p.rapidapi.com'}
                //       })
                //     let res = response.data
                //     console.log(res)
                //     setMusiq(res)
                // }
                // const getPost= async()=>{
                //   const res =await axios.get("api/post/feed")
                //   console.log(res)
                //  setPost(res.data)
                // }
                // musiqSearch = () => {
                
                // }