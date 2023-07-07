import { useState } from 'react';
import '../scss/secondStyle.scss'
import Popup from './Popup';
import img from '../img/black.jpg'

function Second() {
  const [isPopup, setIsPopup] = useState(false);
  const [color, setColor] = useState('black');
  const buttons =['Red', 'Orange', 'Green', 'Blue', 'Pink' ];
  const changeColor = (e) => {
    console.log(e.target.innerText)
    console.log(isPopup)
    setIsPopup(true);
    setColor(e.target.innerText);
  };
  return (
    <>
      { buttons.map((button, idx) => {
        return (
        <button key={idx} onClick={changeColor}>
          {button}
        </button>
        )
      })}
      {isPopup && <Popup color={color}/> }
      <img className="img" src={img} alt="img"/>
    </>
  )
}

export default Second
