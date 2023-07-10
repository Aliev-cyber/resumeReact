import React from 'react'
import {Route,Routes} from "react-router-dom"
import List from "./List"
import Add from "./Add";
import Edit from "./Edit"
import Details from "./Details"
import About from "./About"



const MainRoutes = ({posts,getPosts, addPost,onePost,getOnePost,deletePost,updatePost}) => {
  return (
    <Routes>
        <Route path="/" element ={<List posts={posts} getPosts={getPosts}/>}/>
        <Route path="/add" element ={<Add addPost={addPost}/>}/>
        <Route path="/details/:id" element ={<Details onePost={onePost} getOnePost={getOnePost} deletePost={deletePost}/>}/>
        <Route path="/edit/:id" element ={<Edit updatePost={updatePost} onePost={onePost} getOnePost={getOnePost}/>}/>
        <Route path="/about" element ={<About />}/>
    </Routes>
  )
}

export default MainRoutes