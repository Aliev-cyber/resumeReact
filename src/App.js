import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MainRoutes from './Components/MainRoutes';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Components/Footer';


function App() {
  const API ='http://localhost:8001/posts'
  const [posts,setPosts]= useState([])
  const [onePost,setOnePost]=useState({});
  const navigate = useNavigate()

  async function getPosts(){
    let {data} = await axios.get(API)
    setPosts(data);
  }

  async function addPost(newPost){
    await axios.post(API,newPost)
    alert("Успешно добавлен")
    navigate('/');
  }

  async function getOnePost(id){
    let {data} = await axios.get(`${API}/${id}`);
    setOnePost(data);
  }
  
  async function deletePost(id){
   await axios.delete(`${API}/${id}`);
   navigate('/');
  }

  async function updatePost(id, updPost){
    await axios.patch(`${API}/${id}`,updPost)
    navigate('/')
  }

  return (
    <div>
        <Header/>
        <MainRoutes 
           posts={posts}
            getPosts={getPosts}
            addPost={addPost} 
            onePost={onePost}
            getOnePost={getOnePost}
            deletePost={deletePost}
            updatePost={updatePost}
          />
          <Footer/>
    </div>
  );
}

export default App;
