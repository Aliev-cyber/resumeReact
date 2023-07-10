import React from 'react'

const Footer = () => {
  return (
    <footer class="footer">
      <div>
        <h3>Обо мне</h3>
        <p>Не люблю нефоров</p>
        <p>Мне 21</p>
      </div>
      <div>
        <h3>Мои контакты</h3>
        <p>ivan.ivanov@test.com</p>
        <p>
          <a href="tel:123-456-7890">+996777777777</a>
        </p>
      </div>
      <div>
        <h3>Мои проекты</h3>
        <p>
          <a href="https://www.amazon.com/" target="_blank">amazon.com</a>
        </p>
        <p>
          <a href="https://www.facebook.com/" target="_blank">facebook.com</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/" target="_blank">linkedin.com</a>
        </p>
        <p>
          <a href="https://www.twitter.com/" target="_blank">twitter.com</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer