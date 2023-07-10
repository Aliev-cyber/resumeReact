import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Edit = ({onePost,getOnePost,updatePost}) => {
  const [title,setTitle]=useState(onePost.title);
  const [author,setAuthor]=useState(onePost.author);
  const[image,setImage]=useState(onePost.image);
  const {id} = useParams();

  function handleSave(){
    if(!title || !author || !image){
      alert('fill inps!')
      return;
    }
    let newPost = {
      title,
      author,
      image,
    };
    updatePost(id,newPost);
  }
  

  useEffect(()=>{
    getOnePost(id);
  },[]);

  return (
    <div>
    <div class="all-skills">
 <h2 class="title">Мои скиллы</h2>
 <div>
   <p>HTML</p>
   <div class="container">
     <div class="skills html">90%</div>
   </div>

   <p>CSS</p>
   <div class="container">
     <div class="skills css">90%</div>
   </div>

   <p>Javascript</p>
   <div class="container">
     <div class="skills bem">85%</div>
   </div>

   <p>Bootstrap</p>
   <div class="container">
     <div class="skills bootstrap">90%</div>
   </div>

   <p>React</p>
   <div class="container">
     <div class="skills animation">90%</div>
   </div>
 </div>
</div>
</div>
  )
}

export default Edit