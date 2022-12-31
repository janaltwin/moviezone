import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>© 2022 MovieZone. All Rights Reserved. This is a movie web app front-end I developed using React Js, HTML, Css and Firebase.<h2>- Jan Altwin Pineda.</h2></p>
          </div>
          <div className='box'>
            <h3>Follow Me</h3>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
          </div>
          <div className='box'>
            <h3>MovieZone App</h3>
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' alt="App Store Icon" />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' alt="Play Store Icon" />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
