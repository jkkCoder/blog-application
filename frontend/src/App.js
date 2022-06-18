
import './App.css';
import Header from './components/Header';
import Auth from './components/Auth'
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs'
import BlogDetail from './components/BlogDetail'
import AddBlog from './components/AddBlog'
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import { authActions } from './store';
//

function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state=>state.isLoggedIn)
  console.log(isLoggedIn)
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(authActions.login())
    }
  })
  return <>
    {/* <BrowserRouter>   //BrowserRouter is wrapped in index.js */}
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetail />} />
          <Route path="blogs/add" element={<AddBlog />} />
        </Routes>
      </main>
    {/* </BrowserRouter>'][] */}
  </>
}

export default App;
