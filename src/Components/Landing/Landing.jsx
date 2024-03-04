import React from 'react'
import './Landing.min.css'
import Nav from '../Nav/Nav'

export default function Landing() {
  return (
    <>
      <Nav />
      <div className="content">
        <div className="left">
          <h1>Connectify</h1>
          <h2>Connectify is a dynamic online platform designed to foster collaboration and community building among college students. It goes beyond traditional social networks by connecting students across various academic years, emphasizing the sharing of skills and knowledge.</h2>
          <div className="buttons">
            <div className="login">Login</div>
          </div>
        </div>
        <div className="right">
          <img src="src/assets/Images/Chaotic Good.svg" alt="" />
        </div>
      </div>
    </>
  )
}
