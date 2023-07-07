import '../scss/secondStyle.scss'
import Popup from './Popup';

function Second() {
  const isPopup = true;
  return (
    <div>
      {isPopup && <Popup/> }
    </div>
  )
}

export default Second
