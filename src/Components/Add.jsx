import React, { useState } from 'react'

const Add = ({addPost}) => {
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const[image,setImage]=useState('');

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
    addPost(newPost);
  }

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

export default Add