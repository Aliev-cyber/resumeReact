import React, { useEffect } from 'react'
import { Button,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../Pages/logo.jpeg"


const List = ({posts, getPosts}) => {
  console.log(posts);
  useEffect(()=>{
    getPosts();
  }, []);


  return( 
  <div>
     <section class="home">
      <div class="home-sci">
        <a href="https://m.facebook.com/login/?locale=ru_RU&refsrc=deprecated"
          ><i class="bx bxl-facebook"></i
        ></a>
        <a href="https://www.instagram.com/"
          ><i class="bx bxl-instagram"></i
        ></a>
        <a
          href="https://www.linkedin.com/feed/?trk=create_password_from_post-login"
          ><i class="bx bxl-linkedin"></i
        ></a>
      </div>
      <div class="home-content">
        <h1>я Саид</h1>
        <h3>Frontend Developer</h3>
        <p>
          «Обладаю высокой работоспособностью, умею работать в режиме
          многозадачности и в команде, имею развитые организационные и
          управленческие способности. Хобби, футбол, музыка, машины.
        </p>
        <a href="https://t.me/sa1dabz" target="_blank" class="btn"
          >Связь со мной</a
        >
      </div>

      <div class="home-img">
        <div class="glowing-circle">
          <span></span>
          <span></span>
          <div class="image">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default List