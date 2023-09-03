import  { createContext, useEffect,useState } from 'react'
import axios from 'axios'
export const AppContext = createContext()
const posts = require('../ultilities/post.api');

const AppContextProvider = (props)=>{
    // const [user,setUser] =useState(null)
    const [search,setSearch] =useState('')
    const [musiq,setMusiq]=useState(null)
    const [post,setPost]=useState(null)
    const getMusiq =async (searchTerm)=>{
        const response = await axios.get(`https://shazam.p.rapidapi.com/search?term=${search}`,
        // {params: {term: ''}},
        {headers: {
            'X-RapidAPI-Key': 'e92eec9951mshaba45c3344a2ad6p1f233ejsna6033bf06696',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'}
          })
        let res = response.data
        console.log(res)
        setMusiq(res)
    }
    const getPost= ()=>{
     setPost(posts)
    }
    // musiqSearch = () => {

    // }
    useEffect(()=>{
      getMusiq()
    },[])
    return(
        <AppContext.Provider value={{musiq,setMusiq,search,setSearch,getMusiq,post,setPost}}>
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