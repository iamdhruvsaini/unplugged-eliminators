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
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolores at accusamus molestias exercitationem repudiandae iusto saepe, dolore tempore porro doloremque, tenetur et.</h2>
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
