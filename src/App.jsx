import { useState } from 'react';
import { getUser } from './ultilities/users-service';
import {Route, Routes,Navigate} from 'react-router-dom'
import AuthPage from './pages/Auth/AuthPage';
import NavBar from './components/Nav/NavBar';
import Main from './pages/Main/Main'
import Feed from './pages/feed/Feed';
import Post from './components/post/Post';
import Select from './pages/select/Select';
import './App.css';


function App() {
  const [user,setUser]=useState(getUser())
  
 
  return (
    <main className="App">
     {
       user?
       <>
          <NavBar user={user} setUser={setUser}/>
          <Main/>
         
          <Routes>
             <Route path='/post/new' element={<Post user={user}/>}/>
             <Route path='/post' element={<Feed user={user}/>}/>
             <Route path='/post/:id' element={<Select user={user}/>}/>
             {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
             {/* <Route path="/*" element={<Navigate to="/orders/new" />} /> */}
          </Routes>
       </>
       :
      <AuthPage setUser={setUser}/>
     }
    </main>
  );
}

export default App;
