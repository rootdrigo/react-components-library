import React, { useState } from 'react'
import './Register.css'


function angleCalc(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;

  const rad = Math.atan2(dy, dx);
  const deg = rad * 180 / Math.PI;

  return deg;
}

const handleMouseMoveRegister = (event) => {
  const mouseX= event.clientX;
  const mouseY = event.clientY;

  const bodyCenterX = 460;
  const bodyCenterY = 320;

  const angle = angleCalc(mouseX, mouseY, bodyCenterX, bodyCenterY) + 90;

  const [angleDeg, setAngle] = useState(0);
  setAngle(angle);
};



const Register = () => {
  return (
    <>
      <div className="register-container" onMouseMove={handleMouseMoveRegister}>
        <div className="column left">
          <img id="blob-body" src='./mascot-body.png' />
          <img style={{rotate: angleDeg+'deg'}} id="blob-eyes" src='./mascot-face.png' />
        </div>
        <div className="column right">
          <h2>Register Now!</h2>
          <p>This column takes up 40% of the container's width.</p>
        </div>
      </div>
    </>
  )
}

export default Register; 
